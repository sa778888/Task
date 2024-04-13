import React, { useState } from 'react'
import "../App.css"
const Sidebar = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };
    return (
        <>
            <div className="po">
                <div className="post1" style={{ position: 'relative' }}>
                    <img className="mainimg" src="./sidebar1.jpg" alt="hills" />
                    <div className="text-overlay2" style={{ position: 'absolute', top: 5, left: 20, width: '90%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
                        <p style={{fontWeight:"600"}}>Posts(368)</p>
                        <button style={{ background: "transparent", border: "none" }}
                        >
                            <img className='i1' src="./filter.png" alt="" />                    </button>
                    </div>
                    <div className="post2">
                        <p className="mainhead">✍️ Article</p>
                        <div className="mid">
                            <p className="para1">
                                What if famous brands had regular fonts? Meet RegulaBrands!
                            </p>
                            <button className="but1" onClick={toggleDropdown} >
                                <img src="./options.svg" alt="options" className="options" style={{ visibility: isDropdownVisible ? 'hidden' : 'visible' }} />
                                {isDropdownVisible && (
                                    <div className="dropdown">
                                        <button className="but1" onClick={toggleDropdown}>

                                        </button>
                                        {isDropdownVisible && (
                                            <div className="dropdown-menu">
                                                <ul>
                                                    <li><button className="dropdown-item" type="button">Edit</button></li>
                                                    <li><button className="dropdown-item" type="button">Report</button></li>
                                                    <li><button className="dropdown-item" type="button">Option 3</button></li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </button>
                        </div>
                        <p className="para2">
                            I've worked in UX for the better part of a decade. From now on, I
                            plan to rei...
                        </p>

                        <div className="bot">
                            <div className="botleft">
                                <img className="dp" src="sidebarsm1.jpg" alt="dp" />
                                <p>Siddharth Goyal</p>
                            </div>
                            <div className="botright">
                                <p>1.4k views</p>
                                <button className="but2"><img src="share.png" alt="share" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="po">
                <div className="post1">
                    <img className="mainimg" src="./sidebar2.jpg" alt="hills" />
                    <div className="post2">
                        <p className="mainhead">🔬️ Education</p>
                        <div className="mid">
                            <p className="para1">
                                What if famous brands had regular fonts? Meet RegulaBrands!
                            </p>
                            <button className="but1" onClick={toggleDropdown} >
                                <img src="./options.svg" alt="options" className="options" style={{ visibility: isDropdownVisible ? 'hidden' : 'visible' }} />
                                {isDropdownVisible && (
                                    <div className="dropdown">
                                        <button className="but1" onClick={toggleDropdown}>

                                        </button>
                                        {isDropdownVisible && (
                                            <div className="dropdown-menu">
                                                <ul>
                                                    <li><button className="dropdown-item" type="button">Edit</button></li>
                                                    <li><button className="dropdown-item" type="button">Report</button></li>
                                                    <li><button className="dropdown-item" type="button">Option 3</button></li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </button>
                        </div>
                        <p className="para2">
                            I've worked in UX for the better part of a decade. From now on, I
                            plan to rei...
                        </p>

                        <div className="bot">
                            <div className="botleft">
                                <img className="dp" src="sidebarsm2.jpg" alt="dp" />
                                <p>Sarah West</p>
                            </div>
                            <div className="botright">
                                <p>1.4k views</p>
                                <button className="but2"><img src="share.png" alt="share" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    );

}

export default Sidebar