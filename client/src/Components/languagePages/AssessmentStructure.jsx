import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Button, Container, Heading, Input, Text, useToast } from '@chakra-ui/react';
import { testQuestions } from '../../Questions/assessment';
import axios from 'axios';
import { AchievementTriggerStructure } from '../Profile/achievementTriggerStructure';
import { checkSubsetArray } from '../../HelperFunctions/checkSubsetArray';

export const AssessmentStructure = ({testTitle, nextLevelRoute, questions,
    questionLabel}) => {

    const toast = useToast();
    
    const navigate = useNavigate();
    
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
            
    const submitAnswer = async() => {
        var maxScore = "/" + testQuestions[questionLabel].length + " correct"
        var pass = "Congratulations! You have passed the proficiency test :)";
        var fail = "Please try again!"
        var score = getScore();
        const assessmentDictionary = {
            "Basic Assessment" : "English Novice", 
            "Intermediate Assessment" : "English Veteran", 
            "Advanced Assessment" : "English Hero"
        }
        if (score >= 4) {
            toast({
                title: pass,
                description: score + maxScore,
                duration: 5000,
                isClosable: true,
                status: 'success',
                position: 'top',
            });
            navigate(`/${nextLevelRoute}`);
            const userId = localStorage.getItem("userId");
            const achievement = assessmentDictionary[testTitle];
            await AchievementTriggerStructure(achievement, toast);
            await axios.get(`${process.env.REACT_APP_BACKEND_SERVER}/api/achievements/${userId}`)
                    .then(async (res) => {
                        console.log(checkSubsetArray(res.data.data.achievements, Object.values(assessmentDictionary)));
                        if (checkSubsetArray(res.data.data.achievements, Object.values(assessmentDictionary))) {
                            await AchievementTriggerStructure("English Master", toast)
                        }
                    }).catch((err) => {
                        console.log(err)
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
        }
    }

    const exit = () => {
        navigate(`/${nextLevelRoute}`);
    }

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