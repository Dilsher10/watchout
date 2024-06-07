"use client"
import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className="container-fluid pt-4 px-4">
            <div className="bg-light rounded-top p-4">
                <div className="row">
                    <div className="col-12 text-center">
                        &copy; <Link href="#">Watchout</Link>, All Right Reserved.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer