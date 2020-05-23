import React from 'react';
import {Link} from 'react-router-dom';
import Scrollchor  from 'react-scrollchor'
const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light wow fadeIn">
            <div className="container">
                <Link className="navbar-brand" to="/">BellMan</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Scrollchor className="nav-link" to='#Header'>Home<span className="sr-only">(current)</span></Scrollchor>
                        </li>
                        <li className="nav-item">
                            <Scrollchor to='#Hotspots' className="nav-link">Hotspots</Scrollchor>
                        </li>
                        <li className="nav-item">
                            <Scrollchor className="nav-link" to='#Events'>Events</Scrollchor>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;