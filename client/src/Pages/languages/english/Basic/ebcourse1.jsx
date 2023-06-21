import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import ProgressBar from '../../progressbar';

const EBCourse1 = () => {
    const navigate = useNavigate();

    const basic = () => {
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
        var score = getScore();
        if (score == 3) {
            alert("Passed! Please proceed to next level" + "\n" + score + "/3 correct");
            navigate('/ebcourse2');
        } else {
            alert("Please try again!" + "\n" + score + "/3 correct");
        }
    }

    const progress = { bgcolor: "#007FFF", completed: 0 };

    const margin = {
        margin: 20
    }

    return (
        <>
            <h1> Basic Course (Part 1) </h1>
            <ProgressBar bgcolor = {progress.bgcolor} completed = {progress.completed} />
            <ul class = "quiz">

                <l1>
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
                </l1>

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

export default EBCourse1