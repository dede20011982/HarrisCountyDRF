import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
//import Modal from 'react-modal';
import { NavbarBrand } from "reactstrap";
//import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const[/*button*/, setButton] =useState(true)
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);  
        } else {
            setButton(true);
        }  
    };

    useEffect(() => {
        showButton()        
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
         <nav className="navbar">
            <div className="navbar-container">                
                <NavbarBrand className="mr-auto" href="/">
                    <img
                        src="/assets/logo.png"
                        height="200"
                        width="200"
                        alt="HCDRF logo"
                    />
                </NavbarBrand> 
                {/* <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    Harris County DRF Inc. <i className='fab fa-typo3' />
                </Link>                                  */}
                 <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                         Home   
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                         About Us   
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/gallery' className='nav-links' onClick={closeMobileMenu}>
                         Gallery   
                        </Link>
                    </li>                    
                    <li className='nav-item'>
                        <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                         Contact Us   
                        </Link>
                    </li>                                        
                </ul>                 
                {/* {button && <Button buttonStyle='btn--outline'>Sign-In</Button>} */}
            </div>
         </nav>
        </>
    );

};
export default Navbar;