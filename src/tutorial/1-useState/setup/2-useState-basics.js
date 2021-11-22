import React, { useState } from "react";
//useState - function
// is used to update the state in a React component
// must be in the function/component body
// cannot call conditionally

const UseStateBasics = () => {
  const [text, setText] = useState("Random Title");

  const handleClick = () => {
    if (text === "Random Title") {
      setText("My value changed");
    } else {
      setText("Random Title");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
