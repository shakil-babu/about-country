import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    const color = {
        color:'orangered'
    }
    return (
        <>
           <nav>
               <div className="nav-items">
                <h3 className="logo">CountriesInfo</h3>
                <div className="nav-details">
                <ul>
                   <li><NavLink activeStyle={color} to='/' >Home</NavLink></li>
               </ul>
                </div>
               </div>
            </nav>  
        </>
    )
}

export default Header
