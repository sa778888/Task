import React, { useState, useEffect } from 'react';
import "../App.css"
function Exp() {
    const [isJoined, setIsJoined] = useState(false);

    const [isSticky, setIsSticky] = useState(false);
    const handleGroupButtonClick = () => {
        setIsJoined(prevState => !prevState);
    };

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            const topThreshold = 460;
            setIsSticky(offset > topThreshold);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={isSticky ? 'sticky' : ''}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className='' style={{ width: '100%', padding: '0px 0px', borderBottom: '1px solid rgb(102, 101, 101)', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <div className="navi">
                        <ul style={{ display: 'flex', gap: '2px', textDecoration: 'none', listStyle: 'none' }}>
                            <li className='exp1' style={{ padding: '5px', transition: '100ms ease-in-out', borderBottom: '2px solid black', fontWeight: '600' }}>All Posts(32)</li>
                            <li style={{ opacity: '0.5', padding: '5px', transition: '100ms ease-in-out' }}>Article</li>
                            <li style={{ opacity: '0.5', padding: '5px', transition: '100ms ease-in-out' }}>Event</li>
                            <li style={{ opacity: '0.5', padding: '5px', transition: '100ms ease-in-out' }}>Education</li>
                            <li style={{ opacity: '0.5', padding: '5px', transition: '100ms ease-in-out' }}>Job</li>
                        </ul>
                    </div>
                    <div className="buttons" style={{ marginLeft: "20vw", display: 'flex', gap: "3vw", alignItems: "center", justifyContent: "center" }}>
                        <button
                            id="groupButton"
                            className={'join-group'} style={{ display: 'flex', alignItems: "center", justifyContent: "center" }}

                        >
                            <img src="./write.png" alt="" />
                        </button>

                        <button
                            id="groupButton"
                            className={isJoined ? 'leave-group' : 'join-group'} style={{ display: 'flex', gap: '10px', alignItems: "center", justifyContent: "center" }}
                            onClick={handleGroupButtonClick}
                        >
                            {isJoined ? <img src="./Groupjoin.png" alt="" /> : <img src="./leave.png" alt="" />}
                        </button>          </div>
                </div>
            </div>
        </div>

    );
}

export default Exp;
