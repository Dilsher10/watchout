"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link'


export default class BlogSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <div className="card">
                            <img src="/blog-1.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Dating In Digital Age</h5>
                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                <Link href="#" className="btn">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <img src="/blog-2.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Effective  Communication</h5>
                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                <Link href="#" className="btn">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <img src="/blog-3.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Self Care & Relationship</h5>
                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                <Link href="#" className="btn">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <img src="/blog-1.png" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Dating In Digital Age</h5>
                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                <Link href="#" className="btn">Read More</Link>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}
