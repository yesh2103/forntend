import React from 'react';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="App">
                    My App
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="Login/SignUp">
                                Login
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="SignUp">
                                Sign Up
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;