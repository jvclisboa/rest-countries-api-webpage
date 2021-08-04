import React from 'react'
import { HiOutlineMoon } from "react-icons/hi";
import './Header.scss'

const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="header-child">
                    <h3>Where in the world?</h3>
                </div>
                <div className="header-child">
                    <span id="moon-icon"><HiOutlineMoon /></span> 
                    <p>Dark Mode</p>
                </div>
            </header>
        </div>
    )
}

export default Header
