import AssessmentStructure from "../../../../Components/languagePages/AssessmentStructure";
import { testQuestions } from "../../../../Questions/assessment";

const EBAssessment = () => {
    const questionLabel = "basicTest";

    return (
        <>
            <AssessmentStructure 
            testTitle={"Basic Assessment"}
            questionLabel = {questionLabel}
            questions ={testQuestions[questionLabel]}
            nextLevelRoute ={"englishbasic"}
            /> 
        </>
    )
}

export default EBAssessment