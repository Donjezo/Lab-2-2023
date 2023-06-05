import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AfterLoginPage from "./afterLoginPage";

const LoginPage = () => {
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
      history("/afterLoginPage");
    } catch (error) {
      console.error(error);
    }
  };

  if (user) {
    return (
      <AfterLoginPage firstName={user.firstName} lastName={user.lastName} />
    );
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
