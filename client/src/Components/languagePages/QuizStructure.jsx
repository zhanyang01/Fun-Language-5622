import React,{useEffect} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {Button, Container, Heading, Progress, Radio, RadioGroup, Stack, Text, useToast } from '@chakra-ui/react';
import { allQuestions } from '../../Questions/data';
import { useQuiz } from '../../Storage/UserStorage';

export const QuizStructure = ({quizTitle,previousLevelRoute, nextLevelRoute, questions,
    questionLabel, currentAnswers, handleAnswerChange,backToCourseRoute, value, courseDiff}) => {
    const navigate = useNavigate()
    const {quiz, saveQuiz} = useQuiz()    
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

    const toast = useToast();
            
    const nextLevel = () => {
        var maxScore = "/" + allQuestions[questionLabel].length + " correct"
        var pass = "Passed! Please proceed to next level";
        var fail = "Please try again!"
        var score = getScore();
        if (score === allQuestions[questionLabel].length) {
            toast({
                title: pass,
                description: score + maxScore,
                duration: 5000,
                isClosable: true,
                status: 'success',
                position: 'top',
            });
            //alert(pass + "\n" + score + maxScore);
            navigate(`/${nextLevelRoute}`)
        } else {
            toast({
                title: fail,
                description: score + maxScore,
                duration: 5000,
                isClosable: true,
                status: 'success',
                position: 'top',
            });
            //alert(fail + "\n" + score + maxScore);
        }
    }

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
                            <Text textAlign={"left"}> {questionIndex+1}) {description}</Text>
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