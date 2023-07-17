import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Hero} from "../../Components/LandingPage/hero"
import {Navbar} from "../../Components/LandingPage/Navbar"
import heroLogo from "../../Images/heroLogo.png"

function LandingPage() {

    const navigate = useNavigate();

    const loginPage = () => {
        navigate('/login');
    }

    const registerPage = () => {
        navigate('/register');
    }

    return (
        <>
            <Navbar
                title="Fun Language"
                routeOne="/register"
                routeTwo="/login"
                text1="Sign Up"
                text2="Sign In"
                nextPageOne={registerPage}
                nextPageTwo={loginPage}
            />
            <Hero
                title="Learn a new Language today with out highly gamified courses today!!"
                nextRoute="/register"
                nextPage={registerPage}
                text="Create Your Account now!"
                image={heroLogo}
            />
        </>
    )
}

export default LandingPage