import React, { useState } from "react";

import { Button } from "react-bootstrap";

const Ex2 = () => {
  // sets up the initial value of counter
  // and gives back the current value and a function to update counter
  const [counter, setCounter] = useState(0);

  // the event handler
  // uses the provided function to set the value of counter
  const updateCounter = () => setCounter(counter + 1);

  // display counter and setup click handler
  return <Button onClick={ updateCounter }>Hooks example: { counter }</Button>;
}

export default Ex2;