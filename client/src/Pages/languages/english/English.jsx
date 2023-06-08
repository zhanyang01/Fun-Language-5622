import React from 'react';
import {useNavigate, Link} from 'react-router-dom';

const EnglishLanguage = () => {
    const navigate = useNavigate();

    const englishcourses = () => {
        navigate('/englishcourses');
    }

    const englishassessment = () => {
        navigate('/englishassessment');
    }

    const homepage = () => {
        navigate('/homepage');
    }

    return (
        <>
            <h1> English Language </h1>
            <div className="flex w-full">
                <Link to="/englishcourses">
                    <button type="submit" className="py-5 px-5 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={englishcourses}>
                        Course
                    </button>
                </Link>
            </div>
            <div className="flex w-full">
                <Link to="/englishassessment">
                    <button type="submit" className="py-5 px-5 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={englishassessment}>
                        Assessment
                    </button>
                </Link>
            </div>
            <div className="flex w-full">
                <Link to="/homepage">
                    <button type="submit" className="py-5 px-5 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={homepage}>
                        Return to homepage
                    </button>
                </Link>
            </div>
        </>
    )
}
export default EnglishLanguage