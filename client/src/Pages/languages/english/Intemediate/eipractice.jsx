import PracticeStructure from "../../../../Components/languagePages/PracticeStructure";
import { practiceQuestions } from "../../../../Questions/practice";

const EIPractice = () => {
    const questionLabel = "intermediatePractice";

    return (
        <>
            <PracticeStructure 
            testTitle={"Intermediate Practice Assessment"}
            questionLabel = {questionLabel}
            questions ={practiceQuestions[questionLabel]}
            nextLevelRoute ={"englishintermediate"}
            /> 
        </>
    )
}

export default EIPractice