import OralStructure from "../../../../Components/languagePages/OralSpeakingStructure";
import { oralText } from "../../../../Questions/oraltext";

const EIOral = () => {
    const questionLabel = "intermediateSentence";

    return (
        <>
            <OralStructure 
            speechTitle={"Intermediate Sentences"}
            questionLabel = {questionLabel}
            questions ={oralText[questionLabel]}
            exitRoute ={"englishintermediate"}
            /> 
        </>
    )
}

export default EIOral;