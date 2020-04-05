import React, { useState } from "react";


const CatchMe2 = ({ jump }) => {

    const [ top, setChange ] = useState(0);

    const updateStatePlus = () => setChange(top + jump);

    

    return <div>
                <button onClick= { updateStatePlus } style={{ position: "relative", top: top + "px" }}> Jump  </button>
            </div>
}

export default CatchMe2;


// Create a <CatchMeIfYouCan jump={ 100 }> component. It should have a <button> that when clicked moves jump pixels down the screen.