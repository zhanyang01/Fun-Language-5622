import React from 'react';
import {useNavigate, Link} from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();

    const homepage = () => {
        navigate('/homepage');
    }

    const username = () => {
        localStorage.getItem("username")
    }

    const hasName = username.length > 0;

    return (
        <>
            {hasName && <h1> Hello {username} </h1>}
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

export default Profile