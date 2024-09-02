"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify'

const Navbar = () => {

    const [adminName, setAdminName] = useState('');
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedAdminId = localStorage.getItem('adminId');
            const storedAdminName = localStorage.getItem('adminName');

            if (!storedAdminId) {
                router.push('/admin/login');
            } else {
                setAdminName(storedAdminName);
            }
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("adminId");
        localStorage.removeItem("adminName");
        toast.success("Logout Successfully");
        window.location.href = '/admin/login';
    };

    return (
        <>
            <nav className="navbar navbar-expand navbar-light sticky-top px-4 py-0" id="adminNavbar">
                <div className="navbar-nav align-items-center ms-auto">
                    <div className="nav-item dropdown">
                        <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <Image className="rounded-circle me-lg-2" src="/admin/user.jpg" alt="" width={40} height={40} />
                            <span className="d-none d-lg-inline-flex">
                                {adminName && adminName.charAt(0).toUpperCase() + adminName.slice(1)}
                            </span>

                        </Link>
                        <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <Link href="#" className="dropdown-item">My Profile</Link>
                            <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;