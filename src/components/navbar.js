
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './button';
import './navBar.css';

function Navbar() {



const [click, setClick] = useState(false);
const [button, setButton] = useState(true);

const handleClick = () => setClick(!click);
const onMClick = () => setClick(false);




const showButton = () => {
    if (window.innerWidth <= 960) {
        setButton(false)
    } 
   else {
    setButton(true)
}
};


window.addEventListener("resize" , showButton);
    return (
        <div>
           <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">

            Stellaris <i className="fab fa-typo3"></i>

                </Link>

                <div className="menu-icon" onClick={handleClick}>


                <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    
                </div>
            <ul className={click ? "nav-menu-active" : "nav-menu"}>
                <li className="nav-item">
                    <Link to='/services' className="nav-links" onClick={onMClick}>
                        Services
                    </Link>

                </li>
                <li className="nav-item">
                    <Link to='/products' className="nav-links" onClick={onMClick}>
                        Products
                    </Link>
                    
                </li>
                <li className="nav-item">
                    <Link to='/signup' className="nav-links-mobile" onClick={onMClick}>
                        Sign Up
                    </Link>
                    
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </div>

    )}

export default Navbar
