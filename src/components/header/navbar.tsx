import { useState } from 'react'
import './navbar.css';
function NavBar() {
    return (
        <div>
            <nav className='top'>
                <ul>
                    <li className='main-nav__link-list__item'><a href='/en/live'>Live</a></li>
                    <li className='main-nav__link-list__item'><a href='/en/Push'>Push</a></li>
                    <li className='main-nav__link-list__item'><a href='/en/Note'>Note</a></li>
                    <li className='main-nav__link-list__item'><a href='/en/Link'>Link</a></li>
                    <li className='main-nav__link-list__item'><a href='/en/Shop'>Shop</a></li>
                    <li className='main-nav__link-list__item'><a href='/en/Packs'>Packs</a></li>
                    <li className='main-nav__link-list__item'><a href='/en/Help'>Help</a></li>
                    <li className='main-nav__link-list__item'><a href='/en/More'>More</a></li>
                    <li className='main-nav__link-list__item'><a href='/en/Packs'>Try Live for free</a></li>
                    <li className='main-nav__link-list__item main-nav__link-list__item--try'><a href='/en/Help'>Log in or register</a></li>
                </ul>
                <div className='main-nav__stretcher'></div>
            </nav>
            <div className='main-nav__separator'></div>
        </div>

    )
}

export default NavBar
