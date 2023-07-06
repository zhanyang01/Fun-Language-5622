import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import ProgressBar from '../../progressbar';
import axios from 'axios';
// import List from '../../courselist';

const EBCourseDone = () => {
    const navigate = useNavigate();

    const basic = async() => {
        localStorage.setItem("English Basic", "Completed");
        console.log("Completed");
        localStorage.removeItem("English Course");
        localStorage.removeItem("meter");
        navigate('/englishbasic');
    }

    const nextLevel = () => {
        navigate('/ebassessment');
    }

    const progress = { bgcolor: "#007FFF", completed: 100 };

    const email = localStorage.getItem("email");

    // localStorage.setItem("course", "English Language: Basic Course");

    // List();

    axios.put(`${process.env.REACT_APP_BACKEND_SERVER}/EBCourseDone`, email)
        .then((res) =>{
            console.log(res);
        })

    /*
    const newCourse = async() => {
        await axios.put(`${process.env.REACT_APP_BACKEND_SERVER}/Login`, user)
        .then((res) =>{
            console.log(res);
        })
    }
    */

    return (
        <>
            <h1> Congratulations! You have completed the Basic Course for English Language :D </h1>
            <ProgressBar bgcolor = {progress.bgcolor} completed = {progress.completed} />
            <div className="flex w-full">
                <Link to="/ebassessment">
                    <button type="submit" className="py-5 px-5 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={nextLevel}>
                        Take assessment
                    </button>
                </Link>
            </div>
            <div className="flex w-full">
                <Link to="/englishbasic">
                    <button type="submit" className="py-5 px-5 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={basic}>
                        Exit
                    </button>
                </Link>
            </div>
        </>
    )
}

export default EBCourseDone