"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify'

const Navbar = () => {

    const [userName, setUserName] = useState('');
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedUserId = localStorage.getItem('userId');
            const storedUserName = localStorage.getItem('userName');

            if (!storedUserId) {
                router.push('/user_dashboard/login');
            } else {
                setUserName(storedUserName);
            }
        }
    }, [router]);

    const userLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("userName");
        toast.success("Logout Successfully");
        window.location.href = '/user_dashboard/login';
    };

    return (
        <>
            <nav className="navbar navbar-expand navbar-light sticky-top px-4 py-0" id="adminNavbar">
                <Link href="/" className="siteName">Go to Home</Link>
                <div className="navbar-nav align-items-center ms-auto">
                    <div className="nav-item dropdown">
                        <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <Image className="rounded-circle me-lg-2" src="/admin/user.jpg" alt="" width={40} height={40} />
                            {userName && userName.charAt(0).toUpperCase() + userName.slice(1)}
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