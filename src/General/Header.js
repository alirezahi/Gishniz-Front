import React from 'react'
import ReyhoonLogo from './ReyhoonLogo'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light small">
                <div id="navbarText">
                    {/* <ul className="navbar-nav ml-auto">
                        <li className="nav-item active border-left">
                            <a className="nav-link" href="/">ورود</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">عضویت</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">راهنما</a>
                        </li>
                    </ul> */}
                    <ul className="nav-items inline-item m-0 p-3">
                        <li className="border-left p-2">
                            {/* <a className="text-decoration-none" href="/src/login.html">ورود</a> */}
                            <Link to="/restaurants/">ورود</Link>
                        </li>
                        <li className="p-2">
                            <a className="text-decoration-none" href="/src/register.html">عضویت</a>
                        </li>
                        <li className="p-2 pr-4">
                            {/* <a className="text-decoration-none" href="/">راهنما</a> */}
                            <Link to="/restaurant/">راهنما</Link>
                        </li>
                    </ul>
                    <span className="my-2 my-lg-0 px-1">
                        <ReyhoonLogo className="sm-logo" />
                    </span>
                </div>
            </nav>
        </header>
    );
}

export default Header;
