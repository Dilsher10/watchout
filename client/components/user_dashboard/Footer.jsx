"use client"
import React from 'react'
import Link from 'next/link'
import { GoArrowUp } from "react-icons/go";

const Footer = () => {
    return (
        <>
            <div className="container-fluid pt-4 px-5">
                <div className="bg-light rounded-top p-4">
                    <div className="row">
                        <div className="col-12 text-center">
                            &copy; <Link href="#">Watchout</Link>, All Right Reserved.
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><GoArrowUp /></a>
        </>
    )
}

export default Footer