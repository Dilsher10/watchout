"use client";
import React, { useEffect, useState } from 'react';
import Sidebar from '../../../../components/user_dashboard/Sidebar';
import Navbar from '../../../../components/user_dashboard/Navbar';
import Footer from '../../../../components/user_dashboard/Footer';
import axios from 'axios';


const Page = () => {
    const [planData, setPlanData] = useState([]);
    const readAll = async () => {
        const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/api/auth/user/view-plans");
        setPlanData(res.data);
    }
    useEffect(() => {
        readAll();
    }, []);
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
                                            {
                                                planData.map((item) => (
                                                    <div class="pricing-card">
                                                        <h2>{item?.plan}</h2>
                                                        <div class="price">
                                                            <span class="amount">{item?.price}</span>
                                                        </div>
                                                        <p>{item?.details}</p>
                                                        <a href={`/user_dashboard/update-plan/${item._id}`} class="btn">Buy Now</a>
                                                    </div>
                                                ))
                                            }
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