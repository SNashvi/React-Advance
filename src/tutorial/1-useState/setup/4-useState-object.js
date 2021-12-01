import React, { useState } from "react";

const UseStateObject = () => {
  const [name] = useState("Peter");
  const [age] = useState(24);
  const [message, setMessage] = useState("Random Message");

  const changeMessage = () => {
    setMessage("Message Changed");
  };
  return (
    <>
      <h2>{name}</h2>
      <h3>{age}</h3>
      <h4>{message}</h4>
      <button onClick={changeMessage} className="btn">
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
