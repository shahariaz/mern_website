import reg from "../assets/register.png";
import { server } from "../server";
import { useState } from "react";
import "./SingupPage.css";
const SingUpPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsername("");
    setEmail("");
    setPassword("");
    setPhone("");
  };
  console.log(username);
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="regImg">
              <img src={reg} width="400" height="500" alt="login page" />
            </div>
            <div className="regForm">
              <form onSubmit={handleSubmit}>
                <h1 className="heading">Registration From</h1>
                <br />
                <div className="data">
                  <label htmlFor="username">Username</label>
                  <input
                    value={username}
                    type="text"
                    placeholder="username"
                    id="username"
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    value={email}
                    type="email"
                    placeholder="email"
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="password">Password</label>
                  <input
                    value={password}
                    type="password"
                    placeholder="password"
                    id="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="number">Number</label>
                  <input
                    value={phone}
                    type="number"
                    placeholder="number"
                    id="number"
                    name="number"
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default SingUpPage;
