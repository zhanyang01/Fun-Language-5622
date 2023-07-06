import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import ProgressBar from '../../progressbar';

const EACourse4 = () => {
    const navigate = useNavigate();

    const advanced = () => {
        var email = localStorage.getItem("email");
        const course = email + " English Course";
        const meter = email + " English Meter";
        localStorage.setItem(course, "Advanced");
        console.log("Basic");
        localStorage.setItem(meter, "75%");
        console.log("75%");
        navigate('/englishadvanced');
    }

    var answers = ["A", "C", "B"];

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
            navigate('/eacoursedone');
        } else {
            alert(fail + "\n" + score + maxScore);
        }
    }

    const progress = { bgcolor: "#007FFF", completed: 75 };

    const margin = {
        margin: 20
    }

    return (
        <>
            <h1> Advanced Course (Part 4) </h1>
            <ProgressBar bgcolor = {progress.bgcolor} completed = {progress.completed} />
            <ul class = "quiz">

                <l1>
                    <h4>What is the meaning of 'face value'?</h4>
                    <ul class = "choices">
                        <li>
                            <label>
                                <input type = "radio" name = "question0" value = "A" />
                                <span> apparent value or significance </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type = "radio" name = "question0" value = "B" />
                                <span> the value of someone else's face </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type = "radio" name = "question0" value = "C" />
                                <span> profit </span>
                            </label>
                        </li>
                    </ul>
                </l1>

                <l1>
                    <h4>Which of the following best explains 'pecking order'?</h4>
                    <ul class = "choices">
                        <li>
                            <label>
                                <input type = "radio" name = "question1" value = "A" />
                                <span> egalitarian </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type = "radio" name = "question1" value = "B" />
                                <span> rank </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type = "radio" name = "question1" value = "C" />
                                <span> social hierarchy </span>
                            </label>
                        </li>
                    </ul>
                </l1>

                <l1>
                    <h4>Which word does not describe someone who is obstinate?</h4>
                    <ul class = "choices">
                        <li>
                            <label>
                                <input type = "radio" name = "question2" value = "A" />
                                <span> adamant </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type = "radio" name = "question2" value = "B" />
                                <span> placable </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type = "radio" name = "question2" value = "C" />
                                <span> headstrong </span>
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

export default EACourse4