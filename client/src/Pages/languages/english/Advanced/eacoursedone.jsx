import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import { Button, Container, Heading, Progress } from '@chakra-ui/react';

const EACourseDone = () => {
    const navigate = useNavigate();

    const advanced = () => {
        var email = localStorage.getItem("email");
        const completed = email + " English Advanced";
        const course = email + " English Course";
        const meter = email + " English Meter";
        localStorage.setItem(completed, "Completed");
        console.log("Completed");
        localStorage.removeItem(course);
        localStorage.removeItem(meter);
        navigate('/englishadvanced');
    }

    const nextLevel = () => {
        navigate('/eaassessment');
    }

    
    const email = localStorage.getItem("email");

    // localStorage.setItem("course", "English Language: Basic Course");

    // List();

    axios.put(`${process.env.REACT_APP_BACKEND_SERVER}/EACourseDone`, email)
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
                Congratulations! You have completed the Advanced Course for English Language :D 
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
                <Link to="/eaassessment">
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
                <Link to="/englishadvanced">
                    <Button 
                        m="5px"
                        colorScheme = "teal" 
                        width = "480px"
                        variant="solid"
                        type="submit"
                        onClick={advanced}>
                        Exit
                    </Button>
                </Link>
            </Container>
        </>
    )
}

export default EACourseDone