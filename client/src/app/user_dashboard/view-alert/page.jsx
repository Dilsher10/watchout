"use client";
import React, { useEffect, useState } from 'react';
import Sidebar from '../../../../components/user_dashboard/Sidebar';
import Navbar from '../../../../components/user_dashboard/Navbar';
import Footer from '../../../../components/user_dashboard/Footer';
import Link from 'next/link';
import { FaEye } from "react-icons/fa";
import axios from 'axios';


const Page = () => {

    // Read All

    const [postData, setPostData] = useState([]);
    const readAll = async () => {
        const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/api/auth/user/view-post");
        setPostData(res.data);
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
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">NAME</th>
                                                <th scope="col">EMAIL ID</th>
                                                <th scope="col">PHONE</th>
                                                <th scope="col">LOCATION</th>
                                                <th scope="col">VIEW</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {postData.map((item) => (
                                                <tr key={item._id}>
                                                    <td>{item?.name}</td>
                                                    <td>{item?.email}</td>
                                                    <td>{item?.phone}</td>
                                                    <td>{`${item?.city}, ${item?.state}, ${item?.country}`}</td>
                                                    <td>
                                                        <Link href={`/view-details/${item?._id}`} className="eye-btn">
                                                            <FaEye />
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

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