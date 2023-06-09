import React from 'react';
import {useNavigate, Link} from 'react-router-dom';

const EnglishLanguage = () => {
    const navigate = useNavigate();

    const englishbasic = () => {
        navigate('/englishbasic');
    }

    const englishintermediate = () => {
        navigate('/englishintermediate');
    }

    const englishadvanced = () => {
        navigate('/englishadvanced');
    }

    const homepage = () => {
        navigate('/homepage');
    }

    return (
        <>
            <h1> Welcome to English Language Course </h1>
            <h2> Please select preferred level </h2>
            <div className="flex w-full">
                <Link to="/englishbasic">
                    <button type="submit" className="py-5 px-5 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={englishbasic}>
                        Basic
                    </button>
                </Link>
            </div>
            <div className="flex w-full">
                <Link to="/englishintermediate">
                    <button type="submit" className="py-5 px-5 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={englishintermediate}>
                        Intermediate
                    </button>
                </Link>
            </div>
            <div className="flex w-full">
                <Link to="/englishadvanced">
                    <button type="submit" className="py-5 px-5 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={englishadvanced}>
                        Advanced
                    </button>
                </Link>
            </div>
            <div className="flex w-full">
                <Link to="/homepage">
                    <button type="submit" className="py-5 px-5 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={homepage}>
                        Return to Homepage
                    </button>
                </Link>
            </div>
        </>
    )
}
export default EnglishLanguage