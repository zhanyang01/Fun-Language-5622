import PracticeStructure from "../../../../Components/languagePages/PracticeStructure";
import { practiceQuestions } from "../../../../Questions/practice";

const EBPractice = () => {
    const questionLabel = "basicPractice";

    return (
        <>
            <PracticeStructure 
            testTitle={"Basic Practice Assessment"}
            questionLabel = {questionLabel}
            questions ={practiceQuestions[questionLabel]}
            nextLevelRoute ={"englishbasic"}
            /> 
        </>
    )
}

export default EBPractice