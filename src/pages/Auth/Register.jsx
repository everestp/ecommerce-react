import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
    const navigate =useNavigate()
  return (
    <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
      <div className="card shadow-lg w-100" style={{ maxWidth: "480px" }}>
        <div className="card-body">
          <div className="text-center">
            <h4> <span
             style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#007BFF',
                fontFamily: "Pacifico",
                margin: "15px"
              
              }}
            
            
            >carten</span> </h4>
            <h1 className="card-title h3">Register Here...</h1>
            <p className="card-text text-muted">Sign in below to access your account</p>
          </div>
          <div className="mt-4">
            <form onSubmit={()=>{navigate('/explore')}}>
            <div className="mb-4">
                <label htmlFor="email" className="form-label text-muted">Full Name</label>
                <input
                  type="name"
                  className="form-control"
                  id="name"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label text-muted">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label text-muted">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="conpassword" className="form-label text-muted">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="conpassword"
                  placeholder="Retype Password"
                  required
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-dark btn-lg">Sign up</button>
              </div>
              <p className="text-center text-muted mt-4">
               ALready Have account?{" "}
               <Link to={'/login'}>Sign in</Link>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;