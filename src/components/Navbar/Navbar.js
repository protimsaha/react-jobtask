import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faShoppingCart, faPerson } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
    return (
        <nav className='d-flex container align-items-center justify-content-between head'>
            <div>
                <Link className='homeLink' to='/'>
                    <div className='title-logo d-flex align-items-center'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74fMn6LxqneeJTknjQVL3DVyqaVsdCDP7sMAGaChoOtpJbzboX2JU1IwjB2G6qx-hhc4&usqp=CAU" alt="" />
                        <h6 role={'button'}><span className='title'>E-</span>Shop</h6>
                    </div>
                </Link>
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