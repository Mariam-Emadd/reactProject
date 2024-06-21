
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import styles from "./NavBar.module.css";
import logo from '../Asset/logo.png'
import axios from "axios";

function MyNavBar() {
   const [isActive, setIsActive] = useState(false);
   const toggleActiveClass = () => {
     setIsActive(!isActive);
   };
   const removeActive = () => {
     setIsActive(false);
   };
 const navigate = useNavigate();
   
  const logout = async () => {
    try {
      // Optionally, you can send a request to your server to invalidate the token
      await axios.post('http://findereg.me/api/logout', {}, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken') || sessionStorage.getItem('authToken')}`
        }
      });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error('Session expired or unauthorized');
      } else {
        console.error('An error occurred during logout', error);
      }
    } finally {
      // Clear local storage and session storage
      localStorage.removeItem('authToken');
      localStorage.removeItem('email');
      sessionStorage.removeItem('authToken');
      sessionStorage.removeItem('email');

      // Redirect to the login page
      navigate('/login');
    }
  
   };


  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          {/* logo */}{" "}
          <div className="logo-container">
            <img
              src={logo}
              alt="logo"
              className="logo-img"
              style={{ width: "15%", marginBottom: "15px" }}
            />
            <Link to="/" className={`${styles.logo}`}>
              Finder{" "}
            </Link>
          </div>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
            <li onClick={removeActive}>
              <Link to="/" className={`${styles.navLink}`}>
                Home
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/compare" className={`${styles.navLink}`}>
                Insert photo
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/collected" className={`${styles.navLink}`}>
                Help a child
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/scan" className={`${styles.navLink}`}>
                Qr code
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/about" className={`${styles.navLink}`}>
                About us
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/share" className={`${styles.navLink}`}>
                Share App
              </Link>
            </li>
          </ul>
          <div>
            {!window.localStorage.getItem("email") ? (
              <>
                <Link
                  to="/register"
                  style={{
                    textAlign: "center",
                    backgroundColor: "#062b60",
                    color: "white",
                  }}
                  className=" submit btn w-100 rounded-2"
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  style={{
                    textAlign: "center",
                    backgroundColor: "#062b60",
                    color: "white",
                    margin: "2px",
                  }}
                  className="submit btn w-100 rounded-2"
                >
                  Login
                </Link>{" "}
              </>
            ) : (
              <div
                className="submit btn w-100 rounded-2"
                style={{
                  textAlign: "center",
                  backgroundColor: "#062b60",
                  color: "white",
                  margin: "2px",
                  paddingLeft: "40px",
                  paddingRight: "40px",
                }}
                onClick={logout}
              >
                Logout
              </div>
            )}
          </div>
          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
            onClick={toggleActiveClass}
          >
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default MyNavBar;




// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate from react-router-dom
// import styles from "./NavBar.module.css";
// import logo from "../Asset/logo.png";
// import axios from "axios";

// function MyNavBar() {
//   const [isActive, setIsActive] = useState(false);
//   const navigate = useNavigate(); // Use navigate for navigation
//   const isLoggedIn = !!window.localStorage.getItem("email");

//   const toggleActiveClass = () => {
//     setIsActive(!isActive);
//   };

//   const removeActive = () => {
//     setIsActive(false);
//   };

//   const handleLogout = async () => {
//     const authToken = window.localStorage.getItem("token");

//     if (!authToken) {
//       navigate("/");
//       return;
//     }

//     try {
//       await axios.post(
//         "http://findereg.me/api/logout",
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${authToken}`,
//           },
//         }
//       );

//       window.localStorage.removeItem("token");
//       window.localStorage.removeItem("email");
//       navigate("/");
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   };
                     
//   return (
//     <div className="App">
//       <header className="App-header">
//         <nav className={styles.navbar}>
//           <div className="logo-container">
//             <img
//               src={logo}
//               alt="logo"
//               className="logo-img"
//               style={{ width: "15%", marginBottom: "15px" }}
//             />
//             <Link to="/" className={styles.logo}>
//               Finder
//             </Link>
//           </div>
//           <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
//             <li onClick={removeActive}>
//               <Link to="/" className={styles.navLink}>
//                 Home
//               </Link>
//             </li>
//             <li onClick={removeActive}>
//               <Link to="/compare" className={styles.navLink}>
//                 Insert photo
//               </Link>
//             </li>
//             <li onClick={removeActive}>
//               <Link to="/scan" className={styles.navLink}>
//                 Qr code
//               </Link>
//             </li>
//             <li onClick={removeActive}>
//               <Link to="/about" className={styles.navLink}>
//                 About us
//               </Link>
//             </li>
//             <li onClick={removeActive}>
//               <Link to="/share" className={styles.navLink}>
//                 Share App
//               </Link>
//             </li>
//           </ul>
//           <div>
//             {!isLoggedIn ? (
//               <>
//                 <Link
//                   to="/register"
//                   style={{
//                     textAlign: "center",
//                     backgroundColor: "#062b60",
//                     color: "white",
//                   }}
//                   className="submit btn w-100 rounded-2"
//                 >
//                   Register
//                 </Link>
//                 <Link
//                   to="/login"
//                   style={{
//                     textAlign: "center",
//                     backgroundColor: "#062b60",
//                     color: "white",
//                     margin: "2px",
//                   }}
//                   className="submit btn w-100 rounded-2"
//                 >
//                   Login
//                 </Link>
//               </>
//             ) : (
//               <Link
//                 to="/"
//                 style={{
//                   textAlign: "center",
//                   backgroundColor: "#062b60",
//                   color: "white",
//                   margin: "2px",
//                 }}
//                 className="submit btn w-100 rounded-2"
//                 onClick={handleLogout}
//               >
//                 Logout
//               </Link>
//             )}
//           </div>
//           <div
//             className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
//             onClick={toggleActiveClass}
//           >
//             <span className={styles.bar}></span>
//             <span className={styles.bar}></span>
//             <span className={styles.bar}></span>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// }

// export default MyNavBar;

