import React from 'react'
import ReyhoonLogo from './ReyhoonLogo'

function Header() {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active border-left">
                            <a class="nav-link" href="/">ورود</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">عضویت</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">راهنما</a>
                        </li>
                    </ul>
                    <span class="my-2 my-lg-0">
                        <ReyhoonLogo/>
                    </span>
                </div>
            </nav>
        </header>
    );
}

export default Header;
