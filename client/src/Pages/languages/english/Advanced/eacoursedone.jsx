import React from 'react';
// import List from '../../courselist';
import {CourseDoneStructure} from '../../../../Components/UI/CourseDoneStructure' 

const EACourseDone = () => {
    return (
        <>
            <CourseDoneStructure
            nextLevelRoute={"eaassessment"}
            courseDiff={"English Advanced"}
            courseRoute={"englishadvanced"}
            diffCourseDone={"EACourseDone"}
            headingContent={"Congratulations! You have completed the Advanced Courrse for English Language :D"}
            />
        </>
    )
}

export default EACourseDone