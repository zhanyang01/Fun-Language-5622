import React from 'react';
import {CourseDoneStructure} from '../../../../Components/languagePages/CourseDoneStructure'

const EBCourseDone = () => {
    return (
        <>
            <CourseDoneStructure
            nextLevelRoute={"ebassessment"}
            courseRoute={"englishbasic"}
            headingContent={"Congratulations! You have completed the Basic Courrse for English Language :D"}
            />
        </>
    )
}

export default EBCourseDone