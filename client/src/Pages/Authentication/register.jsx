import React , {useState} from 'react'
import {useNavigate, Link} from "react-router-dom"
import axios from "axios";
import {
    Heading, 
    Text, 
    Button, 
    Input,
    Container,
    Box, 
} from '@chakra-ui/react';

//test for validity for email
const validEmail = (email) => {
    const emailReged = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return email.match(emailReged);
  };

const Register = () => {
    const navigate = useNavigate()
    const [user,setUser] = useState({
        name:"",
        username:"",
        email:"",
        password: "",
    })
    
    const handleChange = e =>{
    const {name,value} = e.target
    setUser({
    ...user, //spread operator 
    [name]:value
    })
    }
    
//register function 
   const registerAccount = async ()=>{
    let errors = [];
    console.log(user);
    const {name,username,email,password} = user
    if (!name || !username || !email || !password) {
        errors.push("Please fill up all fields");
        console.log("Please fill up all fields");
    }
    if (!validEmail(email) && !errors.includes("Please fill up all fields")) {
        errors.push("Invalid email");
        console.log("Invalid email");
    }
    if (password.length < 8 && !errors.includes("Please fill up all fields")) {
        errors.push("Invalid password");
        console.log("Invalid password");
    }
    if (errors.length === 0) {
        await axios.post(`${process.env.REACT_APP_BACKEND_SERVER}/Register`, user)
        .then(res => {
            console.log(res);
            alert(res.data.message);
            navigate("/login");
        })
    } else {
        var errorMessage = "Registration failed";
        alert(errorMessage + '\n' + errors.join('\n'));
    }
   }


    return (
        <>    
<div class="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
    <div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
        Create a new account
    </div>
    <span class="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
        Already have an account ?
        <Link to="/login" class="text-sm text-blue-500 underline hover:text-blue-700">
            Sign in
        </Link>
    </span>
    <div class="p-6 mt-8">
            <div class="flex flex-col mb-2">
                <div class=" relative ">
                    <input type="text" id="create-account-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="name" value={user.name} onChange={handleChange} placeholder="Full Name"/>
                    </div>
                </div>
                <div class="flex flex-col mb-2">
                    <div class=" relative ">
                        <input type="text" id="create-account-username" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="username" value={user.username} onChange={handleChange}    placeholder="Username"/>
                        </div>
                    </div>
                    <div class="flex gap-4 mb-2">
                        <div class=" relative ">
                            <input type="text" id="create-account-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" value={user.email} onChange={handleChange} placeholder="Email"/>
                            </div>

                            </div>
                            <div class="flex flex-col mb-2">
                                <div class=" relative ">
                                    <input type="password" id="create-account-password" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="password" value={user.password} onChange={handleChange} placeholder="Password(>= 8 characters)"/>
                                    </div>
                                </div>
                                    <div class="flex w-full my-4">
                                            <button type="submit" className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={registerAccount} >
                                            Register
                                            </button>
                                    </div>


                                                                </div>
                                                            </div>

        </>
        
    )
    
}
export default Register