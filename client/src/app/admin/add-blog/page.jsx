"use client";
import React, { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Sidebar from '../../../../components/admin/Sidebar';
import Navbar from '../../../../components/admin/Navbar';
import Footer from '../../../../components/admin/Footer';
import axios from 'axios';
import { toast } from 'react-toastify';

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

const Page = () => {
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("image", image);
            formData.append("title", title);
            formData.append("content", content);
            axios.post(process.env.NEXT_PUBLIC_API_URL + "/api/auth/admin/add-blog", formData)
                .then((res) => {
                    if (res.status === 200) {
                        toast.success("Blog Added Successfully");
                        setImage('');
                        setTitle('');
                        setContent('');
                        window.location.href = '/admin/add-blog';
                    }
                })
                .catch((err) => {
                    toast.error("Something went wrong");
                });
        } catch (error) {
            toast.error("Something went wrong");
        }
    };

    return (
        <div className="container-fluid position-relative bg-white d-flex p-0">
            <Sidebar />
            <div className="content" id='adminNavbar'>
                <Navbar />
                <div className="col-sm-12 col-xl-12">
                    <div className="bg-light rounded h-100 p-4">
                        <form encType="multipart/form-data" onSubmit={handleSubmit}>
                            <div className='mb-4'>
                                <label htmlFor="" style={{ fontWeight: "600", marginBottom: "10px", fontSize: "18px" }}>Image</label>
                                <input type="file" className='form-control' name="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} required />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="" style={{ fontWeight: "600", marginBottom: "10px", fontSize: "18px" }}>Title</label>
                                <input type="text" className='form-control' name="title" onChange={(e) => { setTitle(e.target.value) }} required />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="" style={{ fontWeight: "600", marginBottom: "10px", fontSize: "18px" }}>Description</label>
                                <JoditEditor
                                    ref={editor}
                                    value={content}
                                    onChange={newContent => setContent(newContent)}
                                />
                            </div>
                            <div className='mb-4'>
                                <button type="submit" className='btn btn-primary'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Page;
