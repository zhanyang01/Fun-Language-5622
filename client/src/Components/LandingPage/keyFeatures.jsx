import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

export const keyFeatures = ({
    featTitle,
    featText,
    featImage,
    index
}) => {
    return (
        <>
        <Box 
            m="10px auto"
            width="100%">
                <Flex 
                    flexDirection={[
                        "column-reverse",
                        "column-reverse",
                        index % 2 === 0 ? "row" : "row-reverse",
                    ]}>
                    <Box
                        width={["90%", "80%", "50%"]}
                        m="10px auto">
                        <Image src={featImage}
                            alt={featTitle} />
                    </Box>
                    <Box
                        width={["90%", "80%", "50%"]}
                        m="10px auto">
                        <Heading 
                            size="md"
                            color="teal.500">
                            {featTitle}
                        </Heading>
                        <Text>
                            {featText}
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

