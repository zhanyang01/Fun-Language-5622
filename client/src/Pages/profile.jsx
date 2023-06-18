import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
    const navigate = useNavigate();

    const homepage = () => {
        navigate('/homepage');
    }

    const username = localStorage.getItem("username");

    const deleteUser = async()=> {
        const errors = [];
        await axios.post("http://localhost:6969/profile", user)
            .then((res)=>{
                console.log(res);
                alert(res.data.message);
                if (res.data.message === "login success") {
                    localStorage.setItem("username", res.data.username);
                    // setLoginUser(res.data.user)
                    navigate("/login");
                } else {
                    errors.push(res.data.message);
                }
            }).catch((err)=>{
                console.log(err);
                alert(err);
            })
    }
    return (
        <>
            <h1> {username} </h1>
            <h2> Courses completed: </h2>
            <h2> Assessments completed: </h2>
            <div className="flex w-full">
                <Link to="/homepage">
                    <button type="submit" className="py-5 px-5 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={homepage}>
                        Return to homepage
                    </button>
                </Link>
            </div>
            {/*
            <div className="flex w-full">
                <button className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={() => deleteUser()}>
                    Delete Account
                </button>
            </div>
    */}
        </>
    )
}

export default Profile