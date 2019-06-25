import React from 'react'
import FooterLogo1 from '../assets/images/footer-logo-1.png'
import FooterLogo2 from '../assets/images/footer-logo-2.png'

function Header() {
    return (
        <footer className="bg-dark">
            <div className="container-fluid footer">
                <div className="row">
                    <div className="col-md-4 pt-5">
                        <div className="text-white">
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
                        <div className="color-big-hero footer-main-title">
                            رستوران‌ها
                        </div>
                        <ul>
                            <li>
                                <img src="/mocks/application_download_link/google-play-dark.png" alt="download app" />
                            </li>
                            <li>
                                <img src="/mocks/application_download_link/cafebazaar-dark.png" alt="download app" />
                            </li>
                            <li>
                                <img src="/mocks/application_download_link/sib-app-dark.png" alt="download app" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row justify-content-center py-5">
                    <img src={FooterLogo1} alt="download app" />
                    <img src={FooterLogo2} alt="download app" />
                </div>
                <div className="row bg-dark">
                    <div className="col-md-6">
                        © 2017, Reyhoon, All Rights Reserved.
                    </div>
                    <div className="col-md-6">
                        
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Header;
