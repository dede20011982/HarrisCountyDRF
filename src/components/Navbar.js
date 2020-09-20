import React, { useState } from 'react';
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

    window.addEventListener('resize', showButton);

    return (
        <>
         <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
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
                {button && <Button buttonStyle='btn--outline'>Donate</Button>}
            </div>
         </nav>
        </>
    );

};
export default Navbar;