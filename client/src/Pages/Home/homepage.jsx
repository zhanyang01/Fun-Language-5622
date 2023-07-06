import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {
    Heading, 
    Button, 
    Container
} from '@chakra-ui/react';

const Homepage = () => {
    const navigate = useNavigate();

    const choosinglanguage = () => {
        navigate('/choosinglanguage');
    }

    const profile = () => {
        navigate('/profile');
    }

    const exit = () => {
        alert("Thank you and have a nice day ahead!");
        navigate('/login');
    }

    const username = localStorage.getItem("username");

    return (
        <>
        <Heading my = {10} fontSize = "3xl" color="teal.500">
            Hello, {username}!!! What would you like to learn today? 
        </Heading>
        <Container>
        <Link to="/choosinglanguage">
            <Button
                m="5px"
                colorScheme = "teal" 
                width = "480px"
                variant="solid"
                type="submit"
                onClick={choosinglanguage}>
                Please choose a Language to learn!!
            </Button>
        </Link>
            <Link to="/profile">
                <Button
                    m="5px"
                    colorScheme = "teal" 
                    width = "480px"
                    variant="solid"
                    type="submit"
                    onClick={profile}>
                    View Profile
                </Button>
            </Link>
            <Link to="/login">
                <Button
                    m="5px"
                    colorScheme = "teal" 
                    width = "480px"
                    variant="solid"
                    type="submit"
                    onClick={exit}>
                    Sign Out
                </Button>
            </Link>
        </Container>
        </>
    )
}
export default Homepage