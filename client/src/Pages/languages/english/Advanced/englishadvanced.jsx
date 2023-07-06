import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {
    Heading, 
    Button, 
    Container
} from '@chakra-ui/react';

const EnglishAdvanced = () => {
    const navigate = useNavigate();

    const course = () => {
        var email = localStorage.getItem("email");
        const course = email + " English Course";
        const progress = email + " English Meter";
        const completed = email + " English Advanced";
        // const basic = email + " English Basic";
        const intermediate = email + " English Intermediate";
        const current = localStorage.getItem(course);
        const meter = localStorage.getItem(progress);
        const status = localStorage.getItem(completed);
        // const doneBasic = localStorage.getItem(basic);
        const doneIntermediate = localStorage.getItem(intermediate)
        if (status) {
            alert("You have already completed the Intermediate Course");
        } else {
            if (current === "Basic" || current === "Intermediate") {
                alert("You are already enrolled in another level");
            } else {
                if (!doneIntermediate) {
                    alert("Please do the Intermediate Proficiency Test before proceeding");
                    navigate('/eiassessment');
                } else {
                    if (current === "Advanced") {
                        if (meter === "0%") {
                            navigate('/eacourse1');
                        }
                        if (meter === "25%") {
                            navigate('/eacourse2');
                        }
                        if (meter === "50%") {
                            navigate('/eacourse3');
                        }
                        if (meter === "75%") {
                            navigate('/eacourse4');
                        }
                    } else {
                        navigate('/eacourse1');
                    }
                }
            }
        }
    }

    const assessment = () => {
        navigate('/eaassessment')
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
            <Link to="/eaassessment">
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

export default EnglishAdvanced