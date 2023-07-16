import React from 'react';
// import List from '../../courselist';
import {CourseDoneStructure} from '../../../../Components/languagePages/CourseDoneStructure'

const EBCourseDone = () => {
    return (
        <>
            <CourseDoneStructure
            nextLevelRoute={"ebassessment"}
            courseDiff={"English Basic"}
            courseRoute={"englishbasic"}
            diffCourseDone={"EBCourseDone"}
            headingContent={"Congratulations! You have completed the Basic Courrse for English Language :D"}
            />
        </>
    )
}

export default EBCourseDone