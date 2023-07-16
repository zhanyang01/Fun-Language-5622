import React from 'react';
// import List from '../../courselist';
import {CourseDoneStructure} from '../../../../Components/languagePages/CourseDoneStructure' 

const EACourseDone = () => {
    return (
        <>
            <CourseDoneStructure
            nextLevelRoute={"eaassessment"}
            courseDiff={"English Advanced"}
            courseRoute={"englishadvanced"}
            diffCourseDone={"EACourseDone"}
            headingContent={"Congratulations! You have completed the Advanced Course for English Language :D"}
            />
        </>
    )
}

export default EACourseDone