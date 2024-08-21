"use client"
import React, { useEffect } from 'react'
import TestimonialSlider from '../../../components/TestimonialSlider'
import Navbar from '../../../components/Navbar'
import Topbar from '../../../components/Topbar'
import Footer from '../../../components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);
    return (
        <>
            <Topbar />
            <Navbar />

            {/* Header */}

            <header>
                <div className="container aboutHeader">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <img src="/logo.png" alt=""/>
                            <p>At our core, we're passionate about promoting meaningful connections and empowering individuals within relationships. Our platform is a culmination of expertise and dedication, striving to steer the ever-evolving setting of modern relationships. Through perceptive content, supportive resources, and a community-driven approach, we aim to inspire, educate, and support individuals in their life toward fulfilling and thriving relationships.</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <h1>We Care About Relationships</h1>
                            <p>Our mission is centered on cultivating healthy and fulfilling connections. We believe in the power of empathy, communication, and trust as the pillars of strong relationships. Our platform celebrates diversity, encouraging the growth and evolution of partnerships while offering support and guidance to direct the complexities of modern relationships.</p>
                            <ul>
                                <li><img src="/icon.png" alt=""/> Prioritize Empathy</li>
                                <li><img src="/icon.png" alt=""/> Communication Advocates</li>
                                <li><img src="/icon.png" alt=""/> Trust-building Advocacy</li>
                                <li><img src="/icon.png" alt=""/> Accepting Diversity</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>


            <section className='about-sec-2' data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <img src="/about-img-2.png" alt="" className='img-fluid'/>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <h1>Happy Users 47K+</h1>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat enim ad minim veniam,</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className='about-sec-3' data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <h1>Members 47K+</h1>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat enim ad minim veniam,</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <img src="/about-img-3.png" alt="" className='img-fluid'/>
                        </div>
                    </div>
                </div>
            </section>


            {/* Testimonial Slider */}

            <section className='testimonialSec' data-aos="fade-up">
                <div className="container">
                    <TestimonialSlider />
                </div>
            </section>

            <Footer />
        </>
    )
}

export default About;