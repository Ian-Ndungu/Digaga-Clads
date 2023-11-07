import React, { useState } from "react";
import Login from "./login";
import Admin from "./admin";
import Register from "./Register";
import axios from "axios";

const View = () => {
  const [currentView, setCurrentView] = useState("login");
  const [userLoginError, setUserLoginError] = useState("");
  // State to track user login error message
  const [adminLoginError, setAdminLoginError] = useState(""); 
  // State to track admin login error message

  // State to track if an admin is logged in
  const [isAdminLoggedIn, setAdminLoggedIn] = useState(false);

  const handleAdminLogin = async (adminCredentials) => {
    try {
      const response = await axios.post("http://localhost:8000/admin/login/", adminCredentials);
      if (response.data.success) {
        setAdminLoggedIn(true);
        // If admin is logged in, you can redirect or render admin-specific content
        // For example, you can redirect to an admin dashboard
        // window.location.href = "/admin-dashboard";
      } else {
        // Handle admin login failure and display an error message
        setAdminLoggedIn(false);
        setAdminLoginError("Admin login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error(error);
      setAdminLoggedIn(false);
      setAdminLoginError("An error occurred during admin login. Please try again.");
    }
  };

  const handleUserLogin = async (userCredentials) => {
    try {
      const response = await axios.post("http://localhost:8000/login/", userCredentials);
      if (response.data.success) {
        // Redirect users to the homepage after a successful login
        window.location.href = "/homepage";
      } else {
        // Handle user login failure and display an error message
        setUserLoginError("User login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error(error);
      setUserLoginError("An error occurred during user login. Please try again.");
    }
  };

  return (
    <div className="container">
      {currentView === "login" ? (
        <Login onLogin={handleUserLogin} />
      ) : currentView === "registration" ? (
        <Register />
      ) : (
        <Admin onAdminLogin={handleAdminLogin} />
      )}
      {currentView === "login" ? (
        <><p>
          User Registration{" "}
          <button onClick={() => setCurrentView("registration")}>Here</button>
        </p><p>
            If admin {" "}
            <button onClick={() => setCurrentView("admin")}>Log in</button>
          </p></>
      ) : (
        <p>
          Go to {" "}
          <button onClick={() => setCurrentView("login")}>Login</button>
        </p>
      )}

      {userLoginError && <p className="error-message">{userLoginError}</p>}
      {adminLoginError && <p className="error-message">{adminLoginError}</p>}
    </div>
  );
};

export default View;
