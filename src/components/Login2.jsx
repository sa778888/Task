import React, { useState } from 'react';
import "../styles/login.css";

const Login2 = ({ onClose }) => {
    const [isCreateAccountPage, setIsCreateAccountPage] = useState(true);

    const togglePage = () => {
        setIsCreateAccountPage(prevState => !prevState);
    };
    return (
        <>
            <div className='body' style={{ display: isCreateAccountPage ? 'block' : 'none' }}>
                <div className="form-container">
                    <div className="form-header">
                        <h2>Create Account</h2>
                        <button className="close-btn" onClick={onClose}><img className='cross' src="./cross.png" alt="" /></button>
                    </div>
                    <form className='for' action="#" method="post">
                        <div className="form-row">
                            <div className="form-group">
                                <input type="text" placeholder="First Name" name="first-name" required />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Last Name" name="last-name" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email" name="email" required />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Password" name="password" required />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Confirm Password" name="confirm-password" required />
                        </div>
                        <div className="form-group">
                            <div className="button-container">
                                <button type="button" className="create-account-btn" onClick={togglePage}>Create Account</button>
                                <button type="button" style={{ border: "none", backgroundColor: "white", color: "blue" }} onClick={togglePage}>Sign In</button>
                            </div> </div>
                        <div className="form-group">
                            <button type="button" className="google-signup-btn">
                                <img src="./google.png" style={{ width: "1rem" }} alt="Google Logo" /> Sign up with Google
                            </button>
                            <button type="button" className="facebook-signup-btn" style={{ marginTop: "10px" }}><img src="./fb.png" style={{ width: "1rem" }} alt="Google Logo" /> Sign up with Facebook</button>
                        </div>
                        <div className="terms">
                            <p>By signing up, you agree to our <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>.</p>
                        </div>
                    </form>
                </div>
            </div>
            {/* signin */}
            <div className='body' style={{ display: isCreateAccountPage ? 'none' : 'block' }}>
                <div className="form-container">
                    <div className="form-header">
                        <h2>Welcome Back</h2>
                        <button className="close-btn" onClick={onClose}><img className='cross' src="./cross.png" alt="" /></button>
                    </div>
                    <form className='for' action="#" method="post">

                        <div className="form-group">
                            <input type="email" placeholder="Email" name="email" required />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Password" name="password" required />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Confirm Password" name="confirm-password" required />
                        </div>
                        <div className="form-group">
                            <div className="button-container">
                                <button type="button" className="create-account-btn" onClick={togglePage}>Sign In</button>
                                <button type="button" style={{ border: "none", backgroundColor: "white", color: "blue" }} onClick={togglePage}>Create Account</button>
                            </div> </div>
                        <div className="form-group">
                            <button type="button" className="google-signup-btn">
                                <img src="./google.png" style={{ width: "1rem" }} alt="Google Logo" /> Sign up with Google
                            </button>
                            <button type="button" className="facebook-signup-btn" style={{ marginTop: "10px" }}><img src="./fb.png" style={{ width: "1rem" }} alt="Google Logo" /> Sign up with Facebook</button>
                        </div>
                        <div className="terms">
                            <p>By signing up, you agree to our <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>.</p>
                        </div>
                    </form>
                </div>
            </div> </>
    );
}

export default Login2;
