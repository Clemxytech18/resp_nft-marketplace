import React from 'react'

export const Nav = () => {
    return (
        <div className="nav">
            <div className="nav__logo">
                <img src="/logo.svg"/>
            </div>
            <ul className="nav__links">
                <li className="nav__link">Discover</li>
                <li className="nav__link">About</li>
                <li className="nav__link">Gallery</li>
                <li className="nav__link">Help</li>
            </ul>
        </div>
    )
}
