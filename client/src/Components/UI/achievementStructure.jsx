import { Box, Card, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export const AchievementStructure = ({
    achievementTitle, 
    achievementDescription, 
    achievementImage}) => {
    return (
        <>
            <Card 
                direction="row"
                variant="outline">
                <Flex gap={5}>
                <Avatar src={achievementImage} />
                    <Box>
                        <Heading my = {10} fontSize = "lg">
                            {achievementTitle}
                        </Heading>
                        <Text fontSize = "md">
                            {achievementDescription}
                        </Text>
                    </Box>
                </Flex>
            </Card>
        </>
    )
}

export default AchievementStructure