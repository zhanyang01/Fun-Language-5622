import {AchievementStructure} from "../Components/UI/achievementStructure"
import abcLogo from '../Images/abcLogo.png';

export const completedEnglishBasic = () => {
    return ( 
        <>
            <AchievementStructure
                achievementTitle={"English Baby"}
                achievementDescription={"Completed English Basic Course!"}
                achievementImage={abcLogo}
            />
        </>
    )
}

export default completedEnglishBasic