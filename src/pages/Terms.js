import React from "react";
import Layout from "../components/Layout";



const Terms = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <div
                className="slider-area2 section-bg2 hero-overly"
                style={{ backgroundImage: "url(assets/img/hero/hero2.png)" }}
            >
                <div className="slider-height2 d-flex align-items-center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-12 text-center">
                                <div className="hero-cap hero-cap2">
                                    <h2 className="text-white">Terms & Policies</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Terms & Policies Section */}
            <section className="sample-text-area py-5">
                <div className="container box_1170">
                    {/* Terms and Conditions */}
                    <h3 className="text-heading mb-4">Terms and Conditions</h3>
                    <p><strong>Effective Date:</strong> 01-03-2025</p>
                    <p>
                        Welcome to <strong>ADEMIC SPIN</strong>. By accessing or using our services, you agree to the following terms and conditions.
                    </p>

                    <ol className="mb-5">
                        <li>
                            <strong>Service Contract</strong><br />
                            We handle the pickup, cleaning, and return of your laundry based on the specific service package you choose.
                            Please ensure all items are labeled clearly, and let us know about any special requirements—such as delicate fabrics or specific handling needs.
                            Turnaround time will depend on the service selected (e.g., standard laundry takes about 24–48 hours).
                        </li>
                        <li>
                            <strong>Pick-Up and Delivery</strong><br />
                            Please ensure someone is available at the designated times for both pickup and delivery.
                            Missed pickups or deliveries may result in additional charges.
                        </li>
                        <li>
                            <strong>Garment Care and Liability</strong><br />
                            We follow standard practices within the laundry industry to care for your garments.
                            We are not responsible for normal wear and tear, fading, or damage due to manufacturer defects.
                            Our maximum liability for lost or damaged items is capped at five times the cost of cleaning the item.
                        </li>
                        <li>
                            <strong>Payment Terms</strong><br />
                            Payment is required when the service is requested unless otherwise specified.
                            We accept debit cards, bank transfers, and mobile payment options.
                        </li>
                        <li>
                            <strong>User Responsibilities</strong><br />
                            Please ensure that laundry items are free from hazardous materials like needles or chemicals.
                            Let us know if you have allergies or sensitivities to any cleaning agents.
                        </li>
                        <li>
                            <strong>Termination of Service</strong><br />
                            We reserve the right to discontinue services in cases of abuse, misuse, or non-payment.
                        </li>
                    </ol>

                    <hr className="my-5" />

                    {/* Refund Policy */}
                    <h3 className="text-heading mb-4">Refund Policy</h3>
                    <p><strong>Effective Date:</strong> 01-03-2025</p>
                    <p>Your satisfaction matters to us. In the rare event that something goes wrong, here’s how our refund process works:</p>

                    <ul className="mb-4">
                        <li>
                            <strong>Refund Eligibility:</strong><br />
                            You may be eligible for a refund if:
                            <ul>
                                <li>A service was not delivered due to our error.</li>
                                <li>Items were lost or damaged (after a proper investigation).</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Nonrefundable Services:</strong><br />
                            Refunds are not available for:
                            <ul>
                                <li>Services completed in accordance with industry standards.</li>
                                <li>Mistakes made by the customer (e.g., incorrect pickup date or address).</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Request Procedure:</strong><br />
                            To request a refund, please contact us within 48 hours after the service is completed.
                            You may be asked to provide receipts or photos.
                            Refunds are processed within 7 business days and returned to the original payment method.
                        </li>
                    </ul>

                    <hr className="my-5" />

                    {/* Privacy Policy */}
                    <h3 className="text-heading mb-4">Privacy Policy</h3>
                    <p><strong>Effective Date:</strong> 01-03-2025</p>
                    <p>We’re committed to protecting your personal information.</p>

                    <ol>
                        <li>
                            <strong>Information We Collect</strong><br />
                            We collect details such as your name, phone number, email, and delivery address.
                            Payment information is securely processed by third-party providers.
                            We may also store your order history and preferences.
                        </li>
                        <li>
                            <strong>How We Use Your Information</strong><br />
                            We use your data to fulfill orders and improve our services.
                            We may occasionally send promotional messages (with an option to opt out).
                        </li>
                        <li>
                            <strong>Data Security</strong><br />
                            We implement industry-standard security measures to protect your personal data.
                            We do not sell or share your information, except with trusted partners involved in service delivery (e.g., payment processors, delivery services).
                        </li>
                        <li>
                            <strong>Cookies and Tracking</strong><br />
                            Our website may use cookies to enhance your browsing experience.
                        </li>
                        <li>
                            <strong>Your Rights</strong><br />
                            You can request to view, update, or delete your personal data at any time.
                        </li>
                    </ol>
                </div>
            </section>
        </Layout>
    );
};

export default Terms;
