import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  //handleSubmit function can be used either in onSubmit event on form element
  //or onClick event on button element with submit type
  const handleSubmit = (e) => {
    e.preventDefault();
    //Only Save First Name and Email to Person Array and People Array
    // if they are not empty
    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email };
      //const person = {firstName:firstName, email:email} This is longer syntax and it's same as above
      setPeople((people) => {
        return [...people, person];
      });
      //Empty the values of variables after Saving them
      setFirstName("");
      setEmail("");
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            ></input>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <button type="submit" onClick={handleSubmit}>
            Add Person
          </button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
