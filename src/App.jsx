import "./App.css";
// import MySignUp from "./website/Auth/MySignup";
import Home from "./pages/Home";
// import MyLogin from "./website/Auth/MyLogin";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./Components/Dashboard.css";
import Users from "./pages/Users";
import "./index.css";
import Aboutus from "./pages/Aboutus";
import Comparephoto from "./pages/Comparephoto";
import Shareapp from "./pages/Shareapp";
import Qrcode from "./pages/Qrcode";
import Form from './website/Auth/Form'
import FormSign from './website/Auth/FormSign'
import { useContext, useEffect } from "react";
import { User } from "./website/context/context";
import PrivateRoute from "./website/PrivateRoute";
import HelpAchild from "./pages/HelpAchild";
import ResetPass from "./website/Auth/ResetPass";
import { HashRouter, Route, Switch } from 'react-router-dom';

function App() {
   const { setAuth } = useContext(User);

   useEffect(() => {
     const token =
       localStorage.getItem("token") || sessionStorage.getItem("token");
     const email =
       localStorage.getItem("email") || sessionStorage.getItem("email");

     if (token && email) {
       setAuth({ token, email });
     }
   }, [setAuth]);
  return (
    <HashRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Form />} />
        <Route path="/reset" element={<ResetPass />} />
        <Route path="/register" element={<FormSign />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/compare" element={<Comparephoto />} />
        <Route path="/share" element={<Shareapp />} />
        <Route path="/scan" element={<Qrcode />} />
        <Route path="/collected" element={<HelpAchild />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="users" element={<Users />} />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
