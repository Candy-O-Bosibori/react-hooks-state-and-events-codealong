import React, { useState } from "react";

function Toggle() {
  const [buttonOff, setIsOn] = useState(false);

  function eventHandler(){
    setIsOn((buttonOff) => !buttonOff);
  }

  const color = buttonOff ? "red": "white"


  return <button 
  style={{ background: color }}  onClick={eventHandler}>{buttonOff ? "ON" : "OFF"}</button>;
}

export default Toggle;
