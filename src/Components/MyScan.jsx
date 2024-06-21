import React, { useState } from "react";
import QRCode from "qrcode.react";
 import "./MyScan.css"; // Import your CSS file

export default function MyScan() {
  const [inputValue, setInputValue] = useState("");
   const [phoneValue, setPhoneValue] = useState("");
  const [qrCodeValue, setQRCodeValue] = useState(null);

   const generateQRCode = () => {
     if (inputValue.trim() !== "" && phoneValue.trim() !== "") {
       setQRCodeValue(`${inputValue} - ${phoneValue}`);
     } else {
       console.log("Please enter both text and phone number.");
     }
   };

  return (
    <div className="container">
      <div className="user-input-section">
        <section className="heading">
          <div className="title">QRcodes</div>
          <div className="sub-title">
            Create a QR code for your child's safety!
          </div>
        </section>
        <section className="user-input">
          <input
            type="text"
            placeholder="Type Child's Name..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            autoComplete="off"
          />
          <input
            type="tel"
            placeholder="Enter parent's phone number..."
            value={phoneValue}
            onChange={(e) => setPhoneValue(e.target.value)}
          />
          <button className="button" onClick={generateQRCode}>
            Generate
          </button>
        </section>
      </div>
      <div className="qr-code-container">
        {qrCodeValue && (
          <QRCode
            value={qrCodeValue}
            className="qr-code"
            size={180}
            bgColor={"#ffffff"}
            fgColor={"#000000"}
            level={"H"}
          />
        )}
        {qrCodeValue && (
          <a
            href={`https://api.qrserver.com/v1/create-qr-code/?data=${qrCodeValue}&size=180x180`}
            download="qr_code.png"
          >
            {" "}
            <button>Download</button>
          </a>
        )}
      </div>
    </div>
  );
}


