"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar'
import Topbar from '../../../components/Topbar'
import Footer from '../../../components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import Link from 'next/link';


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
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);
    return (
        <>
            <Topbar />
            <Navbar />

            {/* Header */}
            <section className='blogHeader'>
                <img src="/blog-header.png" className='img-fluid' alt="" />
            </section>


            <div className="container blogSec-2" data-aos="fade-up">
                <div className="row">
                    {blogData.map((item, index) => (
                        <div className="col-sm-12 col-md-4 col-lg-4 mb-2" key={item?._id}>
                            <div className="card">
                                <img src={`../blogs/${item?.image}`} className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">{item?.title}</h5>
                                    <p className="card-text">{stripHtml(item?.content)?.substring(0, 50)}...</p>
                                    <img src="/icons.png" alt="" />
                                    <Link href={`/blog/${item?._id}`} className="btn btn-primary">Read More</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Page