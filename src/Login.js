import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png"
          alt=""
        />
        <h1>MessageApp</h1>
      </div>
      <Button onClick={signIn} variant="contained">
        Sign in
      </Button>
    </div>
  );
};

export default Login;
