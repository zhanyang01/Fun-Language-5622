import React from 'react';
import { Button, Heading } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

function LandingPage() {

    const navigate = useNavigate();

    const loginPage = () => {
        navigate('/login');
    }

    return (
        <>
        <Heading> 
            Landing Page 
        </Heading>
        <Link to="/login">
        <Button
            m="5px"
            colorScheme="teal"
            variant="solid"
            width="360px"
            type="submit"
            onClick={loginPage}>
                Login
            </Button>
        </Link>
            </>
    )
}

export default LandingPage