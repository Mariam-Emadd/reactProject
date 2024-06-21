import React, { useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import axios from "axios";
import VerifyCode from "./VerifyCode";

export default function ResetPass() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await axios.post(
        "http://findereg.me/api/password/email",
        null,
        {
          headers: {
            Accept: "application/json",
          },
          params: {
            email: email,
          },
        }
      );

      if (response.status === 200) {
        setMessage("Password reset link has been sent to your email.");
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("Email address not found.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div>
      <MDBContainer className="my-3">
        <MDBRow>
          <MDBCol md="6" className="offset-md-3">
            <form
              onSubmit={handleSubmit}
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "5px",
              }}
            >
              <h3 style={{ color: "#062b60" }}>Forgot Password</h3>
              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <MDBBtn className="mb-0 px-5" size="lg" type="submit">
                Submit
              </MDBBtn>
              {message && (
                <p style={{ color: "green", marginTop: "10px" }}>{message}</p>
              )}
              {error && (
                <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
              )}
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <VerifyCode/>
    </div>
  );
}
