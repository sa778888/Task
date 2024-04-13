import React, { useState } from 'react';
import "../styles/login1.css";

const SignUp = ({ onClose }) => {
    const [showSignIn, setShowSignIn] = useState(false);

    const toggleSignIn = () => {
        setShowSignIn(!showSignIn);
    };

    return (
        <div className="login-popup" onClick={onClose}>
            <div className='login-popup1' onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>
                    <img style={{ width: "2rem" }} src="./cross.png" alt="close" />
                </button>

                <p className="mainpara">
                    Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                </p>
                <div className="side">
                    <div className="side1">
                        <h3 className="Signhead">Create account</h3>
                        <form action="#" className="form1">
                            <input type="text" name="fname" id="fname" placeholder="First Name" />
                            <input type="text" name="lname" id="lname" placeholder="Last Name" />
                            <input type="email" name="em" id="em" placeholder="Email" />
                            <input type="password" name="pw" id="pw" placeholder="Password" />
                            <input type="password" name="cpw" id="cpw" placeholder="Confirm password" />
                            <button className="submit">Create Account</button>
                        </form>
                        <button className="button1">
                            <img src="./google.png" className="icon1" alt="" />Sign Up with Facebook
                        </button><br />
                        <button className="button1">
                            <img className="icon1" src="./fb.png" alt="" />Sign Up with Google
                        </button>
                    </div>
                    <div className="side2">
                        <p className="para1">Already have an account? <button className="signInLink" style={{border:"none",color:"blue",fontSize:"1.5rem",backgroundColor:"transparent"}} onClick={toggleSignIn}>Sign In</button></p>
                        <img src="./item.jpeg" alt="" />
                        <footer>
                            By signing up, you agree to our Terms & conditions, Privacy policy
                        </footer>
                    </div>
                </div>
            </div>
            {showSignIn && <SignIn onClose={onClose} />}
        </div>
    );
}

const SignIn = ({ onClose }) => {
    return (
        <div className="login-popup">
            <div className='login-popup1'>
                <button className="close-btn" onClick={onClose}>
                    <img style={{ width: "2rem" }} src="./cross.png" alt="close" />
                </button>

                <p className="mainpara">
                    Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                </p>
                <div className="side">
                    <div className="side1">
                        <h3 className="Signhead">Sign In</h3>
                        <form action="#" className="form1">
                            <input type="password" name="em" id="em" placeholder="Password" />
                            <input type="password" name="pw" id="pw" placeholder="Confirm Password" />

                            <input type="email" name="zwd" style={{width:"23.5vw"}} id="zpwd" placeholder="Email " />
                        </form>
                            <button className="submit" style={{marginLeft:"1rem"}}>Sign In</button>
                        <button className="button1">
                            <img src="fb.png" className="icon1" alt="" />Sign Up with Facebook
                        </button><br />
                        <button className="button1">
                            <img className="icon1" src="./google.png" alt="" />Sign Up with Google
                        </button>
                        <p className="foot1"><a href="#">forgot password</a></p>
                    </div>
                    <div className="side2">
                        <p className="para1">Dont have an account? <button className="signInLink" style={{border:"none",color:"blue",fontSize:"1.5rem",backgroundColor:"transparent"}} onClick={onClose}>Sign Up</button></p>
                        <img src="item.jpeg" alt="" />
                        <p className="para2">
                            By signing up, you agree to our Terms & conditions, Privacy policy
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
