import React,{useState} from 'react'
import "../styles/s2.css"
const Sidebar3 = () => {
    const [isJoined, setIsJoined] = useState(false);

    const handleGroupButtonClick = () => {
        setIsJoined(prevState => !prevState);
    };
    return (
        <div className="card">
            <div className="input-field">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABUElEQVR4nOWUvUoDURCFvxcILhpBUbBQe8HKwiYGW7FUtDMhRd5ADfEBBHtBsJWAhSiIjRZaqU+gdtoYURt/kKhcOCtTbJa9u7HKgYGdv3Nm7+xe6AbkgQ3gCniVXQJ15TJhXoQ/bewFmMtC3hLRAVAAcrIZ4FC5VhqRfjP5akxdTTXPQJ+PQN1MHiIAyrKevygcqdaJJca1mgqG/M6c/a0RKSrmFp8Y4fHk5FciFuzeBAmFC0+MppoC+eUIgRXleuU/+ghcqKkoP9CxhOQ35ohmFTv3EVhX07aJOcKSzC55R7VrPgJjwDfwAQzF1A0Dn6odxRP7mmwzpmZLNQ1SYFKTvbWZbhx41588QUrsasLjiNyJcm4HqTGoa8ARLZj4krkiBsiIZUM2osU+KbZIh9AQ4Slwpuc9Oog88GB+tHvf2zMJpvTNfwHT/BOqsi7CL/HMbEFq6KbcAAAAAElFTkSuQmCC" alt="location" />
                <input type="text" placeholder="Enter Your Location" id="loc" style={{fontSize:"12px"}} required name="loc" />
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmUlEQVR4nO2SMQrCMBSGv4O4e5g61qnQsUgbj+E97NKeqe6u4gXaSPAFQgY75MUpHzwIGb4//C9Q+DIAb2AGDijTABtgZZ7aISaQ+5k0xDVQyfkWBbw0Ot+AFWijEHffa8itTBhiZCdqchuEnFLEv+S+ljMJdDvya5HbUstffstxR25I5JLr5Z4xp9zxyFFLHLAAd1m22wmFD7JcfTk9HFkUAAAAAElFTkSuQmCC" alt="search" />
            </div>
            <div className="warn">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEWElEQVR4nO1aS28cRRBuC0NAQYBNAhzhiEDAX+AABEgIIPlAePiSLN7t75vpmo2EL2FyJpwiRSJ/gSNPASIICVBMQkguxInJCcgBEW7kIUCgmq1ereRdZx+zuxMrJY00dvdW99dVXV391Th3UzapiMh8CrwowKEAfCzAaiD/DMC14tF38qy1HQrk7uV6fc5VQfLFxdsD+XogPw/Av0L+N+DzjwCfCfAayS0TByAidwjQFOBie1LA1QAcC8ABtUyapg/ritdqtVv10Xf9X2E18m0hv9LfxN8H8reMzHRxJgIiAM8LcKFjVU8Ecu9btdrdg+pK0/QeAfYF4GQbEPBzCjw7bjd6rwPAD4F8uiz9Qu4Q4McOCx0p3Tr7G40HdOI2yF+B5MLCwi2lDuKcU53B+zQAl6O1kyS5vxTlTeAhNbet0tkkSR51Y5YkSR4L5Dkbc03nMJJCktujQgG+z7Jsm5uQLNfrc0J+Y2NfUK8YSpH6Z4c7fddsNre6CUuz2dwqwPHoZkPtmbix1Z30sHNTEu/9vR1udmTwEGsbexJ7oq89g3YA2DHIYVecExqdXEVEyBA3f18uFsj98ZwYNcSGJFkM5Pv27BpFV57ns4E8bXMLG3bWfEdTBe2cef+UG1EEONpxgB4cWV+SPGdR7OKGVtHkLUaIUQcdBxDn3Ew7knq/p/fA5Bfmh3srCsQJ8KblZJ927yAyb2n11WESwEkBWa7X5+yO83fXeUqSvGQDflnGgOMCoiLA1+Y56wNIIN81kx1wVQdCHjQg76xrLK6grWj1QuWBJOY9wAfdBj2vjXqLqzqQ0Gg8YkBW1zcCl4rGEvOqcQHJsmybAfl9XaNGAm3M8/y2qgMhuSXyBJsayKUbxbVIbu/pWptmswv5kcXm3aWGSQXTAvTkRMJvsANRyTNXcZGNDkRjAPVkP+YqLmIpSub9zl6sRZE0KgPoKioiMh+TRpJ3de+khHLL9/aVMWjnDVGAN0rR6f2SbYFPenciXzX3Oll61AKOlqByJgCniugKvLLxVRf4tejo/TNVA5J5v9N0/XLdMoRS+2aVU6OSD+pOZblWnuezApwxIEl/rHvker1PXUUkiwtMnuu7KKT1CbPKZSXHxj7L680nTZ8I5BUDMlgpQ+nJuAJKW7opCVtE+pq51OFhSewTpuD4NEjsRqNxZyBXbEFXhq4zFlkmsBrLCvq3m+zB920sx41c8CkKPWbaghUHHneT2RNrtoDn0zR9sBTFuhrRzYwVDxoOXcmS5/msRqeOjb3SXFq6bxzF0CIA2CCnS6y+zli1+EzHAXp4rLV3rU+0zW6svdKYw3zFUOwD75di2iHmSmVWi/uJaCGmM+Zy1zS9DkCuFx+9xWnYVg5AH33XolEKvFz0afUteIKYdgiQTOULiIIE8H6PEsrFFWDATzg0FVdiUBPAqQDoJkooKxert7ZAfljUHsk/4kc1+i7AT3o9tT67et4nboq78eV/f27mpuVUPk8AAAAASUVORK5CYII=" alt="location" />
                <p>Your location will help us serve better and extend a personalised experience.</p>
            </div>
            <br />
            <div className="warn">
                <img src="./thumb.svg" alt="location" />
                <p style={{ color: 'black', fontSize: "16px" }}>RECOMMENDED GROUPS</p>
            </div>
            <div className="follow">
                <div className="follow-field">
                    <img src="./lei.jpg" alt="chairperson" />
                    <p>Leisure</p>
                    <button>Follow</button>
                </div>
                <div className="follow-field">
                    <img src="./lei2.jpg" alt="chairperson" />
                    <p>Activism</p>
                    <button>Follow</button>
                </div>
                <div className="follow-field">
                    <img src="./lei3.jpg" alt="chairperson" />
                    <p>MBA</p>
                    <button>Follow</button>
                </div>
                <div className="follow-field">
                    <img src="./lei4.jpg" alt="chairperson" />
                    <p>Philosophy</p>
                    <button>Follow</button>
                </div>
            </div>
            <br />
            <div className="see">See More...</div>
            <div className="buttons1" style={{ visibility:"hidden", marginTop:"12px", display: 'flex',gap:"3vw", alignItems: "center", justifyContent: "center" }}>
                <button
                        id="groupButton"
                        className={ 'join-group'} style={{ display: 'flex', alignItems: "center", justifyContent: "center" }}
                        
                    >
                         <img  src="./write.png" alt=""  />
                    </button>   
                    </div>
                    <div className="buttons1" style={{ visibility:"hidden", marginTop:"32px", display: 'flex',gap:"3vw", alignItems: "center", justifyContent: "center" }}>

                    <button
                        id="groupButton"
                        className={isJoined ? 'leave-group' : 'join-group'} style={{ display: 'flex', gap: '10px', alignItems: "center", justifyContent: "center" }}
                        onClick={handleGroupButtonClick}
                    >
                        {isJoined ? <img  src="./Groupjoin.png" alt="" /> : <img  src="./leave.png" alt="" />}
                    </button>          </div>
        </div>
    )
}

export default Sidebar3