"use client";
import React, { useState } from 'react';
import Sidebar from '../../../../components/admin/Sidebar';
import Navbar from '../../../../components/admin/Navbar';
import Footer from '../../../../components/admin/Footer';
import axios from 'axios';
import { toast } from 'react-toastify';

const Page = () => {

    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("image", image);
            formData.append("title", title);
            formData.append("description", description);
            axios.post(process.env.NEXT_PUBLIC_API_URL + "/api/auth/admin/add-blog", formData)
                .then((res) => {
                    if (res.status == 200) {
                        toast.success("Blog Added Successfully");
                        window.location.href = '/admin/add-blog';
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
                    <div className="col-sm-12 col-xl-12">
                        <div className="bg-light rounded h-100 p-4">
                            <form enctype="multipart/form-data" onSubmit={handleSubmit}>
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
                                    <textarea className='form-control' name="description" rows="15" onChange={(e) => { setDescription(e.target.value) }} required></textarea>
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
        </>
    )
}

export default Page;