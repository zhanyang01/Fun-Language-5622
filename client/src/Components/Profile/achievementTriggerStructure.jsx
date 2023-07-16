import React, { useEffect } from 'react';
import { addAchievement } from '../../HelperFunctions/addAchievement';
import { useToast } from "@chakra-ui/react"

export const AchievementTriggerStructure = ({achievementTitle}) => {

    const toast = useToast();
    
    const postAchievements = async() => {
        const userId = localStorage.getItem('userId');
        const achievementAdded = await addAchievement(userId, achievementTitle);
        if (achievementAdded) {
            toast({
                title: "Achievement Unlocked! " + achievementTitle,
                description: "You have unlocked an achievement!",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "top"
            })
        }
    }


    useEffect(() => {
        postAchievements();
    }, [])
    }