import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Button, Container, Heading, Input, Text, useToast } from '@chakra-ui/react';
import { practiceQuestions } from '../../Questions/practice';

export const PracticeStructure = ({practiceTitle, nextLevelRoute, questions,
    questionLabel}) => {

    const toast = useToast();
    
    const navigate = useNavigate();
    
    function getScore() {
        var score  = 0;
        const currentAnswers = document.getElementsByTagName('input');
        for (var i = 0; i < currentAnswers.length ; i++) {
            console.log("currentAnswers",currentAnswers);
            console.log("questionLabel",questionLabel);
            console.log("practiceQuestions[questionLabel][i]", practiceQuestions[questionLabel]);
            if (currentAnswers[i].value === practiceQuestions[questionLabel][i].answer) {
                score += 1;
            }
        }
        return score;
    }
            
    const submitAnswer = async() => {
        var maxScore = "/" + practiceQuestions[questionLabel].length + " correct"
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
                {practiceTitle}
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

export default PracticeStructure