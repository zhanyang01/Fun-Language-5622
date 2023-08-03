import { QuizStructure } from '../../../../Components/languagePages/QuizStructure'
import { allQuestions } from '../../../../Questions/data'

const EBCourse2 = () => {
    // to save the quiz attempt
    const questionLabel = "basicQuestionsPartTwo"

    return (
        <>
           <QuizStructure 
            quizTitle={"Basic Course (Part 2) "}
            questionLabel = {questionLabel}
            questions ={allQuestions[questionLabel]}
            nextLevelRoute ={"ebcourse3"}
            previousLevelRoute={"ebcourse1"}
            backToCourseRoute={"englishbasic"}
            value={25}
            courseDiff={"Basic"}
            />
        </>
    )
}

export default EBCourse2