import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import ProgressBar from '../../progressbar';

const EBCourse = () => {
    const navigate = useNavigate();

    const basic = () => {
        navigate('/englishbasic');
    }

    const progress = { bgcolor: "#6a1b9a", completed: 0 };

    return (
        <>
            <h1> Basic Course </h1>
            <ProgressBar bgcolor = {progress.bgcolor} completed = {progress.completed} />
            <div className="flex w-full">
                <Link to="/englishbasic">
                    <button type="submit" className="py-5 px-5 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={basic}>
                        Save and exit
                    </button>
                </Link>
            </div>
        </>
    )
}

export default EBCourse