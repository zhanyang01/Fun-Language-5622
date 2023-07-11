import OralStructure from "../../../../Components/languagePages/OralSpeakingStructure";
import { oralText } from "../../../../Questions/oraltext";

const EAOral = () => {
    const questionLabel = "advancedSentence";

    return (
        <>
            <OralStructure 
            speechTitle={"Advanced Sentences"}
            questionLabel = {questionLabel}
            questions ={oralText[questionLabel]}
            exitRoute ={"englishadvanced"}
            /> 
        </>
    )
}

export default EAOral;