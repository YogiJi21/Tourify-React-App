import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({ onLogin }) {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isSignup ? 'http://localhost:5000/register' : 'http://localhost:5000/login';
    const body = isSignup ? { username, email, password } : { email, password };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token); // Store the token separately
        localStorage.setItem('user', JSON.stringify({ username: data.username, email: data.email })); // Store user data
        onLogin({ username: data.username, email: data.email }); // Pass only the user data to onLogin
        navigate('/');
      } else {
        // Handle errors (e.g., show error message)
        console.error("Authentication failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="login-background">
      <div className="login">
        <div className="coni">
          <div className={`cardi ${isSignup ? 'cardi-end' : ''}`}>
            <div className="cardi-front">
              <h2>Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="inputbox">
                  <span className="material-symbols-outlined">mail</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=" "
                    required
                  />
                  <label>Email address</label>
                </div>
                <div className="inputbox">
                  <span className="material-symbols-outlined">lock</span>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder=" "
                    required
                  />
                  <label>Password</label>
                </div>
                <button type="submit" className="button-box">Login</button>
              </form>
              <p>
                Don't have an account?{" "}
                <span onClick={() => setIsSignup(true)}>Signup</span>
              </p>
            </div>

            <div className="cardi-back">
              <h2>Signup</h2>
              <form onSubmit={handleSubmit}>
                <div className="inputbox">
                  <span className="material-symbols-outlined"><i className="fa fa-user" aria-hidden="true"></i></span>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder=" "
                    required
                  />
                  <label>Enter Your Name</label>
                </div>
                <div className="inputbox">
                  <span className="material-symbols-outlined">mail</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=" "
                    required
                  />
                  <label>Enter your Email</label>
                </div>
                <div className="inputbox">
                  <span className="material-symbols-outlined"><i className="fa fa-eye-slash" aria-hidden="true"></i></span>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder=" "
                    required
                  />
                  <label>Create a Password</label>
                </div>
                <button type="submit" className="button-box">JOIN US</button>
              </form>
              <p>
                Already have an account?{" "}
                <span onClick={() => setIsSignup(false)}>Login</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
