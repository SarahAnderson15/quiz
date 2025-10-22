import React from "react";
import {Link} from "react-router-dom";
import '../index.css';

const Navigation = () => {
    return(
        <nav className="navigation-bar">
            <ul className= "nav-list">
                <li> 
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/how-to">How To Play</Link>
                </li>
                <li>
                    <Link to="/quiz">Take Quiz</Link>
                </li>
               
            </ul>
        </nav>
    );
};

export default Navigation;