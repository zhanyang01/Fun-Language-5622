import { Button, Container, Heading} from "@chakra-ui/react"
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AchievementComponentStructure} from "../../Components/UI/achievementComponentStructure"
import { AchievementList } from "../../Achievements/achievementList";

export const AchievementPage = () => {

    const navigate = useNavigate();

    const profile = () => {
        navigate('/profile');
    }

    return (
        <>
            <Heading my = {10} fontSize = "3xl" color="teal.500">
                All Achievements
            </Heading>
            <Container>
                {
                    AchievementList.achievements.map((achievement) => {
                        const {title, description, image} = achievement;
                        return (
                            <AchievementComponentStructure
                                achievementTitle = {title}
                                achievementDescription = {description}
                                achievementImage = {image}
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