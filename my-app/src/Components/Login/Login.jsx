import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import ExtraHeader from "../Header/ExtraHeader";
import axios from "axios";

const Login = (props) => {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://localhost:5001/api/Users/login",
        {
          Email: email,
          Password: password,
        }
      );

      const { firstName, lastName, id,type } = response.data.user;
      const user = { firstName, lastName, id ,type};

      localStorage.setItem("userId", user.id);
      console.log(firstName, lastName, id);

      // Update the user ID in the context
      props.id(user.id);

      // Redirect to the dashboard page
      if (user.type === "Regular") {
        history("/regularUsers");
      } else {
        history("/AdminDashbord");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <ExtraHeader></ExtraHeader>
      <section id="hero" class="d-flex align-items-center">
        <div className="App">
          <div className="outer">
            <div className="gresaLogin">
              <div className="inner">
                <form className="gresa" onSubmit={handleLogin}>
                  <h3>Log in</h3>

                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <label></label>
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <label></label>
                  </div>

                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        Remember me
                      </label>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <label
                        className="forgot-password custom-control-label"
                        htmlFor="customCheck1"
                      >
                        Forgot <a href="#">password</a>
                      </label>
                    </div>
                  </div>
                  <div className="d-grid gap-2 pt-4">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
