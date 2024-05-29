"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

const Navbar = () => {

    const [token, setToken] = useState('');

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            redirect('/user_dashboard/login');
        }

        const storedToken = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const userLogout = () => {
        setToken("");
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        alert("Logout Successfully");
        window.location.href = '/user_dashboard/login';
    };

    return (
        <>
            <nav className="navbar navbar-expand navbar-light sticky-top px-4 py-0" id="adminNavbar">
                <div className="navbar-nav align-items-center ms-auto">
                    <div className="nav-item dropdown">
                        <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <Image className="rounded-circle me-lg-2" src="/admin/user.jpg" alt="" width={40} height={40} />
                            <span className="d-none d-lg-inline-flex">John Doe</span>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <Link href="#" className="dropdown-item">My Profile</Link>
                            <button className="dropdown-item" onClick={userLogout}>Logout</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;