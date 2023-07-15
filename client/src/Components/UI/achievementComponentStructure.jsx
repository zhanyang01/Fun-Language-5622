import { Box, Card, Flex, Text , Avatar} from '@chakra-ui/react';
import React from 'react';

export const AchievementComponentStructure = ({
    achievementTitle, 
    achievementDescription, 
    achievementImage,
    isUnlocked}) => {
    return (
        <>
            <Card 
                direction="row"
                variant="outline"
                borderTop="8px"
                borderColor={isUnlocked?"blue.200":"red.200"}>
                <Flex gap={5}>
                <Avatar src={achievementImage} size="lg" />
                    <Box>
                        <Text 
                            textAlign={"left"} 
                            fontSize = "lg"
                            color="teal.500"
                            fontWeight={"bold"}>
                            {achievementTitle}
                        </Text>
                        <Text fontSize = "md">
                            {achievementDescription}
                        </Text>
                    </Box>
                </Flex>
            </Card>
        </>
    )
}

export default AchievementComponentStructure