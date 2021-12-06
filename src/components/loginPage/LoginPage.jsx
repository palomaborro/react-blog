import React from "react";
import "./LoginPage.scss";

export default function LoginPage() {
  return (
    <div className="LoginPage">
      <span className="LoginPage__title">Login</span>
      <form className="LoginPage__form">
        <label>Email</label>
        <input type="text" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        <button className="LoginPage__form__loginButton">Login</button>
      </form>
      <button className="LoginPage__registerButton">Register</button>
    </div>
  );
}
