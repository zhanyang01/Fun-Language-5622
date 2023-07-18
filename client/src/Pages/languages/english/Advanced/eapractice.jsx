import PracticeStructure from "../../../../Components/languagePages/PracticeStructure";
import { practiceQuestions } from "../../../../Questions/practice";

const EAPractice = () => {
    const questionLabel = "advancedPractice";

    return (
        <>
            <PracticeStructure 
            testTitle={"Advanced Practice Assessment"}
            questionLabel = {questionLabel}
            questions ={practiceQuestions[questionLabel]}
            nextLevelRoute ={"englishadvanced"}
            /> 
        </>
    )
}

export default EAPractice