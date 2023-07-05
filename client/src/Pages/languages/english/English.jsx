import { Button, Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import {useNavigate, Link} from 'react-router-dom';

const EnglishLanguage = () => {
    const navigate = useNavigate();

    const englishbasic = () => {
        navigate('/englishbasic');
    }

    const englishintermediate = () => {
        navigate('/englishintermediate');
    }

    const englishadvanced = () => {
        navigate('/englishadvanced');
    }

    const homepage = () => {
        navigate('/homepage');
    }

    return (
        <>
            <Heading my = {10} fontSize = "3xl" color="teal.500"> Welcome to English Language Course </Heading>
            <Container border="1px" borderColor="gray.300">
            <Text fontSize = "xl" color="teal.500" fontWeight="bold" m="15px"> Please select preferred level </Text>
                <Link to="/englishbasic">
                    <Button
                        m="5px"
                        colorScheme = "teal" 
                        width = "480px"
                        variant="solid"
                        type="submit"
                        onClick={englishbasic}>
                        Basic
                    </Button>
                </Link>
                <Link to="/englishintermediate">
                    <Button
                        m="5px"
                        colorScheme = "teal" 
                        width = "480px"
                        variant="solid"
                        type="submit"
                        onClick={englishintermediate}>
                        Intermediate
                    </Button>
                </Link>
                <Link to="/englishadvanced">
                    <Button
                        m="5px"
                        colorScheme = "teal" 
                        width = "480px"
                        variant="solid"
                        type="submit"
                        onClick={englishadvanced}>
                        Advanced
                    </Button>
                </Link>
                <Link to="/homepage">
                    <Button
                        m="5px"
                        colorScheme = "teal" 
                        width = "480px"
                        variant="solid"
                        type="submit"
                        onClick={homepage}>
                        Return to Homepage
                    </Button>
                </Link>
            </Container>
        </>
    )
}
export default EnglishLanguage