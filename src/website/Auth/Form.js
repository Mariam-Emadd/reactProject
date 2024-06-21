import React, { useState } from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import './Form.css'
import child from "../../Asset/child.jpg";
import MyNavBar from '../../Components/MyNavBar';
import axios from 'axios';
export default function Form() {
     const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
const [rememberMe, setRememberMe] = useState(false);
  const [accept, setAccept] = useState(false);
   const [emailError, setEmailError] = useState("");

async function Submit(e) {
    let flag = true;
    e.preventDefault();
    setAccept(true);
    if (password.length < 8) {
      flag = false;
    } else flag = true;
    try {
      if (flag) {
        //send data
        let res = await axios.post("http://findereg.me/api/login", {
          email: email,
          password: password,
        });
        if (res.status === 200 || res.status === 201) {
           window.localStorage.setItem("email", email);
          //  localStorage.setItem('authToken', res.data.token);
          window.location.pathname = "/";
           const { token } = res.data.data;
           
          if(token){
            localStorage.setItem('authToken', token);
            console.log(localStorage.getItem('authToken'));
          }
           
      if (rememberMe) {
        localStorage.setItem('token', token);
        localStorage.setItem('email', email);
      } else {
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('email', email);
      }
        }
      }
    } catch (err) {
      setEmailError(alert("Password is incorrect"));
    }
  }
 


  return (
    <div>
        <MyNavBar/>
    <MDBContainer  className=" my-3" >

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src={child} class="child" alt="Sample" />
        </MDBCol>

        <MDBCol col='4' md='6' style={{backgroundColor:'white' , borderRadius:"5px"}}>

          <div className="d-flex flex-row align-items-center justify-content-center">

            <p className="lead fw-normal mb-0 me-3" style={{color:"#062b60"}}>Sign in</p>

           
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0" style={{color:"white"}}>with Finder</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Email address' style={{color:"grey"}} id='formControlLg' type='email' size="lg" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required/>
                     {accept && emailError === 422 && (
                    <p className="error"> Email has been already taken </p>
                  )}
          <MDBInput wrapperClass='mb-4' label='Password'style={{color:"grey"}} id='formControlLg' type='password' size="lg"  value={password}
                    onChange={(e) => setPass(e.target.value)}/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="/reset">Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg' onClick={Submit}>Login</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/register" className="link-danger">Register</a></p>
          </div>

        </MDBCol>

      </MDBRow>
    </MDBContainer>
    
    </div>
  );
}

