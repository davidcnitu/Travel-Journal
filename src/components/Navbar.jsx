import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <FontAwesomeIcon icon={faEarthAmericas} className="navbar--icon" />
            <p className='navbar--title'>my travel journal.</p>
        </nav>
    );
}