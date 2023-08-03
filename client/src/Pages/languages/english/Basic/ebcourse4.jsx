import { QuizStructure } from '../../../../Components/languagePages/QuizStructure'
import { allQuestions } from '../../../../Questions/data'

const EBCourse4 = () => {
    // to save the quiz attempt
    const questionLabel = "basicQuestionsPartFour"

    return (
        <>
           <QuizStructure 
            quizTitle={"Basic Course (Part 4) "}
            questionLabel = {questionLabel}
            questions ={allQuestions[questionLabel]}
            nextLevelRoute ={"ebcoursedone"}
            previousLevelRoute={"ebcourse3"}
            backToCourseRoute={"englishbasic"}
            value={75}
            courseDiff={"Basic"}
            />
        </>
    )
}

export default EBCourse4