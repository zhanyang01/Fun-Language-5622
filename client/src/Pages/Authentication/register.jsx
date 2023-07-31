import React , {useState} from 'react'
import {useNavigate, Link} from "react-router-dom"
import axios from "axios";
import {
    Heading, 
    Text, 
    Button, 
    Input,
    Container,
    useToast
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

    const toast = useToast();
    
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
        errors.push("Invalid password (must be at least 8 characters)");
        console.log("Invalid password (must be at least 8 characters)");
    }
    if (errors.length === 0) {
        await axios.post(`${process.env.REACT_APP_BACKEND_SERVER}/api/users/register`, user)
        .then(res => {
            console.log(res);
            // alert(res.data.message);
            if (res.data.message === "registration successful") {
                toast({
                    title: 'Registered',
                    description: res.data.message,
                    duration: 5000,
                    isClosable: true,
                    status: 'success',
                    position: 'top',
                });
                navigate("/login");
                toast({
                    title: 'Email',
                    description: "An email has been sent to you",
                    duration: 5000,
                    isClosable: true,
                    status: 'info',
                    position: 'top',
                });
            } else {
                toast({
                    title: 'Registration Error',
                    description: res.data.message,
                    duration: 5000,
                    isClosable: true,
                    status: 'error',
                    position: 'top',
                });
                navigate("/login");
            }
        })
    } else {
        // var errorMessage = "Registration failed";
        toast({
            title: 'Registration failed',
            description: errors.join('\n'),
            duration: 5000,
            isClosable: true,
            status: 'error',
            position: 'top',
        });
        // alert(errorMessage + '\n' + errors.join('\n'));
    }
   }


    return (
        <>  
        <Heading my = {10} fontSize = "3xl" color = "teal.500">Create a new account</Heading>
    <Container border="1px" borderColor="gray.300">
        <Text fontSize = "xl">Sign up</Text>
            <Input 
                type="text" 
                m="5px" 
                name="name" 
                value={user.name} 
                onChange={handleChange} 
                placeholder="Full Name"/>
            <Input 
                type="text" 
                m="5px" 
                name="username" 
                value={user.username} 
                onChange={handleChange}    
                placeholder="Username"/>
            <Input 
                m="5px"
                type="text"
                name="email" 
                value={user.email} 
                onChange={handleChange} 
                placeholder="Email"/>
            <Input 
                m="5px"
                type="password" 
                name="password" 
                value={user.password} 
                onChange={handleChange} 
                placeholder="Password"/>
            <Button
                m="5px"
                type = "submit" 
                colorScheme = "teal" 
                width = "full"
                variant="solid"
                onClick={registerAccount} >
                Register
            </Button>
        Already have an account ?{" "}
        <Link to="/login"
            style = {{
                color:"teal"
                }}>
            Sign in
        </Link>
        </Container>    

        </>
        
    )
    
}
export default Register