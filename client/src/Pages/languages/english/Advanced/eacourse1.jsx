import { QuizStructure } from '../../../../Components/languagePages/QuizStructure'
import { allQuestions } from '../../../../Questions/data'

const EACourse1 = () => {
    // to save the quiz attempt
    const questionLabel = "advancedQuestionsPartOne"

    return (
        <>
           <QuizStructure 
            quizTitle={"Advanced Course (Part 1) "}
            questionLabel = {questionLabel}
            questions ={allQuestions[questionLabel]}
            nextLevelRoute ={"eacourse2"}
            previousLevelRoute={"englishadvanced"}
            backToCourseRoute={"englishadvanced"}
            value={0}
            courseDiff={"Advanced"}
            />
        </>
    )
}

export default EACourse1