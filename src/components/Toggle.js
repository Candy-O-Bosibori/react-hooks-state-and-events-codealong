import React, { useState } from "react";

function Toggle() {
  const [buttonOff, setIsOn] = useState(false);

  function eventHandler(){
    setIsOn((buttonOff) => !buttonOff);
  }

  return <button onClick={eventHandler}>{buttonOff ? "ON" : "OFF"}</button>;
}

export default Toggle;
