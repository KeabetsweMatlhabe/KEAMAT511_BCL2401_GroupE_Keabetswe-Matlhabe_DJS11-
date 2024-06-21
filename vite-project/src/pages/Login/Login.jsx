import React from "react"
import "./login.css"
import app_logo from "../../assets/app_logo.png"

const Login = () => {
  return (
    <div className="Login">
      <img src={app_logo} className= "login-logo" alt="" />
      <div className="login-form">
        <h1>Log In</h1>
        <form>
          <input  type="text" placeholder="Your name"/>
          <input  type="email" placeholder="Email"/>
          <input  type="password" placeholder="password"/>
          <button>Log In</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox"/>
              <label htmlFor="Remember Me"></label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Login
