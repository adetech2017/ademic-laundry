import React from "react";
// import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Home = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="slider-area hero-overly">
                <div className="slider-active">
                    <div className="single-slider slider-height d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-7 col-lg-9 col-md-10 col-sm-9">
                                    <div className="hero__caption">
                                        <h1>Quality laundry service in your city</h1>
                                        <p>We take care about the cleanness of your clothes</p>
                                        {/* <Link to="/services" className="btn hero-btn">Explore Services</Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="services-area pt-top border-bottom pb-20 mb-60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8">
                            <div className="section-tittle text-center mb-55">
                                <span className="element">Our Process</span>
                                <h2>This is how we work</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {[
                            {
                                icon: "services-icon1.svg",
                                title: "Convenient Pickup",
                                text: "Schedule a pickup, and our team will collect your laundry from your doorstep, saving you time and effort.",
                            },
                            {
                                icon: "services-icon2.svg",
                                title: "Expert Cleaning",
                                text: "Our state-of-the-art washing process ensures your clothes are washed with premium detergents.",
                            },
                            {
                                icon: "services-icon3.svg",
                                title: "Prompt Delivery",
                                text: "Once cleaned and folded to perfection, your clothes are delivered straight to your doorstep.",
                            },
                        ].map((service, i) => (
                            <div className="col-lg-4 col-md-6 col-sm-6" key={i}>
                                <div className="single-cat text-center">
                                    <div className="cat-icon">
                                        <img
                                            src={`${process.env.PUBLIC_URL}/assets/img/icon/${service.icon}`}
                                            alt={`${service.title} Icon`}
                                        />
                                    </div>
                                    <div className="cat-cap">
                                        <h3>{service.title}</h3>
                                        {/* <h5><Link to="/services"></Link></h5> */}
                                        <p>{service.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            {/* <section className="offer-services pb-bottom2">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8">
                            <div className="section-tittle text-center mb-55">
                                <span className="element">Services</span>
                                <h2>Services we offer</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-offers">
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/img/gallery/offer11.jpg`}
                                    alt="Laundry Process"
                                    className="w-100"
                                    height="598"
                                />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-offers">
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/img/gallery/offers2.png`}
                                    alt="Professional Laundry"
                                    className="w-100"
                                />
                                <div className="offers-caption text-center">
                                    <div className="cat-icon">
                                        <img
                                            src={`${process.env.PUBLIC_URL}/assets/img/icon/offers-icon1.png`}
                                            alt="Laundry Icon"
                                        />
                                    </div>
                                    <div className="cat-cap">
                                        <h3>Professional Laundry Care</h3>
                                        <p>Enjoy a hassle-free laundry experience with spotless, fresh, and long-lasting clothes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-offers">
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/img/gallery/offers2.png`}
                                    alt="Ironing Service"
                                    className="w-100"
                                />
                                <div className="offers-caption text-center">
                                    <div className="cat-icon">
                                        <img
                                            src={`${process.env.PUBLIC_URL}/assets/img/icon/offers-icon1.png`}
                                            alt="Ironing Icon"
                                        />
                                    </div>
                                    <div className="cat-cap">
                                        <h3>Expert Ironing & Pressing</h3>
                                        <p>Your clothes look crisp, polished, and ready to wear for any occasion.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-offers">
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/img/gallery/offers41.jpg`}
                                    alt="Final Touch"
                                    className="w-100"
                                    height="598"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="features-area pb-80 pt-80">
                <div className="container">
                    <div className="row justify-content-center mb-55">
                        <div className="col-xl-7 col-lg-8 text-center">
                            <h2>App Features</h2>
                            <h2 className="mb-3">Everything You Need for Stress-Free Laundry</h2>
                            <p className="text-muted">Our app is built to make your laundry experience fast, simple, and reliable.</p>
                        </div>
                    </div>
                    <div className="row">
                        {[
                            {
                                title: "Real-Time Order Tracking",
                                desc: "Know exactly where your laundry is—from pickup to delivery.",
                                icon: "assets/img/icon/tracking.svg"
                            },
                            {
                                title: "Flexible Scheduling",
                                desc: "Pick a time that works best for you, and we’ll take care of the rest.",
                                icon: "assets/img/icon/schedule.svg"
                            },
                            {
                                title: "Secure Payments",
                                desc: "Pay quickly and securely with your preferred method.",
                                icon: "assets/img/icon/payment.svg"
                            },
                            {
                                title: "Order History",
                                desc: "Keep track of your past orders, invoices, and delivery timelines.",
                                icon: "assets/img/icon/history.svg"
                            },
                            {
                                title: "Live Chat Support",
                                desc: "Have a question? Chat with our support team instantly in-app.",
                                icon: "assets/img/icon/support.svg"
                            },
                            {
                                title: "Push Notifications",
                                desc: "Get notified when your clothes are ready or on the way.",
                                icon: "assets/img/icon/notification.svg"
                            },
                        ].map((feature, index) => (
                            <div className="col-lg-4 col-md-6 mb-4" key={index}>
                                <div className="single-feature text-center p-4 shadow-sm rounded">
                                    <img src={feature.icon} alt={feature.title} className="mb-3" width="60" />
                                    <h5>{feature.title}</h5>
                                    <p>{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="app-download-area pt-100 pb-100 bg-light">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                        <img
                        src="assets/img/gallery/app-preview.png"
                        alt="Laundry App Preview"
                        className="img-fluid rounded"
                        />
                    </div>
                    <div className="col-lg-6 col-md-12 text-center text-lg-start">
                        <h2 className="mb-4">Download the ADEMIC SPIN App</h2>
                        <p className="mb-4">
                            Get our mobile app and manage your laundry with just a few taps.
                            Schedule pickups, track your orders, and get notifications—all in one place.
                        </p>
                        <div className="d-flex justify-content-center justify-content-lg-start gap-3 flex-wrap">
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                            src="assets/img/logo/google-play-badge.png"
                            alt="Download on Google Play"
                            width="180"
                            />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img
                            src="assets/img/logo/app-store-badge.svg"
                            alt="Download on the App Store"
                            width="180"
                            />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
