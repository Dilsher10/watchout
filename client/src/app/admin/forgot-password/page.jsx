"use client";
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';


const Page = () => {

    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const data = { email: email }
            axios.post(process.env.NEXT_PUBLIC_API_URL + "/api/auth/admin/forgot-password", data)
                .then((res) => {
                    if (res.status == 200) {
                        toast.success("Email Sent Successfully");
                        window.location.href = '/admin/reset-password';
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
            <div className="container-fluid loginSec">
                <div className="row h-100 align-items-center justify-content-center">
                    <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                        <form onSubmit={handleSubmit}>
                            <div className="bg-light rounded p-4 p-sm-5 my-4 mx-3">
                                <div className="mb-3">
                                    <h3>Forgot Password</h3>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => { setEmail(e.target.value) }} />
                                    <label htmlFor="floatingInput">Email</label>
                                </div>
                                <button type="submit" className="btn login-btn">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page