import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {
    Heading,
    Button,
    Input,
    Container,
    useToast,
} from "@chakra-ui/react";

const validEmail = (email) => {
    const emailReged = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return email.match(emailReged);
};

const FillingEmail = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const toast = useToast();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmail(value);
    }

    const fillEmail = async () => {
        let errors = [];
        if (!email) {
            errors.push("Please fill up all fields");
            console.log("Please fill up all fields");
        }
        if (!validEmail(email)) {
            errors.push("Invalid email");
            console.log("Invalid email");
        }
        if (errors.length === 0) {
            await axios
                .post(`${process.env.REACT_APP_BACKEND_SERVER}/api/users/fillEmail`, { email })
                .then((res) => {
                    console.log(res);
                    // alert(res.data.message);
                    toast({
                        title: "Email sent",
                        description: "Please check your email to reset your password",
                        status: "success",
                        duration: 5000,
                        isClosable: true,
                    });
                    navigate("/login");
                })
                .catch((err) => {
                    console.log(err);
                    toast({
                        title: "Error",
                        description: "Error sending email",
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                    });
                });
            }
        }
    


    return (
        <>
        <Heading my={10} fontSize="3xl" textAlign="center" color="teal.500">
            Forget Password
        </Heading>
        <Container border="1px" borderColor="gray.300" borderRadius="lg" p={10} maxW="lg">
            <Input 
                type="text"
                m="5px"
                name="email"
                value={email}
                placeholder="Email"
                onChange={handleChange}
            />
            <Button 
                m="5px"
                type="submit"
                colorScheme="teal"
                width="full"
                variant="solid"
                onClick={fillEmail}
            >
                Send Email
            </Button>
        <Link to="/login"
            style = {{
                color: "teal",
            }}>
            Sign in
        </Link>
        </Container>
        </>
    )
}

export default FillingEmail