import AssessmentStructure from "../../../../Components/languagePages/AssessmentStructure";
import { testQuestions } from "../../../../Questions/assessment";

const EAAssessment = () => {
    const questionLabel = "advancedTest";

    return (
        <>
            <AssessmentStructure 
            testTitle={"Advanced Assessment"}
            questionLabel = {questionLabel}
            questions ={testQuestions[questionLabel]}
            nextLevelRoute ={"englishadvanced"}
            /> 
        </>
    )
}

export default EAAssessment