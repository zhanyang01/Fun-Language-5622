import React from 'react';
import {useNavigate, Link} from 'react-router-dom';

const EnglishAdvanced = () => {
    const navigate = useNavigate();

    const english = () => {
        navigate('/english');
    }

    return (
        <>
            <h1> Advanced Course for English Language </h1>
            <div className="flex w-full">
                <Link to="/english">
                    <button type="submit" className="py-5 px-5 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={english}>
                        Return to English Language
                    </button>
                </Link>
            </div>
        </>
    )
}

export default EnglishAdvanced