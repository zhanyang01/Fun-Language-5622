import React from 'react';
// import List from '../../courselist';
import {CourseDoneStructure} from '../../../../Components/languagePages/CourseDoneStructure' 

const EICourseDone = () => {
    return (
        <>
            <CourseDoneStructure
            nextLevelRoute={"eiassessment"}
            courseDiff={"English Intemediate"}
            courseRoute={"englishintermediate"}
            diffCourseDone={"EICourseDone"}
            headingContent={"Congratulations! You have completed the Intemediate Courrse for English Language :D"}
            />
        </>
    )
}

export default EICourseDone