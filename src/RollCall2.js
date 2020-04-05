import React, { useState } from "react";


const RollCall2 = ({ names }) => {

    const [ winner, setChange ] = useState(0);

    const updateState = () => setChange((winner + 1) % names.length);

    return <div>
                <button onClick= { updateState }> Result  </button>
                <p>The winner is: { names[winner] }</p>

            </div>
}

export default RollCall2;


// Create a <RollCall names={ names }> component. It should have a button "Next". When the component first loads it should show the first name in the array. Every time you click "Next" it should show the next name in the array. It should loop back to the beginning.