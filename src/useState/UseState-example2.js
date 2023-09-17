import React, { useState } from "react";

export const Index = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // functio type one
  // const changeFirstName = (e) => {
  //     setFirstName(e.target.value);
  // };
  // const changeEmail = (e) => {
  //     setEmail(e.target.value);
  // };
  // const changePassword = (e) => {
  //     setPassword(e.target.value);
  // };

  // function type 2 (single function)
  // const handleInputChange = (e, name) => {
  //     if (name === "firstName") {
  //         setFirstName(e.target.value);
  //     }
  //     else if (name === "email") {
  //         setEmail(e.target.value);
  //     }
  //     else if (name === "password") {
  //         setPassword(e.target.value);
  //     }
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    let userObj = {
      firstName: firstName,
      emial: email,
      password: password,
    };
    console.log(userObj);
  };
  return (
    <div>
      <form>
        <div className="form-content">
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            placeholder="enter your name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="enter your password"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSubmit}>submit</button>
        </div>
      </form>
    </div>
  );
};
export default Index;
