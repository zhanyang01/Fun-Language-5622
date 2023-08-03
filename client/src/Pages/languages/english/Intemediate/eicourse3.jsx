import { QuizStructure } from '../../../../Components/languagePages/QuizStructure'
import { allQuestions } from '../../../../Questions/data'

const EICourse3 = () => {
    // to save the quiz attempt
    const questionLabel = "intermediateQuestionsPartThree"

    return (
        <>
           <QuizStructure 
            quizTitle={"Intermediate Course (Part 3) "}
            questionLabel = {questionLabel}
            questions ={allQuestions[questionLabel]}
            nextLevelRoute ={"eicourse4"}
            previousLevelRoute={"eicourse2"}
            backToCourseRoute={"englishintermediate"}
            value={50}
            courseDiff={"Intermediate"}
            />
        </>
    )
}

export default EICourse3