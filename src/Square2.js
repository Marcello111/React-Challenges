import React, { useState } from "react";

const Square2 = ( { colour }) => {

    const [ orig, setChange ] = useState(true);

    const updateState = () => setChange(!orig);

    return <div onClick= { updateState } 
                        
                style={{

                        height: 100,
                        width: 100,
                        background: orig ? "green": colour,
                        
                    }}>

            </div>

}
export default Square2;

// import React, { useState } from "react";

// const Square2 = (props) => {

//     const [ colour, setChange ] = useState("green");

//     const updateState = () => setChange(props.colour);

//     return <div onClick= { updateState } 
                        
//                 style={{

//                         height: 100,
//                         width: 100,
//                         background: colour,
                        
//                     }}>

//             </div>

// }
// export default Square2;


// Update your <Square colour="hotpink"> component so that the background starts green, but when it is clicked it changes to the passed in colour. It should alternate every time you click.