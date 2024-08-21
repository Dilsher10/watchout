"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { IoEye, IoEyeOff } from "react-icons/io5";

const URL = process.env.NEXT_PUBLIC_API_URL + "/api/auth/user/login";

const Page = () => {

    // On Change

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const [showPassword, setShowPassword] = useState(false);

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });
    };


    // On Submit


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            });

            console.log("login form", response);

            if (response.ok) {
                const res_data = await response.json();
                localStorage.setItem("token", res_data.token);
                localStorage.setItem("userId", res_data.userId);

                setUser({ email: "", password: "" });
                toast.success("Login Successfully");
                window.location.href = '/user_dashboard';

            }
            else {
                toast.error("Invalid Input");
            }
        } catch (error) {
            console.log(error);
        }
    };


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    return (
        <>
            <div className="container-fluid loginSec">
                <div className="row h-100 align-items-center justify-content-center">
                    <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                        <form onSubmit={handleSubmit}>
                            <div className="bg-light rounded p-4 p-sm-5 my-4 mx-3">
                                <div className="mb-3">
                                    <h3>User Log In</h3>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" name='email' className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleInput} required/>
                                    <label htmlFor="floatingInput">Email</label>
                                </div>
                                <div className="form-floating mb-4">
                                    <input type={showPassword ? "text" : "password"} name='password' className="form-control" id="floatingPassword" placeholder="Password" onChange={handleInput} required/>
                                    <label htmlFor="floatingPassword">Password</label>
                                    <i className='toggleIcon' onClick={togglePasswordVisibility}>
                                    {showPassword ? <IoEyeOff /> : <IoEye />}
                                </i>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                    </div>
                                    <Link href="/user_dashboard/forgot-password">Forgot Password</Link>
                                </div>
                                <button type="submit" className="btn login-btn">Log In</button>
                                <div className="d-flex align-items-center justify-content-between mt-4">
                                    <label className="form-check-label" htmlFor="exampleCheck1">No Account Yet?</label>
                                    <Link href="/">Sign Up Now</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page