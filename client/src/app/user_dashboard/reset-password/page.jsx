"use client";
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { IoEye, IoEyeOff } from "react-icons/io5";


const Page = () => {

    useEffect(() => {
        const inputs = document.querySelectorAll(".otp-field input");

        inputs.forEach((input, index) => {
            input.dataset.index = index;
            input.addEventListener("keyup", handleOtp);
            input.addEventListener("paste", handleOnPasteOtp);
        });

        function handleOtp(e) {
            const input = e.target;
            let value = input.value;
            let isValidInput = value.match(/[0-9a-z]/gi);
            input.value = "";
            input.value = isValidInput ? value[0] : "";

            let fieldIndex = input.dataset.index;
            if (fieldIndex < inputs.length - 1 && isValidInput) {
                input.nextElementSibling.focus();
            }

            if (e.key === "Backspace" && fieldIndex > 0) {
                input.previousElementSibling.focus();
            }

            if (fieldIndex == inputs.length - 1 && isValidInput) {
                submit();
            }
        }

        function handleOnPasteOtp(e) {
            const data = e.clipboardData.getData("text");
            const value = data.split("");
            if (value.length === inputs.length) {
                inputs.forEach((input, index) => (input.value = value[index]));
                submit();
            }
        }

        function submit() {
            let otp = "";
            inputs.forEach((input) => {
                otp += input.value;
            });
        }
    }, []);



    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');

    const handleOtpChange = (index, value) => {
        if (value.length > 1) {
            value = value.slice(-1);
        }
        setOtp((prevOtp) => {
            return prevOtp.substring(0, index) + value + prevOtp.substring(index + 1);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const data = { password: password, otp: otp }
            console.log(otp)
            axios.post(process.env.NEXT_PUBLIC_API_URL + "/api/auth/user/reset-password", data)
                .then((res) => {
                    if (res.data.code == 200) {
                        toast.success("Password Updated Successfully");
                        window.location.href = '/user_dashboard/login';
                    }
                })
                .catch((err) => {
                    toast.error("Invalid OTP");
                })
        } catch (error) {
            toast.error("Something went wrong");
        }
    };


    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }


    return (
        <>
            <div className="container-fluid loginSec">
                <div className="row h-100 align-items-center justify-content-center">
                    <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                        <form onSubmit={handleSubmit}>
                            <div className="bg-light rounded p-4 p-sm-5 my-4 mx-3">
                                <div className="mb-3">
                                    <h3>Reset Password</h3>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="" className='mb-2'>Enter OTP</label>
                                    <div className="otp-field">
                                        {[...Array(4)].map((_, index) => (
                                            <input
                                                key={index}
                                                type="text"
                                                maxLength="1"
                                                value={otp[index] || ''}
                                                onChange={(e) => handleOtpChange(index, e.target.value)}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type={showPassword ? "text" : "password"} className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => { setPassword(e.target.value) }} />
                                    <label htmlFor="floatingInput">Enter New Password</label>
                                    <i className='toggleIcon' onClick={togglePasswordVisibility}>
                                        {showPassword ? <IoEyeOff /> : <IoEye />}
                                    </i>
                                </div>
                                <button type="submit" className="btn login-btn mt-4">Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page