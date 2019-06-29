import React from 'react'
import FooterLogo1 from '../assets/images/footer-logo-1.png'
import FooterLogo2 from '../assets/images/footer-logo-2.png'
import CafeBazarDownload from '../assets/images/cafebazaar-dark.png'
import SibDownload from '../assets/images/sib-app-dark.png'
import GooglePlayDownload from '../assets/images/google-play-dark.png'

function Header() {
    return (
        <React.Fragment>
            <footer className="bg-full-black small">
                <div className="container footer bg-full-black">
                    <div className="row">
                        <div className="col-md-4 pt-5">
                            <div className="text-white pt-3">
                                مراقبت و محافظت از حساب کاربری و رمزعبور هر کاربر بر عهده کاربر است. ریحون سریعترین راه سفارش آنلاین غذا است. منوی عکس‌دار رستوران‌های اطرافتان را بر اساس مکان خود به راحتی مشاهده کنید و سفارش دهید.
                            </div>
                            <div>
                                <a href="/">سایت رستوران‌ها</a>
                            </div>
                        </div>
                        <div className="col-md-2 pt-3">
                            <hr className="border-purple" />
                            <div className="text-white footer-main-title pb-3">
                                تماس با ریحون
                            </div>
                            <ul>
                                {['درباره ریحون', 'تماس با ریحون','وبلاگ ریحون'].map(item => (
                                    <li>
                                        <a href="/">
                                            {item}
                                        </a>
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                        <div className="col-md-2 pt-3">
                            <hr className="border-pink" />
                            <div className="text-white footer-main-title pb-3">
                                رستوران‌ها
                            </div>
                            <ul>
                                {['ثبت رستوران'].map(item => (
                                    <li>
                                        <a href="/">
                                            {item}
                                        </a>
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                        <div className="col-md-2 pt-3">
                            <hr className="border-red" />
                            <div className="text-white footer-main-title pb-3">
                                پشتیبانی ریحون
                            </div>
                            <ul>
                                {['سوالات متداول', 'تماس با پشتیبانی', 'قوانین و مقررات'].map(item => (
                                    <li>
                                        <a href="/">
                                            {item}
                                        </a>
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                        <div className="col-md-2 pt-3">
                            <hr className="border-yellow" />
                            <div className="text-white footer-main-title pb-3">
                                اپلیکیشن‌های موبایل
                            </div>
                            <ul>
                                <li>
                                    <img className="border rounded border-secondary" src={CafeBazarDownload} alt="download app" />
                                </li>
                                <li >
                                    <img className="border rounded border-secondary" src={GooglePlayDownload} alt="download app" />
                                </li>
                                <li className="rounded border-secondary">
                                    <img className="border rounded border-secondary" src={SibDownload} alt="download app" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row justify-content-center py-5">
                        <img src={FooterLogo1} alt="download app" />
                        <img src={FooterLogo2} alt="download app" />
                    </div>
                    
                </div>
            </footer>
            <div class="container-fluid">
                <div className="row bg-dark">
                    <div className="col-md-6">
                        © 2017, Reyhoon, All Rights Reserved.
                        </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </div>
        </React.Fragment>

    );
}

export default Header;
