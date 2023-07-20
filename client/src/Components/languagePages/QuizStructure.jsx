import React,{useEffect, useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {Button, Container, Heading, Progress, Radio, RadioGroup, Stack, Text, useToast } from '@chakra-ui/react';
import { allQuestions } from '../../Questions/data';
import axios from 'axios';
import { useQuiz } from '../../Storage/UserStorage';
import { AchievementTriggerStructure } from '../Profile/achievementTriggerStructure';
import { checkSubsetArray } from '../../HelperFunctions/checkSubsetArray';

export const QuizStructure = ({quizTitle,previousLevelRoute, nextLevelRoute, questions,
    questionLabel,backToCourseRoute, value, courseDiff}) => {

    const toast = useToast();
    
    const navigate = useNavigate()

    //const {quiz, saveQuiz} = useQuiz()

    const [currentAnswers,setCurrentAnswers] = useState([])

    const previousLevel = () => {
        navigate(`/${previousLevelRoute}`)
    }
    
    function getScore() {
        var score  = 0;
        for (var i = 0; i < currentAnswers.length ; i++) {
            console.log("currentAnswers",currentAnswers);
            console.log("questionLabel",questionLabel)
            console.log("allQuestions[questionLabel][i]",allQuestions[questionLabel]);
            if (currentAnswers[i] === allQuestions[questionLabel][i].answer) {
                score += 1;
            }
        }
        return score;
    }

    const handleAnswerChange = (newAnswer,questionNumber) =>{

        currentAnswers[questionNumber] = newAnswer
        setCurrentAnswers([...currentAnswers])
    }

    const getLoadedAttempt = async() =>{
        const userId = localStorage.getItem("userId");
        var quiz = null;
        const currentAns = [];
        const loadedUserAttempt = await axios.get(`${process.env.REACT_APP_BACKEND_SERVER}/api/questionAttempts/${userId}/${questionLabel}`)
        if(loadedUserAttempt.data.hasOwnProperty("data")) {
            quiz =  loadedUserAttempt.data.data
        }
        if (quiz) {
            // have prior attempt
            console.log("attempt exists =D")
            console.log(quiz)
            for(var i = 0;i < quiz.questions.length; i++){
                const {questionNo,answerValue} = quiz.questions[i]
                currentAns.push(answerValue)
            }
        }
        else{
            // first attempt
            console.log("attempt does not exist =D")
            for(var i = 0;i < allQuestions[questionLabel].length; i++){
                currentAns.push("-1")
            }
        }
        // quiz[questionLabel]
        setCurrentAnswers(currentAns)
        }
    
    const saveQuiz = async(questionAttempt, successToastTitle, successToastDescription, navigationRoute) =>{
        const userId = localStorage.getItem("userId");
        await axios.post(`${process.env.REACT_APP_BACKEND_SERVER}/api/questionAttempts/`, {questionLabel, userId, questions: questionAttempt})
        .then((res) => {
            console.log(res.data);
            toast({
                title: successToastTitle,
                description: successToastDescription,
                duration: 5000,
                isClosable: true,
                status: 'success',
                position: 'top',
            });
            navigate(`/${navigationRoute}`)
        }).catch((err) => {
            console.log(err)
            toast({
                title: "Error",
                description: "Please try again later",
                duration: 5000,
                isClosable: true,
                status: 'error',
                position: 'top',
            });
        })
    }

    const formatAnswer = () =>{
        let quizAnswerArray = []
        for(var i = 0; i < currentAnswers.length; i ++){
            //console.log(i,currentAnswers[i])
            quizAnswerArray.push({
                questionNo:i,
                answerValue: currentAnswers[i]
            })
        }
        return quizAnswerArray
    }

    // go to next level   
    const nextLevel = async () => {
        var maxScore = "/" + allQuestions[questionLabel].length + " correct"
        var pass = "Passed! Please proceed to next level";
        var fail = "Please try again!"
        var score = getScore();
        const email = localStorage.getItem("email");
        const type = "English Course";
        const info = {email, type};
        const courseDoneDictionary = {"ebcoursedone" : "English Baby", "eicoursedone" : "English Apprentice", "eacoursedone" : "English Sage"}
        if (score === allQuestions[questionLabel].length) {
            const updatedAnswer = formatAnswer();
            await saveQuiz(updatedAnswer, pass, score + maxScore, nextLevelRoute)
            if (Object.keys(courseDoneDictionary).includes(nextLevelRoute)) {
                const title = courseDoneDictionary[nextLevelRoute]
                await AchievementTriggerStructure(title, toast)
                await axios.get(`${process.env.REACT_APP_BACKEND_SERVER}/api/achievements/${localStorage.getItem("userId")}`)
                    .then(async (res) => {
                        //console.log(res.data.data.achievements);
                        console.log(checkSubsetArray(res.data.data.achievements, Object.values(courseDoneDictionary)));
                        if (checkSubsetArray(res.data.data.achievements, Object.values(courseDoneDictionary))) {
                            await AchievementTriggerStructure("English Finisher", toast)
                            await axios.put(`${process.env.REACT_APP_BACKEND_SERVER}/users/cert/`, info)
                            .then(res => {
                                console.log(res);
                                toast({
                                    title: "Email",
                                    description: res.data.message,
                                    duration: 5000,
                                    isClosable: true,
                                    status: 'info',
                                    position: 'top',
                                });
                            })
                        }
                    }).catch((err) => {
                        console.log(err)
                    })
                }
        } else {
            toast({
                title: fail,
                description: score + maxScore,
                duration: 5000,
                isClosable: true,
                status: 'info',
                position: 'top',
            });
            //alert(fail + "\n" + score + maxScore);
        }
    }

    const saveProgress = async () => {
        var email = localStorage.getItem("email");
        const course = email + " English Course";
        const meter = email + " English Meter";
        localStorage.setItem(course, {courseDiff});
        localStorage.setItem(meter, `${value}%`);
        // this is where the saveQuiz comes in
        const updatedAnswer = formatAnswer();
        await saveQuiz(updatedAnswer, "Progress Saved", "Your progress has been saved", backToCourseRoute)
    }

    
    useEffect(()=>{
        getLoadedAttempt()
    },[])

    return (
        <>
            <Heading color="teal.500"> 
                {quizTitle}
            </Heading>
            <Progress 
                colorScheme="teal" 
                size="lg"
                width="90%"
                margin="0 auto"
                value={value}
                />
                <Container>
                    {
                        questions ?<>
                        {
                        questions.map((question,questionIndex) => {
                            const {description,options} = question
                            return<>
                            <Text textAlign={"left"}> {questionIndex+1} {description}</Text>
                          {  /*<Stack> */}
                                <RadioGroup name = {questionIndex}  
                                   onChange = {(e)=>{handleAnswerChange(e,questionIndex)}}
                                   value = {currentAnswers[questionIndex]}
                                >
                                <Stack m = {"10px"}>
                                {
                                    options.map((option,index)=>{
                                        const {value,text} = option;
                                        return <>
                                        <Radio
                                        key = {index}
                                        name = {questionIndex} 
                                        value = {value} >
                                        {text}
                                        </Radio>
                                        </>

                                    })
                                }
                                </Stack>
                                </RadioGroup>
                                 
                        {/* </Stack> */}

                            </>
                        })
                    }</>:null
                    }
                </Container>
                <Container>
                <Button 
                    m="5px"
                    type="submit" 
                    colorScheme = "teal" 
                    width = "480px"
                    variant="solid"
                    onClick={nextLevel}>
                    Submit
                </Button>
                <Button 
                    type="submit" 
                    m="5px"
                    colorScheme = "teal" 
                    width = "480px"
                    variant="solid"
                    onClick={saveProgress}>
                    Save and exit
                </Button>
                <Button 
                    type="submit" 
                    m="5px"
                    colorScheme = "teal" 
                    width = "480px"
                    variant="solid"
                    onClick={previousLevel}>
                    Back
                </Button>
            </Container>
        </>
    )
}

export default QuizStructure