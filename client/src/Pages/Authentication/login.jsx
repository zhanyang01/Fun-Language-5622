import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate, Link} from "react-router-dom"
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

const Login = ({setLoginUser}) => {
    const history = useNavigate()
    const [user,setUser] = useState({
        email:"",
        password: ""
    })

    const handleChange = e =>{
    const {name,value} = e.target
    setUser({
    ...user, //spread operator 
    [name]:value
    })
    }

    const toast = useToast();

    //login function
    const loginUser = async()=> {
        let errors = [];
        // console.log("user",user);
        if (user.email && user.password) {
            if (!validEmail(user.email)) {
                errors.push("Invalid email");
                toast({
                    title: 'Login Error',
                    description: "Invalid email",
                    duration: 5000,
                    isClosable: true,
                    status: 'error',
                    position: 'top',
                });
                // alert("invalid email");
                console.log("Invalid email");
            } else {
                await axios.post(`${process.env.REACT_APP_BACKEND_SERVER}/api/users/login`, user)
                .then((res)=>{
                    console.log(res);
                    // alert(res.data.message);
                    if (res.data.message === "login success") {
                        localStorage.setItem("username", res.data.username);
                        localStorage.setItem("userId", res.data.userId);
                        localStorage.setItem("email", user.email);
                        // setLoginUser(res.data.user)
                        toast({
                            title: 'Logged in',
                            description: res.data.message,
                            duration: 5000,
                            isClosable: true,
                            status: 'success',
                            position: 'top',
                        });
                        history("/homepage");
                    } else {
                        errors.push(res.data.message);
                        toast({
                            title: 'Login Error',
                            description: res.data.message,
                            duration: 5000,
                            isClosable: true,
                            status: 'error',
                            position: 'top',
                        });
                    }
                }).catch((err)=>{
                    console.log(err);
                    alert(err);
                })
            }
        } else {
            console.log("invalid input");
            toast({
                title: 'Login Error',
                description: "Invalid input",
                duration: 5000,
                isClosable: true,
                status: 'error',
                position: 'top',
            });
            // alert("invalid input");
            errors.push("invalid input");
        }
    }

    return (
        <>
        <Heading my = {10} fontSize = "3xl" color = "teal.500">Welcome to Fun Language!</Heading>
        <Container border="1px" borderColor="gray.300">
            <Text fontSize = "xl">Sign in</Text>
                <Input 
                    m="5px" 
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={user.email}  
                    onChange ={handleChange}/>
                <Input 
                    m="5px"
                    type="password"
                    placeholder="Password" 
                    name="password" 
                    value={user.password}  
                    onChange={handleChange}/>
                <Button 
                    m="5px"
                    type = "submit" 
                    colorScheme = "teal" 
                    width = "full"
                    variant="solid"
                    onClick={() => loginUser()}>
                    Login
                </Button>
                New to us?{" "}
                <Link to="/register"
                    style = {{
                        color:"teal"
                        }}>
                    Sign Up.
                </Link>
            </Container>
        </>
    )
}
export default Login