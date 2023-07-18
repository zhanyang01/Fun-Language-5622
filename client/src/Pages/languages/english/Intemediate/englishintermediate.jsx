import React from 'react';
import { EnglishDiffStructure } from '../../../../Components/languagePages/EnglishDiffStructure';

const EnglishIntermediate = () => {
    return (
        <>
        <EnglishDiffStructure
            courseDiff={"Intermediate"}
            differA ={"Basic"}
            differB ={"Advanced"}
            part1 ={"eicourse1"}
            part2 ={"eicourse2"}
            part3 ={"eicourse3"}
            part4 ={"eicourse4"}
            assess ={"eiassessment"}
            oral = {"eioral"}
            practice = {"eipractice"}
        />
        </>
    )
}

export default EnglishIntermediate