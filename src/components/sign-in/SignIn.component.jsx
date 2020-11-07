import React, { useState } from "react";
import "./SignIn.styles.scss";

import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => {
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = event => {
    event.preventDefault();

    setState({ email: "", password: "" });
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setState({ ...state, [name]: value });
    console.log(state);
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput name="email" type="email" value={state.email} handleChange={handleChange} label="email" required />

        <FormInput name="password" type="password" value={state.password} handleChange={handleChange} label="password" required />

        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>

          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
