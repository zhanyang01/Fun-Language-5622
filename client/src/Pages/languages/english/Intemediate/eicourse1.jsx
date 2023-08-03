import { QuizStructure } from '../../../../Components/languagePages/QuizStructure'
import { allQuestions } from '../../../../Questions/data'

const EICourse1 = () => {
    // to save the quiz attempt
    const questionLabel = "intermediateQuestionsPartOne"

    return (
        <>
           <QuizStructure 
            quizTitle={"Intermediate Course (Part 1) "}
            questionLabel = {questionLabel}
            questions ={allQuestions[questionLabel]}
            nextLevelRoute ={"eicourse2"}
            previousLevelRoute={"englishintermediate"}
            backToCourseRoute={"englishintermediate"}
            value={0}
            courseDiff={"Intermediate"}
            />
        </>
    )
}

export default EICourse1