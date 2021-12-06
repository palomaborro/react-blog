import React from "react";
import "./RegisterPage.scss";

export default function RegisterPage() {
  return (
    <div className="RegisterPage">
      <span className="RegisterPage__title">Register</span>
      <form className="RegisterPage__form">
        <label>Username</label>
        <input type="text" placeholder="Enter your username" />
        <label>Email</label>
        <input type="text" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        <button className="RegisterPage__form__RegisterButton">Register</button>
      </form>
      <button className="RegisterPage__loginButton">Login</button>
    </div>
  );
}
