import React, { useContext, useState } from "react";
import "../Auth/MySignup.css";
import axios from "axios";
import user_icon from "../../Asset/user (2).png";
import password_icon from "../../Asset/password.png";
import gmail_icon from "../../Asset/gmail.png";
import Header from "../../Components/MyNavBar";
import child from "../../Asset/child.jpg";
import { User } from "../context/context";
function MySignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [accept, setAccept] = useState(false);
  const [emailError, setEmailError] = useState("");
 const userNow = useContext(User);
console.log(userNow )
  

  async function handleSubmit(e) {
    e.preventDefault();
    setAccept(true);

    if (
      name === "" ||
      name.length < 3 ||
      password.length < 8 ||
      password !== passwordConfirmation
    ) {
      return; // Validation failed, do not proceed with the request
    }

    try {
      let res = await axios.post("http://findereg.me/api/register", {
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
      });
      // console.log(res)
      const token = res.data;
      localStorage.setItem("token", token);
      console.log(token);
      const userDetails = res.data.data.user;
      console.log(userDetails)
   userNow.setAuth({token,userDetails});
  
   console.log(token);
      if (res.status === 200 || res.status === 201) {
        window.localStorage.setItem("email", email);
        window.location.pathname = "/login";
      }
    } catch (err) {
      if (err.response && err.response.status === 422) {
        setEmailError("Email has already been taken");
      } else {
        setEmailError("An unexpected error occurred");
      }
    }
  }

  return (
    <div>
      <Header />
      <div>
        <img src={child} alt="Child" className="child" />
        <div className="form1">
          <div className="register">
            <form onSubmit={handleSubmit}>
              <h4 style={{ fontWeight: "700" }}>Sign up</h4>
              <h2
                style={{ color: "grey", fontSize: "15px", fontWeight: "600" }}
              >
                to continue to Finder
              </h2>
              <hr />
              <div className="inputs">
                <div className="input">
                  <img src={user_icon} alt="User Icon" style={{ width: 20 }} />
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {accept && (name === "" || name.length < 3) && (
                    <p className="error">
                      User name is required and must be at least 3 characters
                      long
                    </p>
                  )}
                </div>
                <div className="input">
                  <img
                    src={gmail_icon}
                    alt="Gmail Icon"
                    style={{ width: 20 }}
                  />
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {accept && emailError && (
                    <p className="error">{emailError}</p>
                  )}
                </div>
                <div className="input">
                  <img
                    src={password_icon}
                    alt="Password Icon"
                    style={{ width: 20 }}
                  />
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {accept && password.length < 8 && (
                    <p className="error">
                      Password must be more than 8 characters
                    </p>
                  )}
                </div>
                <div className="input">
                  <img
                    src={password_icon}
                    alt="Password Icon"
                    style={{ width: 20 }}
                  />
                  <input
                    id="passwordConfirmation"
                    type="password"
                    placeholder="Repeat Password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                  />
                  {accept && password !== passwordConfirmation && (
                    <p className="error">Passwords must match</p>
                  )}
                </div>
                <div>
                  <button type="submit" className="submit rounded-2">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySignUp;
