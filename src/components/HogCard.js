import React, {useState} from "react";

function HogCard({name, image, medal, specialty, greased, weight}){
    const [switchDisplay, setSwitchDisplay] = useState(false)

    function handleHogDisplay(){
        setSwitchDisplay(!switchDisplay)
    }

    const hogInfo = (
        <>
            <p>Specialty: {specialty}</p>
            <p>Highest Medal: {medal}</p>
            <p>Greased: {String(greased)}</p>
            <p>Weight: {weight}Lbs</p>
        </>
    )
    return(
        <>
            <span>
                <h2 onClick={handleHogDisplay}>{name}</h2>
                {switchDisplay? hogInfo : <img src={image} alt={name}></img> }
            </span>
        </>
    )
}
export default HogCard