import React from "react";
import Layout from "../components/Layout";




const About = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <div className="slider-area2 section-bg2 hero-overly" style={{ backgroundImage: "url(assets/img/hero/hero2.png)" }}>
                <div className="slider-height2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap hero-cap2">
                                    <h2>About Us</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Area */}
            <section className="about-area2 section-padding40">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-img">
                                <img src="assets/img/gallery/ironing.jpg" alt="About AdemicSpin" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="about-caption mb-50">
                                <div className="section-tittle mb-25">
                                    <h2>About AdemicSpin</h2>
                                </div>
                                <p className="mb-20">
                                At <strong>AdemicSpin</strong>, we take laundry care to the next level. From collection to delivery, our automated process ensures your clothes receive top-tier treatment.
                                </p>
                                <p className="mb-30">
                                With precision cleaning and expert handling, we guarantee a fresh and spotless finish—because your wardrobe deserves the best.
                                </p>
                                <a href="about.html" className="btn">
                                Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Process Section */}
            <section className="services-area border-bottom pb-20 mb-60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8">
                            <div className="section-tittle text-center mb-55">
                                <span className="element">Our Process</span>
                                <h2>How We Work</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {[
                        {
                            img: "assets/img/icon/services-icon1.svg",
                            title: "We Collect Your Clothes",
                            description: "Our team picks up your clothes at your convenience, ensuring a hassle-free experience."
                        },
                        {
                            img: "assets/img/icon/services-icon2.svg",
                            title: "We Wash & Care",
                            description: "Our automated cleaning process gives your garments a fresh and spotless look."
                        },
                        {
                            img: "assets/img/icon/services-icon3.svg",
                            title: "We Deliver Back",
                            description: "Enjoy crisp, clean clothes delivered straight to your doorstep."
                        }
                        ].map((service, index) => (
                        <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                            <div className="single-cat text-center">
                            <div className="cat-icon">
                                <img src={service.img} alt={service.title} />
                            </div>
                            <div className="cat-cap">
                                <h5>
                                <a href="services.html">{service.title}</a>
                                </h5>
                                <p>{service.description}</p>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="container">
                <section className="wantToWork-area" style={{ backgroundImage: "url(assets/img/gallery/section_bg01.png)" }}>
                <div className="wants-wrapper w-padding2">
                    <div className="row align-items-center justify-content-between">
                    <div className="col-xl-8 col-lg-9 col-md-7">
                        <div className="wantToWork-caption wantToWork-caption2">
                        <h2>Call Us for a Service</h2>
                        <p>We deliver fresh, clean clothes wherever you are.</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-5">
                        <a href="tel:+123456789" className="btn wantToWork-btn">
                        <img src="assets/img/icon/call2.png" alt="Call Us" /> Contact Us
                        </a>
                    </div>
                    </div>
                </div>
                </section>
            </section>
        </Layout>
    );
};

export default About;
