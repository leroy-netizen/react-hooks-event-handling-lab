// Code EyesOnMe Component Here
import React from "react";
const handleFocus = () => {
  console.log("Good!");
};
const handleBlur = () => {
  console.log("Hey! Eyes on me!");
};

const EyesOnMe = () => {
  return (
    <button onFocus={handleFocus} onBlur={handleBlur}>
      Eyes on me!
    </button>
  );
};

export default EyesOnMe;
