import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  };
  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1); Using normal setValue won't behave as expected with setTimeout method
      // Need to use functional setValue to keep the previous value if button clicked couple of times
      setValue((preValue) => {
        return preValue + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular Counter</h2>
        <h3>{value}</h3>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increase
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>Complext Counter</h2>
        <h3>{value}</h3>
        <button className="btn" onClick={complexIncrease}>
          Increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
