import React, { useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export default function VerifyCode() {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const email = new URLSearchParams(location.search).get("email");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

   
    try {
      const response = await axios.post(
        "http://findereg.me/api/password/code/check",
        null,
        {
          headers: {
            Accept: "application/json",
          },
          params: {
            email: email,
            code: code,
          },
        }
      );

      if (response.status === 200) {
        setMessage("Code verified. You can now reset your password.");
        navigate(`/reset-password?email=${email}&code=${code}`);
      }
    } catch (error) {
      if (error.response) {
        // Handle different error statuses
        switch (error.response.status) {
          case 422:
            setError("Invalid code or email. Please try again.");
            break;
          case 400:
            setError("Invalid code. Please try again.");
            break;
          default:
            setError("An error occurred. Please try again.");
        }
      } else {
        setError("Network error. Please try again.");
      }
    }
  };

  return (
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
            <h3 style={{ color: "#062b60" }}>Verify Code</h3>
            <MDBInput
              wrapperClass="mb-4"
              label="Verification Code"
              id="formControlLg"
              type="text"
              size="lg"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
            <MDBBtn className="mb-0 px-5" size="lg" type="submit">
              Verify
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
  );
}
