import React, { useState } from "react";

const ToggleText2 = () => {

    const [ click, setChange ] = useState(false);

    const updateState = () => setChange(!click);

    const a = <p>Hello</p>;
    const b = <p>World</p>;  

    return <div>
                <button onClick={ updateState }> Toggle </button>
                <p>{ click ? a : b } </p>

            </div>
}


export default ToggleText2;


// Create <ToggleText initial="Hello" alternate="World"> component. It should consist of a <p> and a <button>Toggle</button>. When the <button> is clicked the text of the <p> tag should alternate between initial and alternate.