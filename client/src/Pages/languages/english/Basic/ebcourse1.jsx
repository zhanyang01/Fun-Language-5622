import { QuizStructure } from '../../../../Components/languagePages/QuizStructure'
import { allQuestions } from '../../../../Questions/data'

const EBCourse1 = () => {
    // to save the quiz attempt
    const questionLabel = "basicQuestionsPartOne"

    return (
        <>
           <QuizStructure 
            quizTitle={"Basic Course (Part 1) "}
            questionLabel = {questionLabel}
            questions ={allQuestions[questionLabel]}
            nextLevelRoute ={"ebcourse2"}
            previousLevelRoute={"englishbasic"}
            backToCourseRoute={"englishbasic"}
            value={0}
            courseDiff={"Basic"}
            />
        </>
    )
}

export default EBCourse1