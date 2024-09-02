"use client";
import React, { useEffect, useState } from 'react';
import Sidebar from '../../../../components/admin/Sidebar';
import Navbar from '../../../../components/admin/Navbar';
import Footer from '../../../../components/admin/Footer';
import Link from 'next/link';
import { FaEye } from "react-icons/fa";
import axios from 'axios';

// Function to strip HTML tags from a string
const stripHtml = (html) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || '';
};

const Page = () => {
    const [blogData, setBlogData] = useState([]);

    const readAll = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/admin/blogs`);
            setBlogData(res.data);
        } catch (error) {
            console.error('Error fetching blog data:', error);
        }
    };

    useEffect(() => {
        readAll();
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (
        <div className="container-fluid position-relative bg-white d-flex p-0">
            <Sidebar />
            <div className="content" id='adminNavbar'>
                <Navbar />
                <div className="col-sm-12 col-xl-12">
                    <div className="bg-light rounded h-100 p-4">
                        <h6 className="mb-4 title">Blogs</h6>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">S.NO</th>
                                    <th scope="col">IMAGE</th>
                                    <th scope="col">DESCRIPTION</th>
                                    <th scope="col">READ BLOG</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blogData.map((item, index) => (
                                    <tr key={item?._id}>
                                        <td>{index + 1}</td>
                                        <td><img src={`../blogs/${item?.image}`} width={50} alt="Blog Image" /></td>
                                        <td>{stripHtml(item?.content)?.substring(0, 50)}...</td>
                                        <td>
                                            <Link className="eye-btn" href={`/admin/read-blog/${item?._id}`}>
                                                <FaEye />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Page;
