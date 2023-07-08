import {useState, useEffect} from 'react';
import {useNavigate, Link} from 'react-router-dom';
// import ProgressBar from '../../progressbar';
import { QuizStructure } from '../../../../Components/languagePages/QuizStructure'
import { allQuestions } from '../../../../data';
import { useQuiz } from '../../../../Storage/UserStorage';

const EICourse3 = () => {
    // to save the quiz attempt
    const {quiz,saveQuiz} = useQuiz()
    const navigate = useNavigate();
    const questionLabel = "intemediateQuestionsPartThree"
    const [currentAnswers,setCurrentAnswers] = useState([])

    const handleAnswerChange = (newAnswer,questionNumber) =>{

        currentAnswers[questionNumber] = newAnswer
        setCurrentAnswers([...currentAnswers])
    }

    useEffect(()=>{
        console.log("ans",currentAnswers)
    },[currentAnswers])

    useEffect(()=>{
        console.log("quiz",quiz)
        const currentAns = []
        // check if there or no
        if(quiz.hasOwnProperty(questionLabel)){
            // have prior attempt
            console.log("attempt exists =D")
            for(var i = 0;i < quiz[questionLabel].length; i++){
                const {questionNo,answerValue} = quiz[questionLabel][i]
                currentAns.push(answerValue)
            }
        }
        else{
            // first attempt
            for(var i = 0;i < allQuestions[questionLabel].length; i++){
                currentAns.push("-1")
            }
        }
        // quiz[questionLabel]
        setCurrentAnswers(currentAns)
    },[])

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
            quizTitle={"Intemediate Course (Part 3) "}
            questionLabel = {questionLabel}
            questions ={allQuestions[questionLabel]}
            currentAnswers={currentAnswers}
            handleAnswerChange ={handleAnswerChange}
            nextLevelRoute ={"eicourse4"}
            previousLevelRoute={"eicourse2"}
            backToCourseRoute={"englishintemediate"}
            />
        </>
    )
}

export default EICourse3