import React, { useState } from 'react';
import Login from "./Login"; // Import the Login component
import "../styles/login.css"
import "../App.css"
const Navbar = () => {
  const [isLoginVisible, setLoginVisible] = useState(false);
  const showLogin = () => {
    setLoginVisible(true);
  };

  const hideLogin = () => {
    setLoginVisible(false);
  };

  return (
    <div className='hd'>
      <div className='nav'>
        <div><img src="./group.png" alt="" /></div>
        <div className='in1' ><div className='search'><button className='btn1'><img alt="Search" src="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-search-24px'%20clip-path='url(%23clip0_1_1172)'%3e%3cpath%20id='Vector'%20d='M14.2083%2012.8333H13.4842L13.2275%2012.5858C14.1258%2011.5408%2014.6667%2010.1842%2014.6667%208.70833C14.6667%205.4175%2011.9992%202.75%208.70833%202.75C5.4175%202.75%202.75%205.4175%202.75%208.70833C2.75%2011.9992%205.4175%2014.6667%208.70833%2014.6667C10.1842%2014.6667%2011.5408%2014.1258%2012.5858%2013.2275L12.8333%2013.4842V14.2083L17.4167%2018.7825L18.7825%2017.4167L14.2083%2012.8333ZM8.70833%2012.8333C6.42583%2012.8333%204.58333%2010.9908%204.58333%208.70833C4.58333%206.42583%206.42583%204.58333%208.70833%204.58333C10.9908%204.58333%2012.8333%206.42583%2012.8333%208.70833C12.8333%2010.9908%2010.9908%2012.8333%208.70833%2012.8333Z'%20fill='%237A7A7A'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1172'%3e%3crect%20width='22'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
        /></button>
        </div>
          <input className='input1' placeholder='Search for your favourite groups in ATG' type="text" /></div>
        <div className='in'>
          <div className='nav2'>
            <button className='btn2' onClick={showLogin}>create Account </button>
            <span className='text1'>It's Free!</span>
          </div>
          <img className='dropd' src="./dropdown.png" alt="" />
        </div>
      </div>
      {isLoginVisible && <Login onClose={hideLogin} className="login-popup"/>}
    </div>
  )
}

export default Navbar