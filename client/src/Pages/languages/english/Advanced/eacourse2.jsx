import { QuizStructure } from '../../../../Components/languagePages/QuizStructure'
import { allQuestions } from '../../../../Questions/data'

const EACourse2 = () => {
    // to save the quiz attempt
    const questionLabel = "advancedQuestionsPartTwo"

    return (
        <>
           <QuizStructure 
            quizTitle={"Advanced Course (Part 2) "}
            questionLabel = {questionLabel}
            questions ={allQuestions[questionLabel]}
            nextLevelRoute ={"eacourse3"}
            previousLevelRoute={"eacourse1"}
            backToCourseRoute={"englishadvanced"}
            value={25}
            courseDiff={"Advanced"}
            />
        </>
    )
}

export default EACourse2