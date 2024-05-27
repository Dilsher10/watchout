"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {
    useEffect(() => {
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.href === window.location.href) {
                link.setAttribute('aria-current', 'page');
            }
        })
    }, []);
    return (
        <section className='navBar sticky-top'>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link className="navbar-brand" href="/">
                            <img src="/logo.png" alt="" className='logo' />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0" id='navbar-nav'>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categories
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" href="#">Cheating</Link></li>
                                        <li><Link className="dropdown-item" href="#">Harassment</Link></li>
                                        <li><Link className="dropdown-item" href="#">Physical Abuse</Link></li>
                                        <li><Link className="dropdown-item" href="#">Play Boy/Girl</Link></li>
                                        <li><Link className="dropdown-item" href="#">Gold Digger</Link></li>
                                        <li><Link className="dropdown-item" href="#">Toxic</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/search">Search</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/blog">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/about">About us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/contact">Contact</Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <Link href="/user_dashboard/login" className="btn btn-outline-success" id='btn-1'>Login</Link>
                                <button type='button' className='btn btn-outline-success' id='btn-2' data-bs-toggle="modal" data-bs-target="#signupModal">Signup</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default Navbar;