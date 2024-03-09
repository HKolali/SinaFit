import React, { useState } from 'react'
import { menu } from "../../data"
import { Link } from 'react-router-dom'
import "./Menu.css"

export default function Menu() {

    const [menuItems, setMenuItems] = useState(menu);

    const clickHandler = (selectedId) => {
        menuItems.map(menuItem => {
            if (menuItem.id === selectedId) {
                menuItem.isActive = true;
            } else {
                menuItem.isActive = false;
            }
        })

        setMenuItems(menuItems)
    }

    return (
        <div className='MenuContainer'>
            <img className='logo' src="./image/logo-2.png" alt="logo" />
            <div className="menuWrapper">
                {
                    menuItems.map(menuItem => (
                        <Link to={menuItem.to} className='link' onClick={() => clickHandler(menuItem.id)}>
                            <div key={menuItem.id} className={`menuItem ${menuItem.isActive ? 'active' : ''}`} >
                                <span className="menuTitle">{menuItem.title}</span>
                                <img src={menuItem.icon} className="menuIcon" />
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
