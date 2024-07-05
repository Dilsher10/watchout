"use client";
import React from 'react';
import Sidebar from '../../../../components/user_dashboard/Sidebar';
import Navbar from '../../../../components/user_dashboard/Navbar';
import Footer from '../../../../components/user_dashboard/Footer';


const Page = () => {
    return (
        <>
            <div className="container-fluid position-relative bg-white d-flex p-0">
                <Sidebar />
                <div className="content" id='adminNavbar'>
                    <Navbar />
                    <div className="container pt-4 px-4">
                        <div className="row g-4">
                            <div className="col-sm-12 col-xl-12">
                                <div className="bg-light rounded h-100 p-5">
                                    <section class="pricing-section">
                                        <div class="pricing-cards">
                                            <div class="pricing-card">
                                                <h2>Standard</h2>
                                                <div class="price">
                                                    <span class="currency">$</span>
                                                    <span class="amount">75</span>
                                                </div>
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                                <a href="#" class="btn">Buy Now</a>
                                            </div>
                                            <div class="pricing-card">
                                                <h2>Premium</h2>
                                                <div class="price">
                                                    <span class="currency">$</span>
                                                    <span class="amount">99</span>
                                                </div>
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                                <a href="#" class="btn">Buy Now</a>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Page;