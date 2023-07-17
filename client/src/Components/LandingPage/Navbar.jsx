import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Navbar({
    title,
    nextPageOne,
    nextPageTwo,
    routeOne,
    routeTwo,
    text1,
    text2
}) {
    return (
        <Flex 
            bg="gray.100"
            minWidth="max-content"
            alignItems="center"
            gap='2'>
                <Box p="2">
                    <Heading 
                        size='md'
                        color="teal.500">
                        {title}    
                    </Heading>
                </Box>
                <Spacer />
                <ButtonGroup gap='2'>
                    <Link to ={routeOne}>
                        <Button 
                            m="5px"
                            colorScheme="teal"
                            variant="solid"
                            type="submit"
                            onClick={nextPageOne}
                            >
                            {text1}
                        </Button> 
                    </Link>
                    <Link to ={routeTwo}>
                        <Button 
                            m="5px"
                            colorScheme="teal"
                            variant="solid"
                            type="submit"
                            onClick={nextPageTwo}>
                            {text2}
                        </Button> 
                    </Link>
                </ButtonGroup>
        </Flex>
    )
}