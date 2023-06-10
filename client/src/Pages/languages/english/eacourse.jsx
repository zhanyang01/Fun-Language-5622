import React from 'react';
import {useNavigate, Link} from 'react-router-dom';

const EACourse = () => {
    const navigate = useNavigate();

    const advanced = () => {
        navigate('/englishadvanced');
    }

    return (
        <>
            <h1> Advanced Course </h1>
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

export default EACourse