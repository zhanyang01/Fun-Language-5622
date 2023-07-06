import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import ProgressBar from '../../progressbar';

const EACourse2 = () => {
    const navigate = useNavigate();

    const advanced = () => {
        var email = localStorage.getItem("email");
        const course = email + " English Course";
        const meter = email + " English Meter";
        localStorage.setItem(course, "Advanced");
        console.log("Basic");
        localStorage.setItem(meter, "25%");
        console.log("25%");
        navigate('/englishadvanced');
    }

    var answers = ["A", "A", "C"];

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
            navigate('/eacourse3');
        } else {
            alert(fail + "\n" + score + maxScore);
        }
    }

    const progress = { bgcolor: "#007FFF", completed: 25 };

    const margin = {
        margin: 20
    }

    return (
        <>
            <h1> Advanced Course (Part 2) </h1>
            <ProgressBar bgcolor = {progress.bgcolor} completed = {progress.completed} />
            <ul class = "quiz">

                <l1>
                    <h4>The antonym of lethargic is __.</h4>
                    <ul class = "choices">
                        <li>
                            <label>
                                <input type = "radio" name = "question0" value = "A" />
                                <span> active </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type = "radio" name = "question0" value = "B" />
                                <span> happy </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type = "radio" name = "question0" value = "C" />
                                <span> sleepy </span>
                            </label>
                        </li>
                    </ul>
                </l1>

                <l1>
                    <h4>Neither Danny __ Henry entered the classroom today.</h4>
                    <ul class = "choices">
                        <li>
                            <label>
                                <input type = "radio" name = "question1" value = "A" />
                                <span> nor </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type = "radio" name = "question1" value = "B" />
                                <span> or </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type = "radio" name = "question1" value = "C" />
                                <span> and </span>
                            </label>
                        </li>
                    </ul>
                </l1>

                <l1>
                    <h4>Which of the following is not a definition of alleviate?</h4>
                    <ul class = "choices">
                        <li>
                            <label>
                                <input type = "radio" name = "question2" value = "A" />
                                <span> to make something, such as pain or suffering, more bearable </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type = "radio" name = "question2" value = "B" />
                                <span> to partially remove or correct something undesirable </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type = "radio" name = "question2" value = "C" />
                                <span> to worsen </span>
                            </label>
                        </li>
                    </ul>
                </l1>

            </ul>
            <div className="flex w-full">
                <button type="submit" className="py-5 px-5 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={nextLevel}>
                    Submit
                </button>
            </div>
            <div className="flex w-full" style = {margin}>
                <Link to="/englishadvanced">
                    <button type="submit" className="py-5 px-5 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={advanced}>
                        Save and exit
                    </button>
                </Link>
            </div>
        </>
    )
}

export default EACourse2