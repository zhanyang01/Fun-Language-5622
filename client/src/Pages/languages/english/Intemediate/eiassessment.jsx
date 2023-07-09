import React from 'react';
import {useNavigate, Link} from 'react-router-dom';

const EIAssessment = () => {
    const navigate = useNavigate();

    const intermediate = () => {
        navigate('/englishintermediate');
    }

    return (
        <>
            <h1> Intermediate Assessment </h1>
            <h2> Please attempt all questions before submitting! </h2>
            <div className="flex w-full">
                <Link to="/englishintermediate">
                    <button type="submit" className="py-5 px-5 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={intermediate}>
                        Submit
                    </button>
                </Link>
            </div>
        </>
    )
}

export default EIAssessment