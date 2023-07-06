import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {
    Heading, 
    Button, 
    Container
} from '@chakra-ui/react';

const EnglishIntermediate = () => {
    const navigate = useNavigate();

    const course = () => {
        var email = localStorage.getItem("email");
        const course = email + " English Course";
        const progress = email + " English Meter";
        const completed = email + " English Intermediate";
        const basic = email + " English Basic";
        const current = localStorage.getItem(course);
        const meter = localStorage.getItem(progress);
        const status = localStorage.getItem(completed);
        const doneBasic = localStorage.getItem(basic);
        if (status) {
            alert("You have already completed the Intermediate Course");
        } else {
            if (current === "Basic" || current === "Advanced") {
                alert("You are already enrolled in another level");
            } else {
                if (!doneBasic) {
                    alert("Please do a Basic Proficiency Test before proceeding");
                    navigate('/ebassessment');
                } else {
                    if (current === "Intermediate") {
                        if (meter === "0%") {
                            navigate('/eicourse1');
                        }
                        if (meter === "25%") {
                            navigate('/eicourse2');
                        }
                        if (meter === "50%") {
                            navigate('/eicourse3');
                        }
                        if (meter === "75%") {
                            navigate('/eicourse4');
                        }
                    } else {
                        navigate('/eicourse1');
                    }
                }
            }
        }
    }

    const assessment = () => {
        navigate('/eiassessment')
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
            <Link to="/eiassessment">
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

export default EnglishIntermediate