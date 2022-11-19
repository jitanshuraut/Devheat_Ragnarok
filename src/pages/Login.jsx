import React, { useState } from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate();
  const [username, setusername] = useState("")
  const provider = new GoogleAuthProvider();
  console.log("yes")
  const signInWithGoogle = () => {


    signInWithPopup(auth, provider)
      .then((result) => {
        // setUser({
        //     name: result.user.displayName,
        //     email: result.user.email,
        //     url: result.user.photoURL
        // })

        sessionStorage.setItem("name", result.user.displayName)
        sessionStorage.setItem("email", result.user.email)
        sessionStorage.setItem("url", result.user.photoURL)

        navigate("/loading");
      })
      .catch((error) => {
        console.log(error);
      });

  };


  return (
    <>

{/* <h1  onClick={()=>{signInWithGoogle()}}>click me</h1> */}
  
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form className="sign-in-form">
              <h2 className="title" onClick={()=>{signInWithGoogle()}}>Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="btn solid" />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="" className="social-icon"onClick={()=>{signInWithGoogle()}}>
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
            <form className="sign-up-form">
              <h2 className="title" onClick={()=>{signInWithGoogle()}}>Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="btn" value="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="" className="social-icon" onClick={()=>{signInWithGoogle()}}>
                  <i className="fab fa-google" ></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Enter your details and start your journey with us
              </p>
              <button className="btn transparent" id="sign-up-btn"onClick={()=>{signInWithGoogle()}}>
                Sign up
              </button>
            </div>
            <img src="https://raw.githubusercontent.com/Aerin2805/awesome-login-pages/4cbd3b38490e50478c181219c365875cb676ca37/login-form-v34/img/log.svg" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="btn transparent" id="sign-in-btn">
                Sign in
              </button>
            </div>
            <img src="https://raw.githubusercontent.com/Aerin2805/awesome-login-pages/4cbd3b38490e50478c181219c365875cb676ca37/login-form-v34/img/register.svg" className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login