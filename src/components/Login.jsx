import React from 'react'
import "../styles/login1.css"
const Login = ({ onClose }) => {
    return (
        // <div className='login-popup'>
        //      <div className="close-icon" onClick={onClose}>X</div> 
        //   <p className="mainpara">
        //     Let's learn, share &amp; inspire each other with our passion for computer
        //     engineering. Sign up now 🤘🏼
        //   </p>
        //   <div className="side">
        //     <div className="side1">
        //       <h3 className="Signhead">Create account</h3>
        //       <form action="#" className="form1">
        //         <input type="text" name="fname" id="fname" placeholder="First Name" />
        //         <input type="text" name="lname" id="lname" placeholder="Last Name" />
        //         <input type="email" name="em" id="em" placeholder="Email" />
        //         <input type="password" name="pw" id="pw" placeholder="Password" />
        //         <input
        //           type="password"
        //           name="cpw"
        //           id="cpw"
        //           placeholder="Confirm password"
        //         />
        //         <button className="submit">Create Account</button>
        //       </form>
        //       <button className="button1">Sign Up with Facebook</button><br />
        //       <button className="button1">Sign Up with Google</button>
        //     </div>
        //     <div className="side2">
        //       <p className="para1">Already have an account? <a href="#">Sign In</a></p>
        //       <img src="WhatsApp Image 2024-04-13 at 11.26.06 AM.jpeg" alt="" />
        //       <footer>
        //         By signing up, you agree to our Terms & conditions, Privacy policy
        //       </footer>
        //     </div>
        //   </div>
        // </div>
        <div className="center-container">
            <div className='login-popup1'>
                <button className="close-btn" onClick={onClose}><img style={{ width: "1rem" }} src="./cross.png" alt="close" /></button>

                <p className="mainpara">
                    Let's learn, share &amp; inspire each other with our passion for computer engineering. Sign up now 🤘🏼
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
                        <p className="para1">Already have an account? <a href="#">Sign In</a></p>
                        <img src="./item.jpeg" alt="" />
                        <footer>
                            By signing up, you agree to our Terms & conditions, Privacy policy
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login