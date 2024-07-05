"use client"
import React, { useEffect } from 'react'
import { FaTachometerAlt } from "react-icons/fa";
import { FaLaptop } from 'react-icons/fa';
import { FaTh } from 'react-icons/fa';
import { FaKeyboard } from 'react-icons/fa';
import { FaTable } from 'react-icons/fa';
import { FaChartBar } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';
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
            <Link href="/user_dashboard" className="nav-item nav-link"><div className="iconBox"><FaTachometerAlt className='sidebarIcon' /></div><span>Dashboard</span></Link>
            <Link href="/user_dashboard/post-alert" className="nav-item nav-link"><div className="iconBox"><FaLaptop className='sidebarIcon' /></div><span>Submit Alert</span></Link>
            <Link href="/user_dashboard/view-alert" className="nav-item nav-link"><div className="iconBox"><FaTh className='sidebarIcon' /></div><span>View Alerts</span></Link>
            <Link href="/user_dashboard/update-plan" className="nav-item nav-link"><div className="iconBox"><FaKeyboard className='sidebarIcon' /></div><span>Update Plan</span></Link>
            <Link href="#" className="nav-item nav-link"><div className="iconBox"><FaTable className='sidebarIcon' /></div><span>Tables</span></Link>
            <Link href="#" className="nav-item nav-link"><div className="iconBox"><FaChartBar className='sidebarIcon' /></div><span>Charts</span></Link>
            <Link href="#" className="nav-item nav-link"><div className="iconBox"><FaFileAlt className='sidebarIcon' /></div><span>Pages</span></Link>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Sidebar;