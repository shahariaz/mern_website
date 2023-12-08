import { useState } from "react";
import img from "../assets/login.png";
import "./Login.css";
const loginPage = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <div className="login">
        <div className="logimg">
          <img src={img} width="400" height="500" alt="" />
        </div>
        <div className="loginFrom">
          <form onSubmit={handleSubmit}>
            <h1>Login Page</h1>
            <div className="data">
              <label htmlFor="Email">Email</label>
              <input
                value={email}
                type="email"
                placeholder="Email"
                id="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">Password</label>
              <input
                value={password}
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default loginPage;
