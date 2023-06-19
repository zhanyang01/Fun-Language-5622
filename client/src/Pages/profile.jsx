import React, {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
    const navigate = useNavigate();

    const homepage = () => {
        navigate('/homepage');
    }

    const validEmail = (email) => {
        const emailReged = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return email.match(emailReged);
    };

    const [user, setUser] = useState({
        name:"",
        username:"",
        currentEmail: "",
        newEmail: "",
        password: ""
    })

    const handleChange = e =>{
        const {name,value} = e.target
        setUser({
        ...user, //spread operator 
        [name]:value
        })
    }

    var usern = localStorage.getItem("username");

    //updating account details
    const updateAccount = async ()=>{
        let errors = [];
        const {name,username,currentEmail,newEmail,password} = user
        if (!name || !username || !currentEmail || !newEmail || !password) {
            errors.push("Please fill up all fields");
            console.log("Please fill up all fields");
        }
        if (!validEmail(currentEmail) && !errors.includes("Please fill up all fields")) {
            errors.push("Invalid email");
            console.log("Invalid email");
        }
        if (!validEmail(newEmail) && !errors.includes("Please fill up all fields")) {
            errors.push("Invalid email");
            console.log("Invalid email");
        }
        if (password.length < 8 && !errors.includes("Please fill up all fields")) {
            errors.push("Invalid password");
            console.log("Invalid password");
        }
        if (errors.length === 0) {
            await axios.put("http://localhost:6969/Profile", user)
            .then(res => {
                console.log(res);
                alert(res.data.message);
                usern = localStorage.setItem("username", username);
                if (res.data.message === "update successful") {
                    navigate('/homepage');
                }
            })
        } else {
            var errorMessage = "Unable to update credentials";
            alert(errorMessage + '\n' + errors.join('\n'));
        }
    }

    const margin = {
        margin: 20
    }

    //deleting user account
    const deleteUser = async()=> {
        // to confirm bfore deleting an account
        const confirmation = prompt("Are you sure you want to delete this account? This is irreversible! (Type ‘y’ to proceed)");
        if (confirmation === 'y') {
            await axios.delete(`http://localhost:6969/api/users/${localStorage.getItem("userId")}`)
            .then((res)=>{
                console.log(res);
                alert(res.data.message);
                localStorage.removeItem("userId");
                localStorage.removeItem("username");
                // setLoginUser(res.data.user)
                navigate("/login");
                /*
                if (res.data.message === "User deleted") {
                    localStorage.removeItem("userId");
                    localStorage.removeItem("username");
                    // setLoginUser(res.data.user)
                    navigate("/login");
                } else {
                    alert("Account failed to delete");
                }
                */
            }).catch((err)=>{
                console.log(err);
                alert(err);
            })
        } else {
            alert("Account failed to delete");
        }
    }
    return (
        <>
        <h1> {usern} </h1>
        <h2> Courses completed: </h2>
        <h2> Assessments completed: </h2>
        <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
            <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                Update Your Account
            </div>
            <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                (Please indicate the same email if you are not changing it!)
            </div>
            <div class="p-6 mt-8">
                <div class="flex flex-col mb-2">
                    <div class=" relative ">
                        <input type="text" id="create-account-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="name" value={user.name} onChange={handleChange} placeholder="Full Name"/>
                    </div>
                </div>
                <div class="flex flex-col mb-2">
                    <div class=" relative ">
                        <input type="text" id="create-account-username" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="username" value={user.username} onChange={handleChange} placeholder="Username"/>
                    </div>
                </div>
                <div class="flex gap-4 mb-2">
                    <div class=" relative ">
                        <input type="text" id="create-account-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="currentEmail" value={user.currentEmail} onChange={handleChange} placeholder="Current Email"/>
                    </div>
                </div>
                <div class="flex gap-4 mb-2">
                    <div class=" relative ">
                        <input type="text" id="create-account-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="newEmail" value={user.newEmail} onChange={handleChange} placeholder="New Email"/>
                    </div>
                </div>
                <div class="flex flex-col mb-2">
                    <div class=" relative ">
                        <input type="password" id="create-account-password" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="password" value={user.password} onChange={handleChange} placeholder="Password(>= 8 characters)"/>
                    </div>
                </div>
                <div class="flex w-full my-4">
                    <button type="submit" className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={updateAccount} >
                        Update account
                    </button>
                </div>
            </div>
        </div>
        <div className="flex w-full" style = {margin}>
            <Link to="/homepage">
                <button type="submit" className="py-5 px-5 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={homepage}>
                    Return to homepage
                </button>
            </Link>
        </div>
            
            <div className="flex w-full">
                <button className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={() => deleteUser()}>
                    Delete Account
                </button>
            </div>

        </>
    )
}

export default Profile;