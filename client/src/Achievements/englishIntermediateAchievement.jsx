import {AchievementStructure} from "../Components/UI/achievementStructure"
import apprenticeLogo from '../Images/apprenticeLogo.png';

export const completedEnglishIntemediate = () => {
    return (
        <>
            <AchievementStructure
                achievementTitle={"English Apprentice"}
                achievementDescription={"Completed English Intermediate Course!"}
                achievementImage={apprenticeLogo}
            />
        </>
    )
}

export default completedEnglishIntemediate