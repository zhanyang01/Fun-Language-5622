import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {
    Heading, 
    Text, 
    Button, 
    Container
} from '@chakra-ui/react';

const EnglishBasic = () => {
    const navigate = useNavigate();

    const course = () => {
        navigate('/ebcourse1');
    }

    const assessment = () => {
        navigate('/ebassessment')
    }

    const english = () => {
        navigate('/english')
    }

    return (
        <>
        <Heading my = {10} fontSize = "3xl" color="teal.500"> Basic Course for English Language </Heading>
        <Container border="1px" borderColor="gray.300">
        <Text fontSize = "xl" color="teal.500" fontWeight="bold" m="15px"> Please select preferred level </Text>
        <Link to="/ebcourse1">
            <Button
                m="5px"
                colorScheme = "teal" 
                width = "480px"
                variant="solid"
                type="submit"
                onClick={course}>
                Start learning!
            </Button>
        </Link>
            <Link to="/ebassessment">
                <Button
                    m="5px"
                    colorScheme = "teal" 
                    width = "480px"
                    variant="solid"
                    type="submit"
                    onClick={assessment}>
                    Take Assessment
                </Button>
            </Link>
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

export default EnglishBasic