import React, { useState } from "react";
import "./Register.css";
import ExtraHeader from "../Header/ExtraHeader";

import { useNavigate } from "react-router-dom";

const Register = (props) => {
  let navigate = useNavigate();
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    type: "Regular",
    status: 1,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the registration data to the backend API
    fetch("https://localhost:5001/api/User/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to create user.");
        }
      })
      .then((data) => {
        // Handle the response from the backend
        console.log(data);
        // Redirect to login page
        navigate("/login"); // Replace '/login' with the actual path of your login page
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
        // Display the error message to the user
        // You can set the error message in the state and render it in your component
      });
  };

  return (
    <div>
      <ExtraHeader></ExtraHeader>

      <section id="hero" class="d-flex align-items-center">
        <div className="App pt-3">
          <div className="outer pt-3">
            <div className="bleonaRegister pt-3">
              <div className="inner pt-3 ">
                <form onSubmit={handleSubmit}>
                  <h3 className="mt-4">Register</h3>

                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your first name here"
                      name="firstName"
                      value={state.firstName}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your last name here"
                      name="lastName"
                      value={state.lastName}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      name="email"
                      value={state.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      name="password"
                      value={state.password}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm your password"
                      name="password"
                    />
                  </div>

                  <div className="d-grid gap-2 pt-4 ">
                    <button
                      type="submit"
                      className="btn btn-primary  btn-lg btn-block"
                    >
                      Register
                    </button>
                  </div>

                  <p className="forgot-password text-right">
                    Already registered <a href="/Login">log in?</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
