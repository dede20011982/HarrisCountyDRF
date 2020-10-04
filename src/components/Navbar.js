import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const[button, setButton] =useState(true)
    //Bar Function turns bar to an X(cancel) reversing state
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
                {/* <Navbar.Brand href="#home">
                    <img
                        src="/public/assets/logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="HCDRF logo"
                    />
                </Navbar.Brand> */}
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    Harris County DRF Inc. <i className='fab fa-typo3' />
                </Link>                                 
                 <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
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
                {button && <Button buttonStyle='btn--outline'>Sign-In</Button>}
            </div>
         </nav>
        </>
    );

};
export default Navbar;