import { QuizStructure } from '../../../../Components/languagePages/QuizStructure'
import { allQuestions } from '../../../../Questions/data'

const EBCourse3= () => {
    // to save the quiz attempt
    const questionLabel = "basicQuestionsPartThree"

    return (
        <>
           <QuizStructure 
            quizTitle={"Basic Course (Part 3) "}
            questionLabel = {questionLabel}
            questions ={allQuestions[questionLabel]}
            nextLevelRoute ={"ebcourse4"}
            previousLevelRoute={"ebcourse2"}
            backToCourseRoute={"englishbasic"}
            value={50}
            courseDiff={"Basic"}
            />
        </>
    )
}

export default EBCourse3