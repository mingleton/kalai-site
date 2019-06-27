import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className= "header-wrapper">
                <div className= "header-title">
                    <h1>"Kalai Films"</h1>
                </div>
                <div className= "about-me">About Me</div>
                <div className= "contact">Contact</div>
                <div className= "weddings">Weddings</div>
                <div className= "business">Business</div>
            </div>
        )
    }
}

export default Header;

