import React,{useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import { Button } from "../Button/Button";
import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button,setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = ()=>{
        window.innerWidth <= 980 ? setButton(false) : setButton(true);
    }
    useEffect(() => {
        showButton(0)
    }, [])

    window.addEventListener('resize',showButton);

    return(
        <>
            <nav className = "navbar">
                <div className = "navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        LetsTravel <i className = "fab fa-typo3" />
                    </Link> 
                    <div className = "menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times':'fas fa-bars'} />
                    </div>
                    <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Services" className="nav-links" onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Products" className="nav-links" onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/SignUp" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    { 
                        button && <Button buttonStyle="btn--outline">
                        SIGN UP
                        </Button>
                    }

                </div>
            
            </nav>


        </>


    )
}

export default Navbar;