import React,{useState} from 'react'
import "../styles/sidebar.css"
const Sidebar2 = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };
    return (
        <div>
        <div className="custom-po">
            <div className="custom-post1">
                <img className="custom-mainimg" src="./sidebar2a.jpg" alt="hills" />
                <div className="custom-post2">
                    <p className="custom-mainhead">🗓️ Meetup</p>
                    <div className="custom-mid1">
                        <p className="custom-para1">
                            Finance & Investment Elite Social Mixer @Lujiazui
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
                    <div className="custom-mid2">
                        <div className="custom-mid21">
                            <img src="cal.svg" alt="cal" />
                            <p>Fri, 12 Oct, 2018</p>
                        </div>
                        <div className="custom-mid21">
                            <img src="loc.svg" alt="cal" />
                            <p>Ahmedabad, India</p>
                        </div>
                    </div>
                    <button className="custom-but3">
                        <p>Visit Website</p>
                    </button>
                    <div className="custom-bot">
                        <div className="custom-botleft">
                            <img className="custom-dp" src="p1.JPG" alt="dp" />
                            <p>Ronal Jones</p>
                        </div>
                        <div className="custom-botright">
                            <p>1.4k views</p>
                            <button className="custom-but2"><img src="share.png" alt="share" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="custom-po">
            <div className="custom-post1">
                <div className="custom-post2">
                    <p className="custom-mainhead">💼️ Job</p>
                    <div className="custom-mid1">
                        <p className="custom-para1">
                        Software Developer
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
                    <div className="custom-mid2">
                        <div className="custom-mid21">
                            <img src="suit.svg" alt="cal" />
                            <p>Innovaccer Analytics Private Ltd.</p>
                        </div>
                        <div className="custom-mid21">
                            <img src="loc.svg" alt="cal" />
                            <p>Noida, India</p>
                        </div>
                    </div>
                    <button className="custom-but3">
                        <p>Apply on Timejobs</p>
                    </button>
                    <div className="custom-bot">
                        <div className="custom-botleft">
                            <img className="custom-dp" src="s2.JPG" alt="dp" />
                            <p>Joseph Gray</p>
                        </div>
                        <div className="custom-botright">
                            <p>1.4k views</p>
                            <button className="custom-but2"><img src="share.png" alt="share" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Sidebar2