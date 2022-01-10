import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      <h1>{text || "This line only appears when text is empty."}</h1>
      {text && <h1>This line only appears when text is not empty</h1>}
    </>
  );
};

export default ShortCircuit;
