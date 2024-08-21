"use client";

import React, { useEffect, useState } from 'react';
import Sidebar from '../../../../../components/user_dashboard/Sidebar';
import Navbar from '../../../../../components/user_dashboard/Navbar';
import Footer from '../../../../../components/user_dashboard/Footer';
import { FaEye } from "react-icons/fa";
import Link from 'next/link';

const Page = ({ params }) => {
    const [reviewData, setReviewData] = useState([]);

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');

        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/user/view-reviews/${params.view}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setReviewData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [params.view]);

    return (
        <div className="container-fluid position-relative bg-white d-flex p-0">
            <Sidebar />
            <div className="content" id="adminNavbar">
                <Navbar />
                <div className="container pt-4 px-4">
                    <div className="row g-4">
                        <div className="col-sm-12 col-xl-12">
                            <div className="bg-light rounded h-100 p-4">
                                <h6 className="mb-4">View Reviews</h6>
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">S.NO</th>
                                            <th scope="col">COMMENT</th>
                                            <th scope="col">STATUS</th>
                                            <th scope="col">VIEW</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {reviewData.length > 0 ? (
                                            reviewData.map((review, index) => (
                                                <tr key={review._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{review.comment?.substring(0, 70)}...</td>
                                                    <td>{review.isVerified ? 'Approved' : 'Not Approved'}</td>
                                                    <td>
                                                        <Link className="eye-btn" href={`/user_dashboard/read-review/${review._id}`}>
                                                            <FaEye />
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="4" className="text-center">No reviews available</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Page;
