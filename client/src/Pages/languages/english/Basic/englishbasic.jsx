import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {
    Heading, 
    Button, 
    Container
} from '@chakra-ui/react';

const EnglishBasic = () => {
    const navigate = useNavigate();

    const course = () => {
        const current = localStorage.getItem("English Course");
        const meter = localStorage.getItem("English Meter");
        const status = localStorage.getItem("English Basic");
        if (status) {
            alert("You have already completed the Basic Course");
        } else {
            if (current === "Intermediate" || current === "Advanced") {
                alert("You are already enrolled in another level");
            } else {
                if (current === "Basic") {
                    if (meter === "0%") {
                        navigate('/ebcourse1');
                    }
                    if (meter === "25%") {
                        navigate('/ebcourse2');
                    }
                    if (meter === "50%") {
                        navigate('/ebcourse3');
                    }
                    if (meter === "75%") {
                        navigate('/ebcourse4');
                    }
                } else {
                    navigate('/ebcourse1');
                }
            }
        }
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
            <Button
                m="5px"
                colorScheme = "teal" 
                width = "480px"
                variant="solid"
                type="submit"
                onClick={course}>
                Start learning!
            </Button>
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