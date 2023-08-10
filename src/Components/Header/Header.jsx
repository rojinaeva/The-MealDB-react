import React from 'react';
import './Header.css'


const Header = () => {
    return (
        <nav className='header'>
           <h1>TheMealDB</h1>
           <div>
                <a href="/restora">Restora</a>
                <a href="/order">Order</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/login">Login</a>
           </div>
          
           
        </nav>
    );
};

export default Header;