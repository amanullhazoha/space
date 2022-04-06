import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";

import classes from "../style/scss/header.module.scss";
import logo from "../images/logo.svg";

const Header = () => {
    const [toggler, setToggler]  = useState(false);

    return (
        <header id={classes.header}>
            <Container>
                <nav className="navbar">
                    <Link id={classes.logo} to="/">
                        <img src={logo} alt="logo" className="img-fluid" />
                        SPACE
                    </Link>
            
                    <div className={classes.menu} style={{ display: `${toggler ? "block" : "none"}`}}>
                        <ul className={`nav`}>
                            <li className="nav-item">
                                <NavLink 
                                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                                    to="/" 
                                >
                                    Home
                                </NavLink>
                            </li>
            
                            <li className="nav-item">
                                <NavLink 
                                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                                    to="/about"
                                >
                                    About us
                                </NavLink>
                            </li>
            
                            <li className="nav-item">
                                <NavLink 
                                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                                    to="/story"
                                >
                                    Story
                                </NavLink>
                            </li>
            
                            <li className="nav-item">
                                <NavLink 
                                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                                    to="/blog"
                                >
                                    Blog
                                </NavLink>
                            </li>

                            <button type="button">Contact Us</button>
                        </ul>
                    </div>

                    <button 
                        type="button" 
                        className={classes.toggler} 
                        onClick={() => setToggler(prev => !prev)}
                        style={{ color: `${toggler ? "red" : "#fff"}`}}
                    >
                        <i class="fas fa-bars" />
                    </button>
                </nav>
            </Container>
        </header>
    );
}
 
export default Header;