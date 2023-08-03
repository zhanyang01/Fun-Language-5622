import { QuizStructure } from '../../../../Components/languagePages/QuizStructure'
import { allQuestions } from '../../../../Questions/data'

const EICourse4 = () => {
    // to save the quiz attempt
    const questionLabel = "intermediateQuestionsPartFour"

    return (
        <>
           <QuizStructure 
            quizTitle={"Intermediate Course (Part 4) "}
            questionLabel = {questionLabel}
            questions ={allQuestions[questionLabel]}
            nextLevelRoute ={"eicoursedone"}
            previousLevelRoute={"eicourse3"}
            backToCourseRoute={"englishintermediate"}
            value={75}
            courseDiff={"Intermediate"}
            />
        </>
    )
}

export default EICourse4