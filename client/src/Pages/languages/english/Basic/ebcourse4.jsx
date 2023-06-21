import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import ProgressBar from '../../progressbar';

const EBCourse4 = () => {
    const navigate = useNavigate();

    const basic = () => {
        navigate('/englishbasic');
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
        var score = getScore();
        if (score == 3) {
            alert("Passed! Please proceed to next level" + "\n" + score + "/3 correct");
            navigate('/ebcoursedone');
        } else {
            alert("Please try again!" + "\n" + score + "/3 correct");
        }
    }

    const progress = { bgcolor: "#007FFF", completed: 75 };

    const margin = {
        margin: 20
    }

    return (
        <>
            <h1> Basic Course (Part 4) </h1>
            <ProgressBar bgcolor = {progress.bgcolor} completed = {progress.completed} />
            <ul class = "quiz">

                <l1>
                    <h4>Which of the following is a noun?</h4>
                    <ul class = "choices">
                        <li>
                            <label>
                                <input type = "radio" name = "question0" value = "A" />
                                <span> John </span>
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
                                <span> the </span>
                            </label>
                        </li>
                    </ul>
                </l1>

                <l1>
                    <h4>I wonder __ she went.</h4>
                    <ul class = "choices">
                        <li>
                            <label>
                                <input type = "radio" name = "question1" value = "A" />
                                <span> what </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type = "radio" name = "question1" value = "B" />
                                <span> who </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type = "radio" name = "question1" value = "C" />
                                <span> where </span>
                            </label>
                        </li>
                    </ul>
                </l1>

                <l1>
                    <h4>Can't wait __ see you next week!</h4>
                    <ul class = "choices">
                        <li>
                            <label>
                                <input type = "radio" name = "question2" value = "A" />
                                <span> in </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type = "radio" name = "question2" value = "B" />
                                <span> to </span>
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type = "radio" name = "question2" value = "C" />
                                <span> how </span>
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
                <Link to="/englishbasic">
                    <button type="submit" className="py-5 px-5 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  " onClick={basic}>
                        Save and exit
                    </button>
                </Link>
            </div>
        </>
    )
}

export default EBCourse4