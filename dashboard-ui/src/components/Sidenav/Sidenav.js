import React from 'react';
import './Sidenav.css';

function Sidenav() {

const navItems = [
    {
        icon : "../images/icons/monitor.png",
        hoverIcon : "../images/icons/monitor-overlay.png",
        text : "Menu Option 1"
    },
    {
        icon : "../images/icons/icon2.png",
        hoverIcon : "../images/icons/icon2-overlay.png",
        text : "Menu Option 2"
    },
    {
        icon : "../images/icons/library.png",
        hoverIcon : "../images/icons/library.png",
        text : "Menu Option 3"
    },
    {
        icon : "../images/icons/icon4.png",
        hoverIcon : "../images/icons/icon4-overlay.png",
        text : "Menu Option 4"
    },
    {
        icon : "../images/icons/icon5.png",
        hoverIcon : "../images/icons/icon5-overlay.png",
        text : "Menu Option 5"
    },
    {
        icon : "../images/icons/icon6.png",
        hoverIcon : "../images/icons/icon6-overlay.png",
        text : "Menu Option 6"
    }
]

    return(
        <div className="sidenav">
            <ul>
                {
                    navItems.map((item, index) => {
                        return(
                            <li key={index} className={`icon${index} sidenav-item`} style={{backgroundImage: `url(${item.icon})`}}>
                                {item.text}
                            </li>
                        )
                    })
                }
            </ul>
            <div className="sidenav-bottom-elements">
                <ul >
                    <li className="sidenav-item icon7" style={{backgroundImage: "url('../images/icons/diamond.png')"}}>
                        Menu Option 7
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Sidenav;