import React, { useEffect } from 'react';
import axios from 'axios';

export const achievementTriggerStructure = (achievementTitle, achievementDescription) => {
    
    const postAchievements = async() => {
        const userId = localStorage.getItem('userId');
        await axios.post(`${process.env.REACT_APP_BACKEND_SERVER}/api/achievements/${userId}`, {userId, achievement: [achievementTitle, achievementDescription]})
            .then((res) => {
                console.log(res.data);
            }).catch((err) => {
                console.log(err);
            })
        }
    }

export default achievementTriggerStructure;