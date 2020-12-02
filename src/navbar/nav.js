import React from 'react';
import {Link} from 'react-router-dom'; 

function Nav(){

    const linksStyle={
        color:'white',
        fontSize: '1.2em',
        background:'green',
        padding: '10px',
        display: 'flex',
        justifyContent:'space-around',
        margin: '2px',
        width:'25%'
    }

    return(
        <nav>
            <h1>Nav Bar Page</h1>
            <ul className="nav-links">
                <Link to="/home" style={linksStyle}>
                    <li>Home</li>
                </Link>
                <Link to="/About" style={linksStyle}>
                    <li>About</li>
                </Link>
                <Link to="/security" style={linksStyle}>
                    <li>Security</li>
                </Link>
                <Link to="/register" style={linksStyle}>
                    <li>Register</li>
                </Link>
                <Link to="/foods" style={linksStyle}>
                    <li>Foods</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;