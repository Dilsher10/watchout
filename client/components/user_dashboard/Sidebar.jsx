"use client"
import React, { useEffect, useState } from 'react'
import { FaTachometerAlt } from "react-icons/fa";
import { FaLaptop } from 'react-icons/fa';
import { FaTh } from 'react-icons/fa';
import { FaChartBar } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';
import { FaPlus } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Link from 'next/link';

const Sidebar = () => {
  const [userId, setUserId] = useState('');
  useEffect(() => {
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.href === window.location.href) {
        link.setAttribute('aria-current', 'page')
      }
    })
    import('bootstrap/dist/js/bootstrap.bundle.min.js');

    const storedUserId = typeof window !== 'undefined' ? localStorage.getItem("userId") : null;
    if (storedUserId) {
      setUserId(storedUserId);
    }

  }, []);

  return (
    <>
      <div className="sidebar pe-4 pb-3">
        <nav className="navbar navbar-light">
          <Link href="#" className="navbar-brand mx-2 mb-3">
            <h3 className="title">DASHBOARD</h3>
          </Link>
          <div className="d-flex align-items-center ms-4 mb-4">
            <div className="position-relative"></div>
            <div className="ms-3">
              <h6 className="mb-0"></h6>
              <span></span>
            </div>
          </div>
          <div className="navbar-nav w-100">
            <Link href="/user_dashboard" className="nav-item nav-link"><div className="iconBox"><FaTachometerAlt className='sidebarIcon' /></div><span>Dashboard</span></Link>
            <Link href="/user_dashboard/post-alert" className="nav-item nav-link"><div className="iconBox"><FaLaptop className='sidebarIcon' /></div><span>Submit Alert</span></Link>
            <Link href="/user_dashboard/view-alert" className="nav-item nav-link"><div className="iconBox"><FaTh className='sidebarIcon' /></div><span>View Alerts</span></Link>
            <Link href="/user_dashboard/update-plan" className="nav-item nav-link"><div className="iconBox"><FaTh className='sidebarIcon' /></div><span>Update Plan</span></Link>
            <div className="nav-item dropdown">
              <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><div className="iconBox"><FaChartBar className='sidebarIcon' /></div><span>Review</span></Link>
              <div className="dropdown-menu bg-transparent border-0">
                <Link href={`/user_dashboard/add-review/${userId}`} className="dropdown-item"><FaPlus /> Add</Link>
                <Link href={`/user_dashboard/view-reviews/${userId}`} className="dropdown-item"><FaEye /> View</Link>
              </div>
            </div>
            <Link href="#" className="nav-item nav-link"><div className="iconBox"><FaFileAlt className='sidebarIcon' /></div><span>Pages</span></Link>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Sidebar;