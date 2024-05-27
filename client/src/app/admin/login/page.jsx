"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const URL = process.env.NEXT_PUBLIC_API_URL + "/api/auth/admin/login";

const Page = () => {

    // On Change

    const [user, setUser] = useState({
        email: "",
        password: "",
    })


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
            const response = await fetch(URL,{
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(user)
            });

            console.log("login form", response);

            if(response.ok){
                alert("Login Successfully");
                const res_data = await response.json();
                localStorage.setItem("token", res_data.token);

                setUser({email: "", password: ""});
                window.location.href = '/admin';
            }
            else{
                alert("Invalid Input");
                console.log("Invalid Input");
            }
        } catch (error) {
            console.log(error);
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
                                    <h3>Admin Login</h3>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" name='email' className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleInput} />
                                    <label htmlFor="floatingInput">Email</label>
                                </div>
                                <div className="form-floating mb-4">
                                    <input type="password" name='password' className="form-control" id="floatingPassword" placeholder="Password" onChange={handleInput} />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                    </div>
                                    <Link href="#">Forgot Password</Link>
                                </div>
                                <button type="submit" className="btn login-btn">Log in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page