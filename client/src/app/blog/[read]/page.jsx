"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../../../../components/Navbar'
import Topbar from '../../../../components/Topbar'
import Footer from '../../../../components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Page = ({ params }) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/auth/admin/read-blog/${params.read}`);
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, [params.read]);


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
                    {data ? (
                        <p dangerouslySetInnerHTML={{ __html: data.content }} />
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Page