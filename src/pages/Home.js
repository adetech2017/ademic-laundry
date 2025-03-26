import React from "react";
import Layout from "../components/Layout";







const Home = () => {
    return (
        <Layout>
            <section className="slider-area hero-overly">
                <div className="slider-active">
                    <div className="single-slider slider-height d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-7 col-lg-9 col-md-10 col-sm-9">
                                <div className="hero__caption">
                                    <h1>Quality laundry service in your city</h1>
                                    <p>We take care about the cleanness of your clothes</p>
                                    <a href="#" className="btn hero-btn">Explore Services</a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="services-area pt-top border-bottom pb-20 mb-60">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-7 col-lg-8">
                            <div class="section-tittle text-center mb-55">
                                <span class="element">Our Process</span>
                                <h2>This is how we work</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-cat text-center">
                                <div class="cat-icon">
                                    <img src="assets/img/icon/services-icon1.svg" alt="Clothes Collection"/>
                                </div>
                                <div class="cat-cap">
                                    <h5><a href="services.html">Convenient Pickup</a></h5>
                                    <p>Schedule a pickup, and our team will collect your laundry from your doorstep, saving you time and effort. We handle your clothes with care from the very first step.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-cat text-center">
                                <div class="cat-icon">
                                    <img src="assets/img/icon/services-icon2.svg" alt="Washing Clothes"/>
                                </div>
                                <div class="cat-cap">
                                    <h5><a href="services.html">Expert Cleaning</a></h5>
                                    <p>Our state-of-the-art washing process ensures your clothes are washed with premium detergents, maintaining their freshness, softness, and vibrant colors.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-cat text-center">
                                <div class="cat-icon">
                                    <img src="assets/img/icon/services-icon3.svg" alt="Laundry Delivery"/>
                                </div>
                                <div class="cat-cap">
                                    <h5><a href="services.html">Prompt Delivery</a></h5>
                                    <p>Once cleaned and folded to perfection, your clothes are delivered straight to your doorstep at your preferred time—fresh, crisp, and ready to wear!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="offer-services pb-bottom2">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-7 col-lg-8">
                            <div class="section-tittle text-center mb-55">
                                <span class="element">Services</span>
                                <h2>Services we offer</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row no-gutters">
                        <div class="col-lg-6 col-md-6">
                            <div class="single-offers">
                                <img src="assets/img/gallery/offer11.jpg" alt="" class=" w-100" height="598"/>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="single-offers">
                                <img src="assets/img/gallery/offers2.png" alt="Laundry Service" class="w-100"/>
                                <div class="offers-caption text-center">
                                    <div class="cat-icon">
                                        <img src="assets/img/icon/offers-icon1.png" alt="Laundry Icon"/>
                                    </div>
                                    <div class="cat-cap">
                                        <h5><a href="services.html">Professional Laundry Care</a></h5>
                                        <p>Enjoy a hassle-free laundry experience! Our advanced cleaning techniques and premium detergents ensure your clothes are spotless, fresh, and long-lasting.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="single-offers">
                                <img src="assets/img/gallery/offers2.png" alt="Ironing Service" class="w-100"/>
                                <div class="offers-caption text-center">
                                    <div class="cat-icon">
                                        <img src="assets/img/icon/offers-icon1.png" alt="Ironing Icon"/>
                                    </div>
                                    <div class="cat-cap">
                                        <h5><a href="services.html">Expert Ironing & Pressing</a></h5>
                                        <p>Say goodbye to wrinkles! Our professional ironing service ensures your clothes look crisp, polished, and ready to wear for any occasion.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6">
                            <div class="single-offers">
                                <img src="assets/img/gallery/offers41.jpg" alt="" class=" w-100" height="598"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
