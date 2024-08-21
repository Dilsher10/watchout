"use client"
import React, { useEffect } from 'react'
import { FaTachometerAlt } from "react-icons/fa";
import { FaLaptop } from 'react-icons/fa';
import { FaTh } from 'react-icons/fa';
import { FaKeyboard } from 'react-icons/fa';
import { FaTable } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import Link from 'next/link';

const Sidebar = () => {
  useEffect(() => {
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.href === window.location.href) {
        link.setAttribute('aria-current', 'page')
      }
    })
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
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
            <Link href="/admin" className="nav-item nav-link"><div className="iconBox"><FaTachometerAlt className='sidebarIcon' /></div><span>Dashboard</span></Link>
            <Link href="#" className="nav-item nav-link"><div className="iconBox"><FaLaptop className='sidebarIcon' /></div><span>User Management</span></Link>
            <Link href="#" className="nav-item nav-link"><div className="iconBox"><FaTh className='sidebarIcon' /></div><span>Post Management</span></Link>
            <Link href="/admin/subscription_management" className="nav-item nav-link"><div className="iconBox"><FaKeyboard className='sidebarIcon' /></div><span>Subcription Management</span></Link>
            <Link href="#" className="nav-item nav-link"><div className="iconBox"><FaTable className='sidebarIcon' /></div><span>Static Content Management</span></Link>
            <Link href="/admin/reviews" className="nav-item nav-link"><div className="iconBox"><FaEdit className='sidebarIcon' /></div><span>Reviews</span></Link>
            <div className="nav-item dropdown">
              <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><div className="iconBox"><FaBook className='sidebarIcon' /></div><span>Blogs</span></Link>
              <div className="dropdown-menu bg-transparent border-0">
                <Link href="/admin/add-blog/" className="dropdown-item"><FaPlus /> Add</Link>
                <Link href="/admin/view-blog/" className="dropdown-item"><FaEye /> View</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Sidebar;