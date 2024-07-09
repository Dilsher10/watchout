"use client"
import React from 'react';

const Topbar = () => {
    return (
        <section className='topBar'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="card">
                            <div className="row g-0">
                                <div className="col-md-1">
                                    <img src="/phone.png" className="img-fluid" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p className="card-text">302-276-8580</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="card" id='card-2'>
                            <div className="row g-0">
                                <div className="col-1">
                                    <img src="/news.png" className="img-fluid" alt="..."/>
                                </div>
                                <div className="col-6">
                                    <div className="card-body" id='newsText'>
                                        <p className="card-text">News & Alert</p>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <ul>
                                        <li><img src="/x.png" alt=""/></li>
                                        <li><img src="/insta.png" alt=""/></li>
                                        <li><img src="/facebook.png" alt=""/></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Topbar