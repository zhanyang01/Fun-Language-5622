import { QuizStructure } from '../../../../Components/languagePages/QuizStructure';
import { allQuestions } from '../../../../Questions/data'

const EACourse4 = () => {
    // to save the quiz attempt
    const questionLabel = "advancedQuestionsPartFour"

    return (
        <>
           <QuizStructure 
            quizTitle={"Advanced Course (Part 4) "}
            questionLabel = {questionLabel}
            questions ={allQuestions[questionLabel]}
            nextLevelRoute ={"eacoursedone"}
            previousLevelRoute={"eacourse3"}
            backToCourseRoute={"englishadvanced"}
            value={75}
            courseDiff={"Advanced"}
            />
        </>
    )
}

export default EACourse4