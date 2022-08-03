import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faShoppingCart, faPerson } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
    return (
        <nav className='d-flex container align-items-center justify-content-between head'>
            <div>
                <Link className='homeLink' to='/'><h6 role={'button'}><span className='title'>E-</span>Shop</h6></Link>
            </div>
            <div>
                <NavLink className='link' to=''>Men</NavLink>
                <NavLink className='link' to=''>Women</NavLink>
                <NavLink className='link' to=''>Kids</NavLink>
            </div>
            <div><FontAwesomeIcon role={'button'} className='icon' icon={faMagnifyingGlass} />
                <FontAwesomeIcon role={'button'} className='icon' icon={faShoppingCart}></FontAwesomeIcon>
                <FontAwesomeIcon role={'button'} className='icon' icon={faPerson}></FontAwesomeIcon>
            </div>

        </nav>
    );
};

export default Navbar;