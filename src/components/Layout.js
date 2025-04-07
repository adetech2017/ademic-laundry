import React, { useEffect } from "react";
import { Link } from "react-router";






const Layout = ({ children }) => {
    useEffect(() => {



    }, []);

    return (
        <div>
            {/* Preloader */}
            {/* <div id="preloader-active">
                <div className="preloader d-flex align-items-center justify-content-center">
                    <div className="preloader-inner position-relative">
                        <div className="preloader-circle"></div>
                        <div className="preloader-img pere-text">
                            <img src="assets/img/logo/loder.png" alt="" />
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Header */}
            <header>
                <div className="header-area">
                    <div className="main-header header-sticky">
                        <div className="header-left">
                            <div className="logo">
                                <Link to="/">
                                    <img src="/assets/img/logo/ademicLogo.png" alt="Logo" height="90"/>
                                </Link>
                            </div>
                            <div className="menu-wrapper d-flex align-items-center">
                                <div class="main-menu d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/about">About</Link></li>
                                            {/* <li><Link to="/services">Services</Link></li> */}
                                            <li><Link to="/terms">Terms & Conditions</Link></li>
                                            {/* <li><Link to="/contact">Contact</Link></li> */}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="header-right">
                            <a href="tel:08728256266" className="header-btn1">
                                <img src="/assets/img/icon/call.png" alt="" /> +2348106474983
                            </a>
                            <button className="header-btn2">Make an Appointment</button>
                        </div>
                        <div class="col-12">
                            <div class="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main>{children}</main>

            {/* Footer */}
            <footer>
                <div className="footer-area footer-padding">
                    <div className="container">
                        <div className="row d-flex justify-content-between">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-logo mb-35">
                                        <Link to="/">
                                        <img src="/assets/img/logo/ademicLogo.png" alt="Logo" height="90"/>
                                        </Link>
                                    </div>
                                    <div className="footer-tittle">
                                        <p>At <strong>AdemicSpin</strong>, we blend efficiency with care, ensuring your clothes receive the best treatment. Experience freshness, quality, and convenience—because your laundry deserves the best!</p>
                                    </div>

                                    <div className="footer-social">
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Services</h4>
                                        <ul>
                                            <li><a href="#">- Dry Cleaning</a></li>
                                            <li><a href="#">- Dry Clean</a></li>
                                            <li><a href="#">- Ironing Services</a></li>
                                            <li><a href="#">- Laundry Service London</a></li>
                                            <li><a href="#">- Laundry App</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Get in touch</h4>
                                        <ul>
                                            <li className="number"><a href="#">+2348106474983</a></li>
                                            <li><a href="#">ademicspin@gmail.com</a></li>
                                            <li><a href="#">No. 3 orefagbabi Street, Ilisan Remo Ogun State</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom-area section-bg2">
                    <div className="container">
                        <div className="footer-border">
                            <div className="row d-flex align-items-center">
                                <div className="col-xl-12 text-center">
                                    <p>
                                        &copy; {new Date().getFullYear()} All rights reserved | AdeMic Enterprise
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Scroll Up */}
            <div id="back-top">
                <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt"></i></a>
            </div>
        </div>
    );
};

export default Layout;
