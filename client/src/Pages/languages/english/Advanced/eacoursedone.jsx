import React from 'react';
import {CourseDoneStructure} from '../../../../Components/languagePages/CourseDoneStructure' 

const EACourseDone = () => {
    return (
        <>
            <CourseDoneStructure
            nextLevelRoute={"eaassessment"}
            courseRoute={"englishadvanced"}
            headingContent={"Congratulations! You have completed the Advanced Course for English Language :D"}
            />
        </>
    )
}

export default EACourseDone