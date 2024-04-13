import React,{useState} from 'react'
import "../App.css"
const Hero = () => {
    const [isJoined, setIsJoined] = useState(false);

    const handleGroupButtonClick = () => {
        setIsJoined(prevState => !prevState);
    };
    return (
        <div className='container'>
            <img className='hero' src="./hero.png" alt="" />
            <div className="text-overlay1" style={{ position: 'absolute', top: 30, left: 80, display: 'flex', justifyContent: 'space-between', width: '80%' }}>
                <img className='img1' src="./arrow.svg" alt="" />
                <button className='as' style={{background:"transparent",border:"none"}}                             onClick={handleGroupButtonClick}
>
                    {isJoined ? <img className='img2' src="./join2.png" alt="" /> : <img src="./leave2.png" alt="" />}
                    </button>
            </div>
            <div class="text-overlay">
                <h1>Computer Engineering
                </h1>
                <p>142,765 Computer Engineers follow this</p>
            </div>
        </div>
    )
}

export default Hero