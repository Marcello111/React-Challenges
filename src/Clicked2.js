import React, { useState } from "react";

const Clicked2 = () => {

    const [ clicked, setChange ] = useState(false);

    const updateState = () => setChange(true);
    
    return <button onClick={ updateState }> { clicked ? "Clicked" : "Not Clicked"} </button>;


}
export default Clicked2;

// Create a <Clicked> component. It should initially display "Not clicked" in a <p>. Once it's been clicked it should change to "Clicked".