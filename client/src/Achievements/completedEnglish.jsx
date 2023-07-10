import {AchievementStructure} from "../Components/UI/achievementStructure"
import bookLogo from '../Images/book.png';

export const completedEnglish = () => {
    return (
        <>
            <AchievementStructure
                achievementTitle={"English Finisher"}
                achievementDescription={"Completed English Course!"}
                achievementImage={bookLogo}
            />
        </>
    )
}

export default profilePictureChosen