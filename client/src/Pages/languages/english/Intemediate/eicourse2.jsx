import {useState, useEffect} from 'react';
import {useNavigate, Link} from 'react-router-dom';
// import ProgressBar from '../../progressbar';
import { QuizStructure } from '../../../../Components/languagePages/QuizStructure'
import { allQuestions } from '../../../../Questions/data'
import { useQuiz } from '../../../../Storage/UserStorage';

const EICourse2 = () => {
    // to save the quiz attempt
    const questionLabel = "intermediateQuestionsPartTwo"

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
            quizTitle={"Intermediate Course (Part 2) "}
            questionLabel = {questionLabel}
            questions ={allQuestions[questionLabel]}
            nextLevelRoute ={"eicourse3"}
            previousLevelRoute={"eicourse1"}
            backToCourseRoute={"englishintermediate"}
            value={25}
            courseDiff={"Intermediate"}
            />
        </>
    )
}

export default EICourse2