"use client";
import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is imported
import { toast } from 'react-toastify'; // Ensure toast is imported
import Sidebar from '../../../../../components/user_dashboard/Sidebar';
import Navbar from '../../../../../components/user_dashboard/Navbar';
import Footer from '../../../../../components/user_dashboard/Footer';

const Page = ({ params }) => {
    const [reviewData, setReviewData] = useState({ comment: "" });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setReviewData({ ...reviewData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { comment } = reviewData;
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/user/add-review/${params.add}`, { comment });

            if (response.status === 200) {
                toast.success("Review Added Successfully");
                window.location.href = `/user_dashboard/add-review/${params.add}`;
            } else {
                toast.error("Failed to add review");
            }
        } catch (error) {
            toast.error("Something went wrong");
        }
    };

    return (
        <>
            <div className="container-fluid position-relative bg-white d-flex p-0">
                <Sidebar />
                <div className="content" id='adminNavbar'>
                    <Navbar />
                    <div className="container pt-4 px-4">
                        <div className="row g-4">
                            <div className="col-sm-12 col-xl-12">
                                <form onSubmit={handleSubmit}>
                                    <div className="bg-light rounded h-100 p-4">
                                        <h6 className="mb-4">Add Review</h6>
                                        <div>
                                            <textarea 
                                                className="form-control" 
                                                placeholder="Leave a comment here"
                                                style={{ height: "150px" }} 
                                                name="comment" 
                                                onChange={handleInput} 
                                                required
                                            />
                                        </div>
                                        <div>
                                            <button type='submit' className='btn btn-primary mt-4'>Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Page;
