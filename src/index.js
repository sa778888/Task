import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Exp from './components/Exp';
import Sidebar from './components/Sidebar';
import Sidebar2 from './components/Sidebar2';
import Sidebar3 from './components/Sidebar3';
import Login from './components/Login'; // Import the Login component
import Login2 from './components/Login2';

function App() {
  const [isLoginVisible, setLoginVisible] = useState(false); // State to manage the visibility of the Login component

  // Function to handle showing the Login component
  const showLogin = () => {
    setLoginVisible(true);
  };

  // Function to handle hiding the Login component
  const hideLogin = () => {
    setLoginVisible(false);
  };

  return (
    <React.StrictMode>
      <Navbar />
      <Hero />
      <div className='ex' style={{ backgroundColor: "white" }}>
        <div style={{ width: "80%", display: "flex", marginLeft: "15vw" }}>
          <Exp />
        </div>
      </div>
      <div className='sec1' style={{ display: "flex", position: "relative" }}>
        <div className='sec' style={{ width: "50%", marginLeft: "15vw" }}>
          <Sidebar />
          <Sidebar2 />
        </div>
        <div className='sd3' style={{ width: "20%", marginRight: "0vw" }}>
          <Sidebar3 />
        </div>
        <button className='down' onClick={showLogin}>
          <img src='./down.png' style={{ position: "fixed", bottom: "0", right: "0", padding: "5px" }} alt='down'></img>
        </button>
        {isLoginVisible && <Login2 onClose={hideLogin} />} {/* Render the Login component if isLoginVisible is true */}
      </div>
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();
