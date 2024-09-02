"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.href === window.location.href) {
                link.setAttribute('aria-current', 'page');
            }
        })

        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }

    }, []);
    return (
        <section className='navBar sticky-top'>
            <div className="container-fluid p-0">
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
                                        <li><Link className="dropdown-item" href="#">Play Boy/Girl</Link></li>
                                        <li><Link className="dropdown-item" href="#">Gold Digger</Link></li>
                                        <li><Link className="dropdown-item" href="#">Toxic</Link></li>
                                        <li><Link className="dropdown-item" href="#">Control and Possessiveness</Link></li>
                                        <li><Link className="dropdown-item" href="#">Isolation</Link></li>
                                        <li><Link className="dropdown-item" href="#">Verbal and Emotional Abuse</Link></li>
                                        <li><Link className="dropdown-item" href="#">Physical/Mental Abuse</Link></li>
                                        <li><Link className="dropdown-item" href="#">Financial Control</Link></li>
                                        <li><Link className="dropdown-item" href="#">Narcissism</Link></li>
                                        <li><Link className="dropdown-item" href="#">Infidelity and Betrayal</Link></li>
                                        <li><Link className="dropdown-item" href="#">Manipulation and Deception</Link></li>
                                        <li><Link className="dropdown-item" href="#">Stonewalling</Link></li>
                                        <li><Link className="dropdown-item" href="#">Jealousy and Insecurity</Link></li>
                                        <li><Link className="dropdown-item" href="#">Lack of Respect</Link></li>
                                        <li><Link className="dropdown-item" href="#">Addiction and Substance Abuse</Link></li>
                                        <li><Link className="dropdown-item" href="#">Passive-Aggressive Behavior</Link></li>
                                        <li><Link className="dropdown-item" href="#">Dependence and Co-Dependence</Link></li>
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
                                {isAuthenticated ? (
                                    <Link href="/user_dashboard/" className="btn btn-outline-success" id='btn-1'>My Account</Link>
                                ) : (
                                    <>
                                        <Link href="/user_dashboard/login" className="btn btn-outline-success" id='btn-1'>Log In</Link>
                                        <button type='button' className='btn btn-outline-success' id='btn-2' data-bs-toggle="modal" data-bs-target="#signupModal">Sign Up</button>
                                    </>
                                )}
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default Navbar;