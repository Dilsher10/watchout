"use client";
import React, { useEffect, useState } from 'react';
import Sidebar from '../../../../../components/admin/Sidebar';
import Navbar from '../../../../../components/admin/Navbar';
import Footer from '../../../../../components/admin/Footer';

const Page = ({ params }) => {

    const [data, setData] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/auth/user/read-user/${params.read}`);
                const result = await response.json();
                console.log(result)
                setData(result[0]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [params.read]);


    return (
        <>
            <div className="container-fluid position-relative bg-white d-flex p-0">
                <Sidebar />
                <div className="content" id='adminNavbar'>
                    <Navbar />
                    <div className="col-sm-12 col-xl-12 py-4 px-5">
                        <form>
                            <div className="bg-light rounded h-100 p-5">
                                <h6 className="mb-4 title">User Details</h6>
                                {data ? (
                                    <>
                                        <div className='review'>
                                            <h5>First Name: <span>{data.fname}</span></h5>
                                            <h5>Last Name: <span>{data.lname}</span></h5>
                                            <h5>Gender: <span>{data.gender}</span></h5>
                                            <h5>Date of Birth: <span>{data.dob}</span></h5>
                                            <h5>City: <span>{data.city}</span></h5>
                                            <h5>State: <span>{data.state}</span></h5>
                                            <h5>Country: <span>{data.country}</span></h5>
                                            <h5>Phone: <span>{data.phone}</span></h5>
                                            <h5>Email: <span>{data.email}</span></h5>
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