import { Button, Container, Heading } from '@chakra-ui/react';
import React from 'react';
import {useNavigate, Link} from 'react-router-dom';

const Choosinglanguage = () => {
    const navigate = useNavigate();

    const english = () => {
        navigate('/english');
    }

    const homepage = () => {
        navigate('/homepage');
    }

    return (
        <>
            <Heading my = {10} fontSize = "3xl" color="teal.500">
                Please Choose a Language to learn!! 
            </Heading>
            <Container>
                <Link to="/english">
                    <Button 
                        m="5px"
                        type = "submit" 
                        colorScheme = "teal" 
                        width = "480px"
                        variant="solid"
                        onClick={english}>
                        English
                    </Button>
                </Link>
                <Link to="/homepage">
                    <Button 
                        m="5px"
                        type = "submit" 
                        colorScheme = "teal" 
                        width = "480px"
                        variant="solid"
                        onClick={homepage}>
                        Return to Homepage
                    </Button>
                </Link>
            </Container>
        </>
    )
}
export default Choosinglanguage;