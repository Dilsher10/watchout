"use client"
import React, { useEffect } from 'react'
import Navbar from '../../../components/Navbar'
import Topbar from '../../../components/Topbar'
import Footer from '../../../components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Page = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);
    return (
        <>
            <Topbar />
            <Navbar />

            {/* Header */}
            <section className='blogHeader'>
                <img src="/blog-header.png" className='img-fluid' alt="" />
            </section>


            <div className="container blogSec-1" data-aos="fade-up">
                <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-8" id="content">
                        <img src="/b-1.png" alt="" />
                        <p className='mt-5'>Explore our blog hub, where we explore the hints of contemporary relationships and the changing aspects of dating in today's era. Find articles illuminating self-care methods within relationships, highlighting the significance of equilibrium and personal wellness. Engage with visions directing the intricacies of dating in a tech-centric world, providing advice, strategies, and viewpoints to navigate these dynamic relationships. Immerse yourself in our arrangement of articles at the intersection of self-care, flourishing relationships, and the complexities of modern dating.</p>
                        <img src="/icons.png" alt=""/>
                        <button className='btn'>Read More</button>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="card">
                            <img src="/blog-1.png" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">How to Avoid Toxic Relationships</h5>
                                <p className="card-text">Self-Care in Relationships</p>
                                <img src="/icons.png" alt=""/>
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                        <div className="card">
                            <img src="/blog-2.png" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Exiting A Toxic Relationship</h5>
                                <p className="card-text">Dating Challenges and Triumphs</p>
                                <img src="/icons.png" alt="" />
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container blogSec-2" data-aos="fade-up">
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="card">
                            <img src="/blog-1.png" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Using WatchOut Alert to Avoid Toxic People</h5>
                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy.</p>
                                <img src="/icons.png" alt="" />
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="card">
                            <img src="/blog-2.png" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Dating in Digital Age</h5>
                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy.</p>
                                <img src="/icons.png" alt="" />
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="card">
                            <img src="/blog-3.png" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Self Care and Healing</h5>
                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy.</p>
                                <img src="/icons.png" alt=""/>
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container blogSec-3 m-auto mb-4" data-aos="fade-up">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="card mb-5">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="/blog-1.png" className="img-fluid" alt="" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">How to Avoid Toxic Relationships</h5>
                                        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                        <img src="/icons.png" alt="" />
                                        <a href="#" className="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-5">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="/blog-2.png" className="img-fluid" alt="" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Exiting A Toxic Relationship</h5>
                                        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                        <img src="/icons.png" alt="" />
                                        <a href="#" className="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-5">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="/blog-3.png" className="img-fluid" alt="" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Using WatchOut Alert to Avoid Toxic People</h5>
                                        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                        <img src="/icons.png" alt="" />
                                        <a href="#" className="btn btn-primary">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className='content'>
                            <img src="/b-1.png" className="img-fluid" alt="" />
                            <span>Dating in Digital Age</span>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.</p>
                            <p className='mb-4'>minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip suscipit lobortis nisl ut aliquip ex ea commodo.</p>
                            <img src="/icons.png" alt="" />
                            <button className='btn'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Page