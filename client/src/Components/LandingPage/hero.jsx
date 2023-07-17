import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Flex, Heading, Stack, Box, Image } from '@chakra-ui/react';

export function Hero ({
    title,
    nextRoute,
    nextPage,
    text,
    image
}) {
    return (
        <>
        <Flex
            align="center"
            justify={{base: "center", md: "space-around", xl : "space-between"}}
            direction={{base: "column-reverse", md: "row"}}
            wrap="no-wrap"
            minH="70vh"
            px={8}
            mb={16}>
            <Stack>
                <Heading 
                    my = {10} 
                    fontSize = "3xl" 
                    color = "teal.500"
                    >
                    {title}
                </Heading>
                <Link to={nextRoute}>
                    <Button
                        m="5px"
                        colorScheme="teal"
                        variant="solid"
                        width="360px"
                        type="submit"
                        onClick={nextPage}>
                            {text}
                        </Button>
                </Link>
            </Stack>
            <Box 
                w={{base: "80%", sm: "60%", md: "50%"}}
                mb={{base: 12, md: 0}}>
                <Image 
                    src={image} 
                    size="100%"
                    rounded="1rem"/>
            </Box>
        </Flex> 
        </>
    )
}
