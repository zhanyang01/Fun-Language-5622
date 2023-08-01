import React from "react";
import axios from "axios";
import { Link, useParams, useNavigate} from "react-router-dom";
import { useState} from "react";
import {
    Heading,
    Button,
    Input,
    Container,
    useToast,
} from "@chakra-ui/react";

const ForgetPasswordForm = () => {
    const navigate = useNavigate();

    const login = () => {
        navigate('/login');
    }

    const toast = useToast();

    const {userId, token } = useParams();
    const [password, setPassword] = useState({
        newPassword: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPassword({
            ...password,
            [name]: value,
        });
    }

    const resetPassword = async () => {
        const { newPassword, confirmPassword} = password
        let errors = [];
        if (!newPassword || !confirmPassword) {
            errors.push("Please fill up all fields");
            console.log("Please fill up all fields");
        }
        if (newPassword.length < 8 && !errors.includes("Please fill up all fields")) {
            errors.push("Invalid Password (must be at least 8 characters)");
            console.log("Invalid Password (must be at least 8 characters)");
        }
        if (newPassword !== password.confirmPassword && !errors.includes("Please fill up all fields")) {
            errors.push("Passwords do not match");
            console.log("Passwords do not match");
        }
        if (errors.length === 0) {
            await axios
                .post(`${process.env.REACT_APP_BACKEND_SERVER}/api/users/resetpassword`, { userId, token, newPassword })
                .then((res) => {
                    if (res.data.message === "password reset successful") {
                        console.log(res.data.message);
                        toast({
                            title: "Password updated",
                            description: "Your password has been updated",
                            status: "success",
                            duration: 5000,
                            isClosable: true,
                            position: "top",
                        });
                        login();
                    } else {
                        console.log(res.data.message);
                        toast({
                            title: "Error",
                            description: res.data.message,
                            status: "error",
                            duration: 5000,
                            isClosable: true,
                            position: "top",
                        });
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            toast({
                title: "Error",
                description: errors.join("\n"),
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top",
            });
        }
    };
    return (
        <>
        <Heading my="10px" fontSize="3xl" color="teal.500">
            Reset Password
        </Heading>
        <Container border="1px" borderColor="gray.300">
            <Input
                type="text"
                name="newPassword"
                placeholder="New Password"
                value={password.newPassword}
                onChange={handleChange}
                m="5px"
            />
            <Input
                type="text"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={password.confirmPassword}
                onChange={handleChange}
                m="5px"
            />
            <Button
                colorScheme="teal"
                type="submit"
                variant="solid"
                m="5px"
                width="full"
                onClick={resetPassword}>
                Reset Password
            </Button>
        Remember old password ?{" "}
        <Link to="/login"
            style={{
                color: "teal"
            }}>
            Sign in
        </Link>
        </Container>
        </>
    )
}

export default ForgetPasswordForm;

