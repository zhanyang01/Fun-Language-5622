import {AchievementStructure} from "../Components/UI/achievementStructure"
import camaraLogo from '../Images/camara.png';

export const profilePictureChosen = () => {
    return (
        <>
            <AchievementStructure
                achievementTitle={"Personalisation"}
                achievementDescription={"You have chosen your profile picture!"}
                achievementImage={camaraLogo}
            />
        </>
    )
}

export default profilePictureChosen