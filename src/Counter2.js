import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Counter2 = ({ max }) => {

    const [ counter, setChange ] = useState(5);

    const updateStatePlus = () => setChange(counter + (counter < max ? 1 : 0));

    const updateStateMinus = () => setChange(counter - (counter > 0 ? 1 : 0));

    return <div>
                <Button onClick= { updateStatePlus }> Plus + </Button>

                <Button onClick= { updateStateMinus }> Minus - </Button>

                <p>Number: { counter } </p>

            </div>
}

export default Counter2;

//Create a <Counter initial={ 5 } max={ 10 } /> component. It should consist of a <p> containing a number (which starts at the initial value) and two buttons, + and -. When the user clicks the + button, the number should go up. When the user clicks the - button the number should go down. The number should not be able to go below 0. Use props to pass in a maximum value for the counter.