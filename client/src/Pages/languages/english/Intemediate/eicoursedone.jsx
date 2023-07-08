import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import { Button, Container, Heading, Progress } from '@chakra-ui/react';

const EICourseDone = () => {
    const navigate = useNavigate();

    const intermediate = async() => {
        var email = localStorage.getItem("email");
        const completed = email + " English Intermediate";
        const course = email + " English Course";
        const meter = email + " English Meter";
        localStorage.setItem(completed, "Completed");
        console.log("Completed");
        localStorage.removeItem(course);
        localStorage.removeItem(meter);
        navigate('/englishintermediate');
    }

    const nextLevel = () => {
        navigate('/eiassessment');
    }

    const email = localStorage.getItem("email");

    // localStorage.setItem("course", "English Language: Basic Course");

    // List();

    axios.put(`${process.env.REACT_APP_BACKEND_SERVER}/EICourseDone`, email)
        .then((res) =>{
            console.log(res);
        })

    /*
    const newCourse = async() => {
        await axios.put(`${process.env.REACT_APP_BACKEND_SERVER}/Login`, user)
        .then((res) =>{
            console.log(res);
        })
    }
    */

    return (
        <>
            <Heading my = {10} fontSize = "3xl" color="teal.500">
                Congratulations! You have completed the Intermediate Course for English Language :D 
            </Heading>
            <Progress 
                colorScheme="teal" 
                size="lg"
                width="90%"
                margin="0 auto"
                mb="50px"
                value={100}
            />
            <Container>
                <Link to="/eiassessment">
                    <Button 
                        m="5px"
                        colorScheme = "teal" 
                        width = "480px"
                        variant="solid"
                        type="submit"
                        onClick={nextLevel}>
                        Take assessment
                    </Button>
                </Link>
                <Link to="/englishintemediate">
                    <Button 
                        m="5px"
                        colorScheme = "teal" 
                        width = "480px"
                        variant="solid"
                        type="submit"
                        onClick={intermediate}>
                        Exit
                    </Button>
                </Link>
            </Container>
        </>
    )
}

export default EICourseDone