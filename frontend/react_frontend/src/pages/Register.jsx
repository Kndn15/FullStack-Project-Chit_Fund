import React, {  useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        // Handle registration logic here
        console.log("Username:",username);
        console.log("Email:",email);
        console.log("Password:",password);
        // Reset form fields
        setUsername("");
        setEmail("");
        setPassword("");    
    }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="text-center mb-4">Register</h2>
               <p className="text-center mb-4">
                Please fill in the form to create an account.
              </p>
              <form onSubmit={handleSubmit}>
                {/* Username Row */}
                <div className="row mb-3 align-items-center">
                  <label htmlFor="username" className="col-sm-3 col-form-label">
                    Username
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter username"
                      value={username}
                      onChange={(e)=>setUsername(e.target.value)}
                    />
                  </div>
                </div>

                {/* Email Row */}
                <div className="row mb-3 align-items-center">
                  <label htmlFor="email" className="col-sm-3 col-form-label">
                    Email
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email"
                      value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* Password Row */}
                <div className="row mb-4 align-items-center">
                  <label htmlFor="password" className="col-sm-3 col-form-label">
                    Password
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter password"
                      value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
              </form>

              <p className="text-center mt-3">
                Already have an account? <Link to="/">Login here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
