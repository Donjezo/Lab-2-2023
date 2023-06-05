import React from "react";

const afterLoginPage = ({ firstName, lastName }) => {
  return (
    <div>
      <h1>Welcome to Epatient !</h1>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
    </div>
  );
};

export default afterLoginPage;
