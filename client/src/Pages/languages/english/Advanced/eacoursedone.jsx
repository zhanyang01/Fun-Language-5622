import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import ProgressBar from '../../progressbar';

const EACourseDone = () => {
    const navigate = useNavigate();

    const advanced = () => {
        var email = localStorage.getItem("email");
        const completed = email + " English Advanced";
        const course = email + " English Course";
        const meter = email + " English Meter";
        localStorage.setItem(completed, "Completed");
        console.log("Completed");
        localStorage.removeItem(course);
        localStorage.removeItem(meter);
        navigate('/englishadvanced');
    }

    const nextLevel = () => {
        navigate('/eaassessment');
    }

    const progress = { bgcolor: "#007FFF", completed: 100 };

    return (
        <>
            <h1> Congratulations! You have completed the Advanced Course for English Language :D </h1>
            <ProgressBar bgcolor = {progress.bgcolor} completed = {progress.completed} />
            <div className="flex w-full">
                <Link to="/eaassessment">
                    <button type="submit" className="py-5 px-5 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={nextLevel}>
                        Take assessment
                    </button>
                </Link>
            </div>
            <div className="flex w-full">
                <Link to="/englishadvanced">
                    <button type="submit" className="py-5 px-5 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={advanced}>
                        Save and exit
                    </button>
                </Link>
            </div>
        </>
    )
}

export default EACourseDone