"use client";
import React, { useEffect, useState } from 'react';
import Sidebar from '../../../../../components/user_dashboard/Sidebar';
import Navbar from '../../../../../components/user_dashboard/Navbar';
import Footer from '../../../../../components/user_dashboard/Footer';
import axios from 'axios';
import { toast } from 'react-toastify';

const Page = ({ params }) => {

    const [data, setData] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/auth/user/read-alert/${params.read}`);
                const result = await response.json();
                console.log(result)
                setData(result[0]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [params.read]);



    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios.delete(process.env.NEXT_PUBLIC_API_URL + `/api/auth/user/delete-alert/${params.read}`)
                .then((res) => {
                    if (res.data.code == 200) {
                        toast.success("Alert Deleted Successfully");
                        window.location.href = "/user_dashboard/view-alert";
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

                    <div className="col-sm-12 col-xl-12 py-4 px-5">
                        <form onSubmit={handleSubmit}>
                            <div className="bg-light rounded h-100 p-5">
                                <h6 className="mb-4 title">Alert Details</h6>
                                {data ? (
                                    <>
                                        <div className='review'>
                                            <h5>Image:</h5>
                                            <img src={`../../posts/${data.image}`} alt="" />
                                        </div>
                                        <div className='review'>
                                            <h5>Name: <span>{data.name}</span></h5>
                                            <h5>Phone: <span>{data.phone}</span></h5>
                                            <h5>Gender: <span>{data.gender}</span></h5>
                                            <h5>Email: <span>{data.email}</span></h5>
                                            <h5>Date of Birth: <span>{data.dob}</span></h5>
                                            <h5>Age: <span>{data.age}</span></h5>
                                            <h5>City: <span>{data.city}</span></h5>
                                            <h5>State: <span>{data.state}</span></h5>
                                            <h5>Country: <span>{data.country}</span></h5>
                                            <h5>Dating Period: <span>{data.dating}</span></h5>
                                            <h5>Alert Type: <span>{data.alertType}</span></h5>
                                            <h5>Ethnicity: <span>{data.ethnicity}</span></h5>
                                            <h5>Nationality: <span>{data.nationality}</span></h5>
                                            <h5>Description: <span>{data.description}</span></h5>
                                        </div>
                                        <div className='review'>
                                            <h5>Description:</h5>
                                            <p>{data.description}</p>
                                        </div>
                                        <div>
                                            <button className='btn btn-danger'>Delete Alert</button>
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