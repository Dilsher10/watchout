"use client";
import React, { useEffect, useState } from 'react';
import Sidebar from '../../../../components/user_dashboard/Sidebar';
import Navbar from '../../../../components/user_dashboard/Navbar';
import Footer from '../../../../components/user_dashboard/Footer';
import Link from 'next/link';
import { FaEye } from "react-icons/fa";
import axios from 'axios';

const Page = () => {
    const [postData, setPostData] = useState([]);
    const [userId, setUserId] = useState(null);

    const readAll = async () => {
        try {
            const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/api/auth/user/view-post");
            setPostData(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        const storedUserId = localStorage.getItem("userId");
        setUserId(storedUserId);
        readAll();
    }, []);

    return (
        <>
            <div className="container-fluid position-relative bg-white d-flex p-0">
                <Sidebar />
                <div className="content" id='adminNavbar'>
                    <Navbar />
                    <div className="container pt-4 px-5">
                        <div className="row g-4">
                            <div className="col-sm-12 col-xl-12">
                                <div className="bg-light rounded h-100 p-5">
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
                                            {postData.filter(item => item.userId === userId).length > 0 ? (
                                                postData.filter(item => item.userId === userId).map((item, index) => (
                                                    <tr key={item._id}>
                                                        <td>{index + 1}</td>
                                                        <td>{item?.name}</td>
                                                        <td>{item?.email}</td>
                                                        <td>{item?.phone}</td>
                                                        <td>
                                                            <Link href={`/user_dashboard/read-alert/${item?._id}`} className="eye-btn">
                                                                <FaEye />
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="5" className="text-center">
                                                        No alerts available
                                                    </td>
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
        </>
    );
};

export default Page;
