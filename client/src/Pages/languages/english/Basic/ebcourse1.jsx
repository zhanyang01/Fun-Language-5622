import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import ProgressBar from '../../progressbar';
import { Button, Container, Heading } from '@chakra-ui/react';

const EBCourse1 = () => {
    const navigate = useNavigate();

    const saveProgress = () => {
        var email = localStorage.getItem("email");
        const course = email + " English Course";
        const meter = email + " English Meter";
        localStorage.setItem(course, "Basic");
        console.log("Basic");
        localStorage.setItem(meter, "0%");
        console.log("0%");
        navigate('/englishbasic');
    }

    var answers = ["B", "A", "C"];

    var submissions = answers.length;

    function getCheckedValue(radioName) {
        var radios = document.getElementsByName(radioName);
        for (var x = 0; x < radios.length; x++) {
            if (radios[x].checked) {
                return radios[x].value;
            }
        }
    }

    function getScore() {
        var score  = 0;
        for (var i = 0; i < submissions; i++) {
            if (getCheckedValue("question" + i) === answers[i]) {
                score += 1;
            }
        }
        return score;
    }

    const nextLevel = () => {
        var maxScore = "/3 correct"
        var pass = "Passed! Please proceed to next level";
        var fail = "Please try again!"
        var score = getScore();
        if (score === 3) {
            alert(pass + "\n" + score + maxScore);
            navigate('/ebcourse2');
        } else {
            alert(fail + "\n" + score + maxScore);
        }
    }

    const progress = { bgcolor: "#007FFF", completed: 0 };

    const margin = {
        margin: 20
    }

    return (
        <>
            <Heading color="teal.500"> 
                Basic Course (Part 1) 
            </Heading>
            <ProgressBar bgcolor = {progress.bgcolor} completed = {progress.completed} />
            <ul class = "quiz">

                    <h4>I saw __ dog.</h4>
                    <ul class = "choices">
                        <li>
                            <label>
                                <input type = "radio" name = "question0" value = "A" />
                                <span> an </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type = "radio" name = "question0" value = "B" />
                                <span> a </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type = "radio" name = "question0" value = "C" />
                                <span> it </span>
                            </label>
                        </li>
                    </ul>

                <l1>
                    <h4>Which pronoun is used to refer to yourself?</h4>
                    <ul class = "choices">
                        <li>
                            <label>
                                <input type = "radio" name = "question1" value = "A" />
                                <span> I </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type = "radio" name = "question1" value = "B" />
                                <span> He </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type = "radio" name = "question1" value = "C" />
                                <span> We </span>
                            </label>
                        </li>
                    </ul>
                </l1>

                <l1>
                    <h4>Which word is the same as 60?</h4>
                    <ul class = "choices">
                        <li>
                            <label>
                                <input type = "radio" name = "question2" value = "A" />
                                <span> fifty </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type = "radio" name = "question2" value = "B" />
                                <span> sixty-nine </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type = "radio" name = "question2" value = "C" />
                                <span> sixty </span>
                            </label>
                        </li>
                    </ul>
                </l1>

            </ul>
            <Container>
                <Button 
                    m="5px"
                    type="submit" 
                    colorScheme = "teal" 
                    width = "480px"
                    variant="solid"
                    onClick={nextLevel}>
                    Submit
                </Button>
                <Button 
                    type="submit" 
                    m="5px"
                    colorScheme = "teal" 
                    width = "480px"
                    variant="solid"
                    onClick={saveProgress}>
                    Save and exit
                </Button>
            </Container>
        </>
    )
}

export default EBCourse1