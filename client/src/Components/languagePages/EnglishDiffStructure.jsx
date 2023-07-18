import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {
    Heading, 
    Button, 
    Container,
    useToast
} from '@chakra-ui/react';

export const EnglishDiffStructure = ({
    courseDiff, 
    differA, 
    differB, 
    part1, 
    part2, 
    part3, 
    part4, 
    assess,
    oral,
    practice
}) => {
    const navigate = useNavigate();

    const toast = useToast();

    const course = () => {
        var email = localStorage.getItem("email");
        const course = email + " English Course";
        const progress = email + " English Meter";
        const completed = email + " English " + {courseDiff};
        const current = localStorage.getItem(course);
        const meter = localStorage.getItem(progress);
        const status = localStorage.getItem(completed);
        if (status) {
            toast({
                title: 'Reminder',
                description: "You have already completed the " + {courseDiff} + " Course",
                duration: 5000,
                isClosable: true,
                status: 'error',
                position: 'top',
            })
            // alert("You have already completed the " + {courseDiff} + " Course");
        } else {
            if (current === {differA} || current === {differB}) {
                toast({
                title: 'Reminder',
                description: "You are already enrolled in another level",
                duration: 5000,
                isClosable: true,
                status: 'error',
                position: 'top',
                })
                // alert("You are already enrolled in another level");
            } else {
                if (current === {courseDiff}) {
                    if (meter === "0%") {
                        navigate(`/${part1}`);
                    }
                    if (meter === "25%") {
                        navigate(`/${part2}`);
                    }
                    if (meter === "50%") {
                        navigate(`/${part3}`);
                    }
                    if (meter === "75%") {
                        navigate(`/${part4}`);
                    }
                } else {
                    navigate(`/${part1}`);
                }
            }
        }
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