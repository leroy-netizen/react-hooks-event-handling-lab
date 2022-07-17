// Code Keypad Component Here
import React from "react";

// methods
const changeHandler = (e) => console.log("Entering password...");

const Keypad = () => {
  return (
    <div>
      <input
        type="password"
        placeholder="Enter Password"
        onChange={changeHandler}
      />
    </div>
  );
};

export default Keypad;
