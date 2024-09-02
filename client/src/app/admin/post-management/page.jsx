"use client";
import React, { useEffect, useState } from 'react';
import Sidebar from '../../../../components/admin/Sidebar';
import Navbar from '../../../../components/admin/Navbar';
import Footer from '../../../../components/admin/Footer';
import Link from 'next/link';
import { FaEye } from "react-icons/fa";
import axios from 'axios';

const Page = () => {

    const [postData, setPostData] = useState([]);

    const readAll = async () => {
        try {
            const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/api/auth/user/view-post");
            setPostData(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        readAll();
    }, []);

    return (
        <>
            <div className="container-fluid position-relative bg-white d-flex p-0">
                <Sidebar />
                <div className="content" id='adminNavbar'>
                    <Navbar />
                    <div className="col-sm-12 col-xl-12">
                        <div className="bg-light rounded h-100 p-5">
                            <h6 className="mb-4 title">Alert Management</h6>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">S.NO</th>
                                        <th scope="col">NAME</th>
                                        <th scope="col">EMAIL ID</th>
                                        <th scope="col">PHONE</th>
                                        <th scope="col">VIEW</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {postData.length > 0 ? (
                                        postData.map((item, index) => (
                                            <tr key={item._id}>
                                                <td>{index + 1}</td>
                                                <td>{item?.name}</td>
                                                <td>{item?.email}</td>
                                                <td>{item?.phone}</td>
                                                <td>
                                                    <Link href={`/admin/read-alert/${item?._id}`} className="eye-btn">
                                                        <FaEye />
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="text-center">
                                                No posts available
                                            </td>
                                        </tr>
                                    )}
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