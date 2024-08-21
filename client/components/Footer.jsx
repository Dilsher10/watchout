"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Link from 'next/link';

const Footer = () => {

    const [inputUser, setInputUser] = useState({
        fname: "",
        lname: "",
        gender: "",
        dob: "",
        city: "",
        state: "",
        country: "",
        phone: "",
        email: "",
        ethnicity: "",
        password: "",
    })

    const handleChange = (e) => {
        setInputUser({
            ...inputUser,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/api/auth/user/register", inputUser);
            if (response) {
                toast.warning("Verify your account");
                window.location.href = '/user_dashboard/verify-account';
            } else {
                toast.error("Something went wrong");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Something went wrong");
        }
    };



    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <img src="/logo.png" alt="" />
                            <div className="card mb-4 mt-4">
                                <div className="row g-0">
                                    <div className="col-md-1">
                                        <img src="/footer_icon.png" className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-11">
                                        <div className="card-body">
                                            <p className="card-text">Journeys of Heartbreak: Stories Shared on WatchOut Alert</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="row g-0">
                                    <div className="col-md-1">
                                        <img src="/footer_icon.png" className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-11">
                                        <div className="card-body">
                                            <p className="card-text">Peeling Back the Layers: Exploring WatchOut Alert's Narratives</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-1">
                                        <img src="/footer_icon.png" className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-11">
                                        <div className="card-body">
                                            <p className="card-text">From Deceit to Strength: Genuine Tales on WatchOut Alert</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <img src="/blog-2.png" className='img-fluid' id='footerImg' alt="" />
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-1">
                                        <img src="/footer_icon.png" className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-11">
                                        <div className="card-body">
                                            <p className="card-text">Lessons in Love and Loss: Echoes from WatchOut Alert</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="row g-0">
                                    <div className="col-md-1">
                                        <img src="/footer_icon.png" className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-11">
                                        <div className="card-body">
                                            <p className="card-text">Revealing Fraud: Insider Stories from WatchOut Alert's Community</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <h1>Follow Us</h1>
                            <ul className='followList'>
                                <li><img src="/facebook.png" alt="" /><Link href="" className='followLink'>www.facebook.com</Link></li>
                                <li><img src="/insta.png" alt="" /><Link href="" className='followLink'>www.insta.com</Link></li>
                                <li><img src="/x.png" alt="" /><Link href="" className='followLink'>www.twitter.com</Link></li>
                            </ul>
                        </div>
                    </div>

                    <hr />

                    <div className="row">
                        <div className="col">
                            <p className='bottomText-1'>@Copyright 2024 By WatchOut Alert</p>
                        </div>
                    </div>
                </div>
            </footer>


            {/* Signup Modal */}

            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="signupModalLabel">User Sign Up</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-6">
                                        <label htmlFor="">First Name</label>
                                        <input type="text" className="form-control" placeholder="Enter first name" name="fname" onChange={handleChange} required />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="">Last Name</label>
                                        <input type="text" className="form-control" placeholder="Enter last name" name="lname" onChange={handleChange} required />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="">Gender</label>
                                        <select className="form-select" name="gender" onChange={handleChange}>
                                            <option selected>Select gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="">Date of Birth</label>
                                        <input type="date" className="form-control" name="dob" onChange={handleChange} required />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="">City</label>
                                        <input type="text" className="form-control" placeholder="Enter city" name="city" onChange={handleChange} required />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="">State</label>
                                        <input type="text" className="form-control" placeholder="Enter state" name="state" onChange={handleChange} required />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="">Country</label>
                                        <input type="text" className="form-control" placeholder="Enter country" name="country" onChange={handleChange} required />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="">Phone Number</label>
                                        <input type="text" className="form-control" placeholder="Enter phone number" name="phone" onChange={handleChange} required />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="">Email</label>
                                        <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={handleChange} required />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="">Ethnicity</label>
                                        <input type="text" className="form-control" placeholder="Enter ethnicity" name="ethnicity" onChange={handleChange} required />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="">Password</label>
                                        <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={handleChange} required />
                                    </div>
                                    <div className="col-6">
                                        <button type='submit' className='btn'>Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;