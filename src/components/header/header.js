import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className= "header-wrapper">
                <div className= "homepage-link">
                    <NavLink exact to ="/" activeClassName= "nav-link-active">
                        <h1>"Kalai Films"</h1>
                    </NavLink>
                </div>

                <div className = "nav-link-wrapper">
                    <NavLink to="/about" activeClassName="nav-link-active">
                        About Me
                    </NavLink>
                </div>

                <div className = "nav-link-wrapper">
                    <NavLink to="/weddings" activeClassName="nav-link-active">
                        Weddings
                    </NavLink>
                </div>
                <div className = "nav-link-wrapper">
                    <NavLink to= "/business" activeClassName="nav-link-active">
                        Business
                    </NavLink>
                </div>
                <div className = "nav-link-wrapper">
                    <NavLink to= "/contact" activeClassName="nav-link-active">
                        Contact
                    </NavLink>
                </div>

            </div>
        )
    }
}

export default withRouter(Header);

