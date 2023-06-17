import React from 'react';
import {useNavigate, Link} from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate();

    const choosinglanguage = () => {
        navigate('/choosinglanguage');
    }

    const profile = () => {
        navigate('/profile');
    }

    const exit = () => {
        alert("Thank you and have a nice day ahead!");
        navigate('/login');
    }

    return (
        <>
            <h1>Welcome to Fun Language!!! </h1>
            <div className="flex w-full">
                <Link to="/choosinglanguage">
                    <button type="submit" className="py-5 px-5 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={choosinglanguage}>
                        Please choose a Language to learn!!
                    </button>
                </Link>
            </div>
            <div className="flex w-full">
                <Link to="/profile">
                    <button type="submit" className="py-5 px-5 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={profile}>
                        View Profile
                    </button>
                </Link>
            </div>
            <div className="flex w-full">
                <Link to="/login">
                    <button type="submit" className="py-5 px-5 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={exit}>
                        Sign Out
                    </button>
                </Link>
            </div>
        </>
    )
}
export default Homepage