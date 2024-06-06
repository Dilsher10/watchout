"use client";
import React, { useEffect, useState } from 'react';
import Sidebar from '../../../../components/user_dashboard/Sidebar';
import Navbar from '../../../../components/user_dashboard/Navbar';
import Footer from '../../../../components/user_dashboard/Footer';
import MUIDataTable from "mui-datatables";
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

    const columns = ["Name", "Email ID", "Phone", "Location", ""];

    const options = {
        filterType: 'checkbox',
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
                                <div className="bg-light rounded h-100 p-5">
                                    <MUIDataTable
                                        data={postData.map((item) => [
                                            item?.name,
                                            item?.email,
                                            item?.phone,
                                            `${item?.city}, ${item?.state}, ${item?.country}`,
                                            <Link href={`/view-details/${item?._id}`} className="eye-btn"><FaEye /></Link>
                                        ])}
                                        columns={columns}
                                        options={options}
                                    />
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

export default Page