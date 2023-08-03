import { QuizStructure } from '../../../../Components/languagePages/QuizStructure'
import { allQuestions } from '../../../../Questions/data'

const EACourse3 = () => {
    // to save the quiz attempt
    const questionLabel = "advancedQuestionsPartThree"

    return (
        <>
           <QuizStructure 
            quizTitle={"Advanced Course (Part 3) "}
            questionLabel = {questionLabel}
            questions ={allQuestions[questionLabel]}
            nextLevelRoute ={"eacourse4"}
            previousLevelRoute={"eacourse2"}
            backToCourseRoute={"englishadvanced"}
            value={50}
            courseDiff={"Advanced"}
            />
        </>
    )
}

export default EACourse3