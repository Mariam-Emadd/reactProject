import React, { useState } from "react";
import axios from "axios";
import  person  from "../Asset/person-search.jpg";
import './MyInsertedPhoto.css'
export default function MyInsertedPhoto () {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const token = localStorage.getItem("authToken"); 
 console.log(token)
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile || !name || !phone) {
      alert("Please complete all fields and select a file!");
      return;
    }
    
    if (!token) {
      alert("You are not logged in!");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("profile_image", selectedFile);
   
    try {
      const response = await axios.post(
        "http://findereg.me/api/add-student",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      console.log("Upload success", response.data);
    } catch (error) {
      if (error.response) {
       
        console.error("Error response:", error.response.data);
        console.error("Error status:", error.response.status);
        console.error("Error headers:", error.response.headers);
        if (error.response.status === 401) {
          alert("There is an error ,please try again");
          
        }
      } else if (error.request) {
        
        console.error("Error request:", error.request);
      } else {
       
        console.error("Error message:", error.message);
      }
      console.error("Error config:", error.config);
    }
  };

  return (
    <div className="all">
      <div>
        <img src={person} alt="search" className="person" />
      </div>

      <div className="inputs">
        <h2 style={{color:"white"}}>Child's data</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="input"
        />
        <input
          type="file"
          onChange={handleFileChange}
          id="actual-btn"
          className="input"
          hidden
        />
        <label className="label" for="actual-btn">Choose File</label>

        <button onClick={handleUpload} id="btn">
          Upload{" "}
        </button>
      </div>
    </div>
  );
}