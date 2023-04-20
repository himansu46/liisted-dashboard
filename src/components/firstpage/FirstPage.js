import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import "./Firstpage.css";
import { Link } from "react-router-dom";
export default function FirstPage() {
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleForm = () => {
    setShowSignUp(!showSignUp);
  };

  const onGoogleSuccess = (response) => {
    const { name, email, imageUrl } = response.profileObj;
    console.log(`Welcome, ${name} (${email})!`);
    console.log(`Profile picture: ${imageUrl}`);
  };

  const onGoogleFailure = (error) => {
    console.error("Google authentication failed:", error);
  };
  return (
    <div className="split">
      <div className="lefter">
        <h1 className="board">Board.</h1>
      </div>
      <div className="righter">
        <center>
          <div className="register">
            <h2 style={{ marginRight: "100px" }}>
              {showSignUp ? "Register" : "Sign In"}
            </h2>
            <h5 style={{ margin: "10px" }}>Sign In to your account</h5>
            <GoogleLogin
              clientId="783369979825-o2lrcdg86e32lpg45mriubau3va4tvg2.apps.googleusercontent.com"
              buttonText={
                showSignUp ? "Sign Up with Google" : "Login with Google"
              }
              onSuccess={onGoogleSuccess}
              onFailure={onGoogleFailure}
              cookiePolicy={"single_host_origin"}
            />
            <form style={{ margin: "10px" }}>
              <label>
                Email Adress:
                <br />
                <input type="email" />
              </label>
              <br />
              <label>
                Password:
                <br />
                <input type="password" />
              </label>
              <br />

              {!showSignUp && <p>Forget Password?</p>}
              {showSignUp && (
                <label>
                  Confirm Password:
                  <br />
                  <input type="password" />
                  <br />
                </label>
              )}

              <Link to="/dashboard">
                <button
                  className="btn btn-dark lg"
                  style={{
                    margin: "10px",
                    paddingLeft: "100px",
                    paddingRight: "100px",
                  }}
                  type="submit"
                >
                  {showSignUp ? "Sign Up" : "Sign In"}
                </button>
              </Link>
            </form>
            <div>
              <span>
                {showSignUp
                  ? "Already have an account?"
                  : "Dont have an account?"}
              </span>
              <button
                className="btn btn-dark"
                style={{ margin: "10px" }}
                onClick={toggleForm}
              >
                {showSignUp ? "Sign In" : "Register Here"}
              </button>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}
