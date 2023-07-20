import React from "react";
import axios from "axios";
import { Link, useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Heading } from "@chakra-ui/react";

const EmailVerificationForm = () => {
    const {userId, token } = useParams();
    const [verified, setVerified] = useState(false);
    const [verificationFail, setverificationFail] = useState(false);

    {useEffect(() => {
        axios
            .put(`${process.env.REACT_APP_BACKEND_SERVER}/api/auth/verify/${userId}/${token}`)
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
            <Heading>
                Verify now!
            </Heading>
            <Link to="/login">
                <Button>
                    Login
                </Button>
            </Link>
        </>
    )
}

export default EmailVerificationForm;