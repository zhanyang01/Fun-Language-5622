import AssessmentStructure from "../../../../Components/languagePages/AssessmentStructure";
import { testQuestions } from "../../../../Questions/assessment";

const EIAssessment = () => {
    const questionLabel = "intermediateTest";

    return (
        <>
            <AssessmentStructure 
            testTitle={"Intermediate Assessment"}
            questionLabel = {questionLabel}
            questions ={testQuestions[questionLabel]}
            nextLevelRoute ={"englishintermediate"}
            /> 
        </>
    )
}

export default EIAssessment