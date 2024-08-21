"use client";
import React, { useEffect, useState } from 'react';
import Sidebar from '../../../../../components/admin/Sidebar';
import Navbar from '../../../../../components/admin/Navbar';
import Footer from '../../../../../components/admin/Footer';
import axios from 'axios';
import { toast } from 'react-toastify';

const Page = ({ params }) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');

        const fetchData = async () => {
            try {
                const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/auth/admin/view-review/${params.view}`);
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [params.view]);



    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios.put(process.env.NEXT_PUBLIC_API_URL + `/api/auth/admin/approve-review/${params.view}`)
                .then((res) => {
                    if (res.data.code == 200) {
                        toast.success("Review Approved Successfully");
                        window.location.href = '/admin/reviews';
                    }
                })
                .catch((err) => {
                    toast.error("Something went wrong");
                })
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

                    {/* Tabs */}

                    <div className="col-sm-12 col-xl-12">
                        <form onSubmit={handleSubmit}>
                            <div className="bg-light rounded h-100 p-4">
                                <h6 className="mb-4 title">User Review Details</h6>
                                {data ? (
                                    <>
                                        <div className='review'>
                                            <h5>User Name:</h5>
                                            <p>{data.name}</p>
                                        </div>
                                        <div className='review'>
                                            <h5>User Comment:</h5>
                                            <p>{data.comment}</p>
                                        </div>
                                        <div>
                                            {data?.isVerified ? <button className='btn btn-primary' disabled>Approved</button> : <button type="submit" className='btn btn-primary'>Approve</button>}
                                        </div>
                                    </>
                                ) : (
                                    <p>Loading...</p>
                                )}
                            </div>
                        </form>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Page;