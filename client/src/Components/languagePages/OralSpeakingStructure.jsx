import React,{useEffect, useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {Button, Container, Heading, Text } from '@chakra-ui/react';
import { oralText } from '../../Questions/oraltext';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export const OralStructure = ({speechTitle, exitRoute, questions, questionLabel}) => {    
    const navigate = useNavigate();

    const exit = () => {
        navigate(`/${exitRoute}`);
    }

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();
    
      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }

    return (
        <>
            <Heading color="teal.500"> 
                {testTitle}
            </Heading>
            <Text>Try speaking the sentences below!</Text>
                <Container>
                    {
                        questions.map((question,questionIndex) => {
                            const {description} = question
                            return<>
                            <Text textAlign={"left"}> {questionIndex+1} {description}</Text>
                            <p>Microphone: {listening ? 'on' : 'off'}</p>
                            <button onClick={SpeechRecognition.startListening}>Start</button>
                            <button onClick={SpeechRecognition.stopListening}>Stop</button>
                            <button onClick={resetTranscript}>Reset</button>
                            <p>{transcript}</p>
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
                    onClick={exit}>
                    Exit
                </Button>
            </Container>
        </>
    )
}

export default OralStructure