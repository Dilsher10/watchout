"use client";
import React, { useEffect, useState } from 'react';
import Sidebar from '../../../../../components/user_dashboard/Sidebar';
import Navbar from '../../../../../components/user_dashboard/Navbar';
import Footer from '../../../../../components/user_dashboard/Footer';
import axios from 'axios';
import { toast } from 'react-toastify';

const Page = ({ params }) => {

    const [data, setData] = useState(null);

    const [myId, setMyId] = useState('');

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');

        const storedId = typeof window !== 'undefined' ? localStorage.getItem("userId") : null;
        if (storedId) {
            setMyId(storedId);
        }

        const fetchData = async () => {
            try {
                const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/auth/user/read-review/${params.read}`);
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
            axios.delete(process.env.NEXT_PUBLIC_API_URL + `/api/auth/user/delete-review/${params.read}`)
                .then((res) => {
                    if (res.data.code == 200) {
                        toast.success("Review Deleted Successfully");
                        window.location.href = `/user_dashboard/view-reviews/${myId}`;
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
                                            <h5>User Comment:</h5>
                                            <p>{data.comment}</p>
                                        </div>
                                        <div>
                                            <button className='btn btn-danger'>Delete Comment</button>
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