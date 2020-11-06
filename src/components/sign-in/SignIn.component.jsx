import React, { useState } from "react";
import "./SignIn.styles.scss";

import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";

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

        <CustomButton type="submit">Sign in</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
