import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import ProgressBar from '../../progressbar';

const EICourseDone = () => {
    const navigate = useNavigate();

    const intermediate = () => {
        var email = localStorage.getItem("email");
        const completed = email + " English Intermediate";
        const course = email + " English Course";
        const meter = email + " English Meter";
        localStorage.setItem(completed, "Completed");
        console.log("Completed");
        localStorage.removeItem(course);
        localStorage.removeItem(meter);
        navigate('/englishintermediate');
    }

    const nextLevel = () => {
        navigate('/eiassessment');
    }

    const progress = { bgcolor: "#007FFF", completed: 100 };

    return (
        <>
            <h1> Congratulations! You have completed the Intermediate Course for English Language :D </h1>
            <ProgressBar bgcolor = {progress.bgcolor} completed = {progress.completed} />
            <div className="flex w-full">
                <Link to="/eiassessment">
                    <button type="submit" className="py-5 px-5 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={nextLevel}>
                        Take assessment
                    </button>
                </Link>
            </div>
            <div className="flex w-full">
                <Link to="/englishintermediate">
                    <button type="submit" className="py-5 px-5 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={intermediate}>
                        Exit
                    </button>
                </Link>
            </div>
        </>
    )
}

export default EICourseDone