import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {
    Heading, 
    Button, 
    Container,
} from '@chakra-ui/react';

export const EnglishDiffStructure = ({
    courseDiff, 
    part1, 
    assess,
    oral,
    practice
}) => {
    const navigate = useNavigate();

    const course = () => {
        navigate(`/${part1}`)
    }

    const assessment = () => {
        navigate(`/${assess}`)
    }

    const oralSpeaking = () => {
        navigate(`/${oral}`)
    }

    const practicePaper = () => {
        navigate(`/${practice}`)
    }

    const english = () => {
        navigate('/english')
    }

    return (
        <>
        <Heading my = {10} fontSize = "3xl" color="teal.500">
            {courseDiff} Course for English Language 
        </Heading>
        <Container>
            <Button
                m="5px"
                colorScheme = "teal" 
                width = "480px"
                variant="solid"
                type="submit"
                onClick={course}>
                Start learning!
            </Button>
                <Button
                    _hover={{
                        bg : "green"
                    }}
                    m="5px"
                    colorScheme = "teal" 
                    width = "480px"
                    variant="solid"
                    type="submit"
                    onClick={assessment}>
                    Take Assessment
                </Button>
                <Button
                    m="5px"
                    colorScheme = "teal" 
                    width = "480px"
                    variant="solid"
                    type="submit"
                    onClick={oralSpeaking}>
                    Practise oral speaking!
                </Button>
                <Button
                    m="5px"
                    colorScheme = "teal" 
                    width = "480px"
                    variant="solid"
                    type="submit"
                    onClick={practicePaper}>
                    Practice Assessment
                </Button>
            <Link to="/english">
                <Button
                    m="5px"
                    colorScheme = "teal" 
                    width = "480px"
                    variant="solid"
                    type="submit"
                    onClick={english}>
                    Return to English Language
                </Button>
            </Link>
        </Container>
        </>
    )
}

export default EnglishDiffStructure