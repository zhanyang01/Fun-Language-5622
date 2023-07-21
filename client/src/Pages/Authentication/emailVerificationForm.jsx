import React from "react";
import axios from "axios";
import { Link, useParams, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Text } from "@chakra-ui/react";

const EmailVerificationForm = () => {
    const navigate = useNavigate();

    const login = () => {
        navigate('/login');
    }

    const {userId, token } = useParams();
    const [verified, setVerified] = useState(false);
    const [verificationFail, setverificationFail] = useState(false);

    {useEffect(() => {
        axios
            .put(`${process.env.REACT_APP_BACKEND_SERVER}/api/users/verify/${userId}/${token}`)
            .then((res) => {
                if (res.data.success) {
                    setVerified(true);
                    setverificationFail(false);
                } else {
                    setVerified(false);
                    setverificationFail(true);
                }
            })
            .catch((err) => {
                console.log(err);
                setVerified(false);
                setverificationFail(true);
            });
    }, [])};
    return (
        <>
            {verified && !verificationFail ? (
                <Text>
                    Your account has been verified. Please login to continue.
                </Text>
            ) : (
                <Text>
                    Your account could not be verified. Please try again.
                </Text>
            )}
            <Link to="/login">
                <Button
                    m="5px"
                    colorScheme = "teal" 
                    width = "480px"
                    variant="solid"
                    type="submit"
                    onClick={login}>
                    Login
                </Button>
            </Link>
        </>
    )
}

export default EmailVerificationForm;