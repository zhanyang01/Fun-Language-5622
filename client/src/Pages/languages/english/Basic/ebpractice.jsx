import PracticeStructure from "../../../../Components/languagePages/PracticeStructure";
import { practiceQuestions } from "../../../../Questions/practice";

const EBPractice = () => {
    const questionLabel = "basicPractice";

    return (
        <>
            <PracticeStructure 
            practiceTitle={"Basic Practice Assessment"}
            questionLabel = {questionLabel}
            questions ={practiceQuestions[questionLabel]}
            nextLevelRoute ={"englishbasic"}
            /> 
        </>
    )
}

export default EBPractice