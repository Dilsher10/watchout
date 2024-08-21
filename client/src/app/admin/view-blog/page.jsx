"use client";
import React, { useEffect, useState } from 'react';
import Sidebar from '../../../../components/admin/Sidebar';
import Navbar from '../../../../components/admin/Navbar';
import Footer from '../../../../components/admin/Footer';
import Link from 'next/link';
import { FaEye } from "react-icons/fa";
import axios from 'axios';

const Page = () => {
    const [reviewData, setReviewData] = useState([]);
    const readAll = async () => {
        const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/api/auth/admin/reviews");
        setReviewData(res.data);
    }
    useEffect(() => {
        readAll();
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (
        <>
            <div className="container-fluid position-relative bg-white d-flex p-0">
                <Sidebar />
                <div className="content" id='adminNavbar'>
                    <Navbar />
                    <div className="col-sm-12 col-xl-12">
                        <div className="bg-light rounded h-100 p-4">
                            <h6 className="mb-4 title">Blogs</h6>
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">S.NO</th>
                                        <th scope="col">IMAGE</th>
                                        <th scope="col">DESCRIPTION</th>
                                        <th scope="col">READ BLOG</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        reviewData.map((item, index) => (
                                            <tr key={item?._id}>
                                                <td>{index + 1}</td>
                                                <td>{item?.name}</td>
                                                <td>{item?.isVerified ? 'Approved' : 'Not Approved'}</td>
                                                <td><Link className="eye-btn" href={`/admin/reviews/${item?._id}`}><FaEye /></Link></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Page;