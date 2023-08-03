import React from 'react';
import {CourseDoneStructure} from '../../../../Components/languagePages/CourseDoneStructure' 

const EICourseDone = () => {
    return (
        <>
            <CourseDoneStructure
            nextLevelRoute={"eiassessment"}
            courseRoute={"englishintermediate"}
            headingContent={"Congratulations! You have completed the Intemediate Courrse for English Language :D"}
            />
        </>
    )
}

export default EICourseDone