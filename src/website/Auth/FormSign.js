import React, { useContext, useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';
import MyNavBar from '../../Components/MyNavBar';
import axios from 'axios';
import { User } from '../context/context';

export default function FormSign() {
     const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [accept, setAccept] = useState(false);
  const [emailError, setEmailError] = useState("");
 const userNow = useContext(User);

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
      console.log(res)
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
        <MyNavBar/>
    <MDBContainer fluid className='p-4'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            The best App<br />
            <span className="text-primary">for your child safety</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
            Our application serves children by educating the community about ways to protect children, providing methods of protection for children, and retrieving lost children as quickly as possible to their families.
          </p>

        </MDBCol>

        <MDBCol md='6'>

          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' value={name}
                    onChange={(e) => setName(e.target.value)}/>
                </MDBCol>
{accept && (name === "" || name.length < 3) && (
                    <p className="error">
                      User name is required and must be at least 3 characters
                      long
                    </p>
                  )}
               
              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required/>
                     {accept && emailError && (
                    <p className="error">{emailError}</p>
                  )}
              <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'  value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                     {accept && password.length < 8 && (
                    <p className="error">
                      Password must be more than 8 characters
                    </p>
                  )}
                     <MDBInput wrapperClass='mb-4' label='Confirm Password' id='form2' type='password'  
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)} />
                     {accept && password !== passwordConfirmation && (
                    <p className="error">Passwords must match</p>
                  )}

              

              <MDBBtn className='w-100 mb-4' size='md' onClick={handleSubmit}>sign up</MDBBtn>

              <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </div>
  );
}

