import OralStructure from "../../../../Components/languagePages/OralSpeakingStructure";
import { oralText } from "../../../../Questions/oraltext";

const EBOral = () => {
    const questionLabel = "basicSentence";

    return (
        <>
            <OralStructure 
            speechTitle={"Basic Sentences"}
            questionLabel = {questionLabel}
            questions ={oralText[questionLabel]}
            exitRoute ={"englishbasic"}
            /> 
        </>
    )
}

export default EBOral;