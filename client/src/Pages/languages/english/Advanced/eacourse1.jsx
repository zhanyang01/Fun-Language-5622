import {useState, useEffect} from 'react';
import { QuizStructure } from '../../../../Components/languagePages/QuizStructure'
import { allQuestions } from '../../../../Questions/data'

const EACourse1 = () => {
    // to save the quiz attempt
    const questionLabel = "advancedQuestionsPartOne"

    /*
    const saveProgress = () => {
        var email = localStorage.getItem("email");
        const course = email + " English Course";
        const meter = email + " English Meter";
        localStorage.setItem(course, "Basic");
        //console.log("Basic");
        localStorage.setItem(meter, "0%");
        //console.log("0%");
        // this is where the saveQuiz comes in
        let quizAnswerArray = []
        for(var i = 0; i < currentAnswers.length; i ++){
            //console.log(i,currentAnswers[i])
            quizAnswerArray.push({
                questionNo:i,
                answerValue: currentAnswers[i]
            })
        }
        saveQuiz(questionLabel,quizAnswerArray)
        navigate(`/${backToCourseRoute}`);
    }
    */

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