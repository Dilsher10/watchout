"use client"
import React, { useEffect } from 'react'
import Navbar from '../../../components/Navbar'
import Topbar from '../../../components/Topbar'
import Footer from '../../../components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Page = () => {
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

            <section className='contactHeader'>
                <div className="container">
                    <div className="row">
                        <h1>Get in Touch</h1>
                    </div>
                </div>
            </section>



            <div className="container contactSec" data-aos="fade-up">
                <div className="row">
                    <div className="col-md-8 formSec-1">
                        <form action="">
                            <h2>Send Message</h2>
                            <div className="row">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="First Name" aria-label="First name" />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Last Name" aria-label="Last name" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Phone" aria-label="Phone" />
                                </div>
                                <div className="col">
                                    <input type="email" className="form-control" placeholder="Email" aria-label="Email" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='How we can help'></textarea>
                            </div>
                            <div className="mb-3">
                                <button className='btn'>Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4 formSec-2">
                        <h3>Contact Info</h3>
                        <p><img src="/phone-icon.png" alt=""/> +1234567890</p>
                        <p><img src="/mail.png" alt=""/> support@watchout-alert.com</p>
                        <div>
                            <img src="/group-icons.png" alt="" className='group-icons'/>
                        </div>
                        <img src="/contact-logo.png" className='contact-logo' alt="" />
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default Page