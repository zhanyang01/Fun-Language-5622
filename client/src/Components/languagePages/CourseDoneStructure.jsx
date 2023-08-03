import React from 'react';
import {useNavigate} from 'react-router-dom';
import { 
    Button, 
    Container, 
    Heading, 
    Progress 
} from '@chakra-ui/react';

export const CourseDoneStructure = ({nextLevelRoute, courseRoute, headingContent}) => {
    const navigate = useNavigate();

    const basic = async() => {
        navigate(`/${courseRoute}`);
    }

    const nextLevel = () => {
        navigate(`/${nextLevelRoute}`);
    }

    return (
        <>
            <Heading my = {10} fontSize = "3xl" color="teal.500"> 
                {headingContent}
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
                    <Button 
                        m="5px"
                        colorScheme = "teal" 
                        width = "480px"
                        variant="solid"
                        type="submit"
                        onClick={nextLevel}>
                        Take assessment
                    </Button>
                    <Button 
                        m="5px"
                        colorScheme = "teal" 
                        width = "480px"
                        variant="solid"
                        type="submit"
                        onClick={basic}>
                        Exit
                    </Button>
            </Container>
        </>
    )
}

export default CourseDoneStructure