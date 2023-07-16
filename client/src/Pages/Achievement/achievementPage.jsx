import { Button, Container, Heading, Text} from "@chakra-ui/react"
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AchievementComponentStructure} from "../../Components/UI/achievementComponentStructure"
import { AchievementList } from "../../Achievements/achievementList";
import axios from "axios";

export const AchievementPage = () => {

    const [achievements, setAchievements] = useState([]);

    const navigate = useNavigate();

    const profile = () => {
        navigate('/profile');
    }

    const getAchievements = async() => {
        const userId = localStorage.getItem('userId');
        const loadAchievements = await axios.get(`${process.env.REACT_APP_BACKEND_SERVER}/api/achievements/${userId}`);
        console.log(loadAchievements);
        if (loadAchievements.data.message === "Achievements not found") {
            console.log("Error loading achievements");
        // this part is not tested yet
        } else {
            setAchievements(loadAchievements.data.data.achievements)
            console.log("Achievements loaded");
        }
        console.log(achievements);
    }

    useEffect(() => {
        getAchievements();
    }, [])

    return (
        <>
            <Heading my = {10} fontSize = "3xl" color="teal.500">
                All Achievements
            </Heading>
            <Text my={5} fontSize="lg">
                Total unlocked achievements: {achievements.length}/{AchievementList.achievements.length}
            </Text>
            <Container>
                {
                    AchievementList.achievements.map((achievement) => {
                        const {title, description, image} = achievement;
                        console.log(title)
                        return (
                            <AchievementComponentStructure
                                achievementTitle = {title}
                                achievementDescription = {description}
                                achievementImage = {image}
                                isUnlocked = {achievements.includes(title)}
                            />
                        )
                    })
                }
            </Container>
            <Link to = "/profile">
                <Button
                    m="5px"
                    type = "submit"
                    colorScheme = "teal"
                    width = "480px"
                    variant="solid"
                    onClick={profile}>
                    Return to Profile
                </Button>
            </Link>
        </>
    )
}

export default AchievementPage;