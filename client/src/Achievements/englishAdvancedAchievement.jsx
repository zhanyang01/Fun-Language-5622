import {AchievementStructure} from "../Components/UI/achievementStructure"
import fireLogo from '../Images/fireLogo.png';
export const completedEnglishAdvanced = () => {
    return (
        <>
            <AchievementStructure
                achievementTitle={"English Sage"}
                achievementDescription={"Completed English Advanced Course!"}
                achievementImage={fireLogo}
            />
        </>
    )
}

export default completedEnglishAdvanced