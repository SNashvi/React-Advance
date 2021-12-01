import React, { useState } from "react";

const UseStateObject = () => {
  const [people, setPeople] = useState({
    name: "Peter",
    age: 24,
    message: "Random Message",
  });

  const changeMessage = () => {
    setPeople({ ...people, message: "Message Changed" });
  };
  return (
    <>
      <h2>{people.name}</h2>
      <h3>{people.age}</h3>
      <h4>{people.message}</h4>
      <button onClick={changeMessage} className="btn">
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
