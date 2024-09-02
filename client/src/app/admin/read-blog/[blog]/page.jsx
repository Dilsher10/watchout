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
        const fetchData = async () => {
            try {
                const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/auth/admin/read-blog/${params.blog}`);
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [params.blog]);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios.delete(process.env.NEXT_PUBLIC_API_URL + `/api/auth/admin/delete-blog/${params.blog}`)
                .then((res) => {
                    if (res.data.code == 200) {
                        toast.success("Blog Deleted Successfully");
                        window.location.href = '/admin/view-blog';
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
                                <h6 className="mb-4 title">Blog Details</h6>
                                {data ? (
                                    <>
                                        <div className='review'>
                                            <h5>Image:</h5>
                                            <img src={`../../blogs/${data.image}`} width={200} alt="" />
                                        </div>
                                        <div className='review'>
                                            <h5>Title:</h5>
                                            <p>{data.title}</p>
                                        </div>
                                        <div className='review'>
                                            <h5>Description:</h5>
                                            <p dangerouslySetInnerHTML={{ __html: data.content }} />
                                        </div>
                                        <div>
                                            <button className='btn btn-danger'>Delete Blog</button>
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
