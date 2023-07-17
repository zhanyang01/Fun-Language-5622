import React,{useEffect, useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {Button, Container, Heading, Input, Text, useToast } from '@chakra-ui/react';
import { testQuestions } from '../../Questions/assessment';
import axios from 'axios';

export const AssessmentStructure = ({testTitle, nextLevelRoute, questions,
    questionLabel}) => {

    const toast = useToast();
    
    const navigate = useNavigate();

    // const {quiz, saveQuiz} = useQuiz()    
    
    // const [currentAnswers,setCurrentAnswers] = useState([])

    /*
    const handleAnswerChange = (newAnswer,questionNumber) =>{
        currentAnswers[questionNumber] = newAnswer
        setCurrentAnswers([...currentAnswers])
    }
    */
    
    function getScore() {
        var score  = 0;
        const currentAnswers = document.getElementsByTagName('input');
        for (var i = 0; i < currentAnswers.length ; i++) {
            console.log("currentAnswers",currentAnswers);
            console.log("questionLabel",questionLabel);
            console.log("testQuestions[questionLabel][i]", testQuestions[questionLabel]);
            if (currentAnswers[i].value === testQuestions[questionLabel][i].answer) {
                score += 1;
            }
        }
        return score;
    }
    
    /*
    useEffect(()=>{
        console.log("ans",currentAnswers)
    },[currentAnswers])

    /*
    useEffect(()=>{
        console.log("quiz",quiz)
        const currentAns = []
        // check if there or no
        if(quiz.hasOwnProperty(questionLabel)){
            // have prior attempt
            console.log("attempt exists =D")
            for(var i = 0;i < quiz[questionLabel].length; i++){
                const {questionNo,answerValue} = quiz[questionLabel][i]
                currentAns.push(answerValue)
            }
        }
        else{
            // first attempt
            for(var i = 0;i < testQuestions[questionLabel].length; i++){
                currentAns.push("-1")
            }
        }
        // quiz[questionLabel]
        setCurrentAnswers(currentAns)
    },[])
    */
            
    const submitAnswer = async() => {
        var maxScore = "/" + testQuestions[questionLabel].length + " correct"
        var pass = "Congratulations! You have passed the proficiency test :)";
        var fail = "Please try again!"
        var score = getScore();
        if (score >= 4) {
            toast({
                title: pass,
                description: score + maxScore,
                duration: 5000,
                isClosable: true,
                status: 'success',
                position: 'top',
            });
            //alert(pass + "\n" + score + maxScore);
            navigate(`/${nextLevelRoute}`);
            const email = localStorage.getItem("email");
            const info = {email, testTitle};
            await axios.post(`${process.env.REACT_APP_BACKEND_SERVER}/api/email`, info)
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

    const exit = () => {
        navigate(`/${nextLevelRoute}`);
    }
    /*

    const previousLevel = () => {
        navigate(`/${previousLevelRoute}`)
    }

    const saveProgress = () => {
        var email = localStorage.getItem("email");
        const course = email + " English Course";
        const meter = email + " English Meter";
        localStorage.setItem(course, {courseDiff});
        //console.log("Basic");
        localStorage.setItem(meter, `${value}%`);
        //console.log("0%");
        // this is where the saveQuiz comes in
        let quizAnswerArray = []
        for(var i = 0; i < currentAnswers.length; i ++){
            //console.log(i,currentAnswers[i])
            quizAnswerArray.push({
                questionNo:i,
                answerValue: currentAnswers[i]
            })
        }
        saveQuiz(questionLabel,quizAnswerArray)
        navigate(`/${backToCourseRoute}`);
    }
    */

    return (
        <>
            <Heading color="teal.500" marginBottom={10}> 
                {testTitle}
            </Heading>
                <Container>
                    {
                        questions.map((question,questionIndex) => {
                            const {description} = question
                            return<>
                            <Text textAlign={"left"}> {questionIndex+1} {description}</Text>
                            <Input type="text" placeholder = "Enter your answer here!" size = 'md' spellCheck="true" marginBottom={5} /*onChange={(e)=>{handleAnswerChange(e,questionIndex)}} */ />
                                </>
                        })
                    }
                </Container>
                <Container>
                <Button 
                    m="5px"
                    type="submit" 
                    colorScheme = "teal" 
                    width = "480px"
                    variant="solid"
                    onClick={submitAnswer}>
                    Submit
                </Button>
                <Button 
                    m="5px"
                    type="submit" 
                    colorScheme = "teal" 
                    width = "480px"
                    variant="solid"
                    onClick={exit}>
                    Exit
                </Button>
                <Text>*Please provide the word in small capital letters for these questions! (e.g. small instead of Small)</Text>
            </Container>
        </>
    )
}

export default AssessmentStructure