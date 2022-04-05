import { Container } from "react-bootstrap";
import classes from "../style/sass/header.module.scss";
import logo from "../images/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header id={classes.header}>
            <Container>
                <nav className="navbar">
                    <Link id={classes.logo} to="/">
                        <img src={logo} alt="logo" className="img-fluid" />
                        SPACE
                    </Link>
            
                    <ul className="nav">
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
                </nav>
            </Container>
        </header>
    );
}
 
export default Header;