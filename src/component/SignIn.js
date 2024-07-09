import React, { useEffect, useState } from "react";
import { auth, provider } from "./Firebase";
import { signInWithPopup } from "firebase/auth";
import { Button } from "react-bootstrap";
import App from "../App";

const SignIn = () => {
  const [value, setValue] = useState(null);

  const signInBtn = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setValue(storedEmail);
    }
  }, []);

  useEffect(() => {
    if (value) {
      console.log(value);
    }
  }, [value]);

  return (
    <div>
      {value ? (
        <App />
      ) : (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <Button
            variant="danger"
            onClick={signInBtn}
            className="m-2 py-md-3 px-md-5 rounded-5"
          >
            Sign In With Google
          </Button>
        </div>
      )}
    </div>
  );
};

export default SignIn;
