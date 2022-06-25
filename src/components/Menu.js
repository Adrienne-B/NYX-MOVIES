import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import avatar from '../assets/images/img_avatar.png';

function Menu(props) {
    //assigning location variable
    const location = useLocation();
    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split('/');

    const handleClick = e => {
        props.setIsHamburgerOpen && props.setIsHamburgerOpen(e.target.checked);
    };

    const isLoggedIn = localStorage.getItem('loggedInUserName');
    return (
        <>
            <div className="menu-container-top">
                <div className="menu-container" id="main-menu">
                    <ul>
                        <li className={splitLocation[1] === '' ? 'active' : ''}>
                            <Link to="/">Home</Link>
                        </li>

                        <li className={splitLocation[1] === 'about-us' ? 'active' : ''}>
                            <Link to="/about-us">About Us</Link>
                        </li>

                        <li className={splitLocation[1] === 'programs' ? 'active' : ''}>
                            <Link to="/programs">Programs</Link>
                        </li>
                    </ul>
                </div>
                <h1 className="company">NYX'S MOVIES</h1>
                <div className="menu-container" id="main-menu">
                    <ul>
                        {!isLoggedIn ? (
                            <>
                                <li className={splitLocation[1] === 'login' ? 'active' : ''}>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li className={splitLocation[1] === 'sign-up' ? 'active' : ''}>
                                    <Link to="/sign-up">SignUp</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <img src={avatar} alt="Avatar" className="avatar" />
                                <li
                                    onClick={() => {
                                        localStorage.clear();
                                        window.location.reload();
                                    }}
                                >
                                    <Link to="/">Logout</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
            <input type="checkbox" id="hamburger-input" className="burger-shower" onClick={handleClick} />
            <label id="hamburger-menu" for="hamburger-input">
                <nav id="sidebar-menu" className={props.isHamburgerOpen ? 'open' : 'close'}>
                    <div className="menu-heading">
                        <h3>Menu</h3>
                    </div>
                    <ul>
                        <li className={splitLocation[1] === '' ? 'active' : ''}>
                            <Link to="/">Home</Link>
                        </li>

                        <li className={splitLocation[1] === 'about-us' ? 'active' : ''}>
                            <Link to="/about-us">About Us</Link>
                        </li>

                        <li className={splitLocation[1] === 'programs' ? 'active' : ''}>
                            <Link to="/programs">programs</Link>
                        </li>
                    </ul>
                </nav>
            </label>

            <div class="overlay-menu"></div>
        </>
    );
}

export default Menu;
