import React, { useState } from "react";
import "./Login.css";
import ExtraHeader from "../Header/ExtraHeader";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://localhost:44314/api/Users/login",
        {
          Email: email,
          Password: password,
        }
      );

      const { firstName, lastName } = response.data.user;
      setUser({ firstName, lastName });

      // Redirect to the dashboard page
      history("/afterLofinpage");
    } catch (error) {
      console.error(error);
    }
  };

  // if (user) {
  //   return (
  //     // <AfterLoginPage firstName={user.firstName} lastName={user.lastName} />
  //   );
  // }

  return (
    <div>
      <ExtraHeader></ExtraHeader>

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
    </div>
  );
};

export default Login;
