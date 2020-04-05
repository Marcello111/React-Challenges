import React, { useState } from "react";
import { Button } from "react-bootstrap";

const StepCounter2 = (props) => {

    const [ start, setChange ] = useState(0);

    const add = () => setChange(start + (start < props.max ? props.step : 0));

    const min = () => setChange(start - (start > 0 ? props.step : 0));

    return <div>

              <Button onClick= { add }> Plus + </Button>
              <Button onClick= { min }> Minus - </Button>

              <p>Number of Steps: { start }</p>  
            </div>
}

export default StepCounter2;

// Create a <StepCounter max={ 100 } step={ 5 } /> component. It should consist of a <p> containing a number (start at 0) and two buttons, + and -. When the user clicks the + button, the number should go up by step. When the user clicks the - button the number should go down by step. The number should not be able to go below 0. Use props to pass in a maximum value for the counte