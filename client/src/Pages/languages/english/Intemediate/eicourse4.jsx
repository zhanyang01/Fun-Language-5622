import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import ProgressBar from '../../progressbar';

const EICourse4 = () => {
    const navigate = useNavigate();

    const intermediate = () => {
        navigate('/englishintermediate');
    }

    const nextLevel = () => {
        navigate('/eicoursedone');
    }

    const progress = { bgcolor: "#007FFF", completed: 75 };

    return (
        <>
            <h1> Intermediate Course (Part 4) </h1>
            <ProgressBar bgcolor = {progress.bgcolor} completed = {progress.completed} />
            <div className="flex w-full">
                <Link to="/eicoursedone">
                    <button type="submit" className="py-5 px-5 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={nextLevel}>
                        Submit
                    </button>
                </Link>
            </div>
            <div className="flex w-full">
                <Link to="/englishintermediate">
                    <button type="submit" className="py-5 px-5 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={intermediate}>
                        Save and exit
                    </button>
                </Link>
            </div>
        </>
    )
}

export default EICourse4