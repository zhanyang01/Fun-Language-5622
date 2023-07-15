import React, { useEffect } from 'react';
import axios from 'axios';

export const AchievementTriggerStructure = (achievementTitle) => {
    
    const postAchievements = async() => {
        const userId = localStorage.getItem('userId');
        console.log(achievementTitle)
        await axios.post(`${process.env.REACT_APP_BACKEND_SERVER}/api/achievements/`, {userId, achievementTitle})
            .then((res) => {
                console.log(res.data);
            }).catch((err) => {
                console.log(err);
            })
        }

        useEffect(() => {
            postAchievements();
        }, [])
    }