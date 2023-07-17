import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Hero} from "../../Components/LandingPage/hero"
import {Navbar} from "../../Components/LandingPage/Navbar"
import heroLogo from "../../Images/heroLogo.png"
import { keyFeatures } from '../../Components/LandingPage/keyFeatures'
import { FeaturesList } from '../../Components/LandingPage/features.js';
import { Container } from '@chakra-ui/react';

const LandingPage = () => {

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
                title="Learn a new language with our gamified courses today!!"
                nextRoute="/register"
                nextPage={registerPage}
                text="Create Your Account now!"
                image={heroLogo}
            />
            <Container>
                {
                FeaturesList.features.map((feature, index) => {
                    const { featTitle, featText, featImage } = feature;
                    return (
                        <keyFeatures
                            key={index}
                            featTitle={featTitle}
                            featText={featText}
                            featImage={featImage}
                            index={index}
                        />
                    );
                })
                }
            </Container>
        </>
    )
}

export default LandingPage