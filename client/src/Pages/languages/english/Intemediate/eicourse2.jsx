import { QuizStructure } from '../../../../Components/languagePages/QuizStructure'
import { allQuestions } from '../../../../Questions/data'

const EICourse2 = () => {
    // to save the quiz attempt
    const questionLabel = "intermediateQuestionsPartTwo"

    return (
        <>
           <QuizStructure 
            quizTitle={"Intermediate Course (Part 2) "}
            questionLabel = {questionLabel}
            questions ={allQuestions[questionLabel]}
            nextLevelRoute ={"eicourse3"}
            previousLevelRoute={"eicourse1"}
            backToCourseRoute={"englishintermediate"}
            value={25}
            courseDiff={"Intermediate"}
            />
        </>
    )
}

export default EICourse2