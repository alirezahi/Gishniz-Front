import React from 'react'
import ReyhoonLogo from './ReyhoonLogo'

function Header() {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div id="navbarText">
                    {/* <ul class="navbar-nav ml-auto">
                        <li class="nav-item active border-left">
                            <a class="nav-link" href="/">ورود</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">عضویت</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">راهنما</a>
                        </li>
                    </ul> */}
                    <ul class="nav-items inline-item m-0 p-3">
                        <li class="border-left border-secondary p-2">
                            <a class="text-decoration-none" href="/src/login.html">ورود</a>
                        </li>
                        <li class="p-2">
                            <a class="text-decoration-none" href="/src/register.html">عضویت</a>
                        </li>
                        <li class="p-2 pr-4">
                            <a class="text-decoration-none" href="/">راهنما</a>
                        </li>
                    </ul>
                    <span class="my-2 my-lg-0 px-1">
                        <ReyhoonLogo className="sm-logo" />
                    </span>
                </div>
            </nav>
        </header>
    );
}

export default Header;
