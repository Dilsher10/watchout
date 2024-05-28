import React from 'react'
import Slider from "../../../components/Slider"
import Navbar from '../../../components/Navbar'
import Topbar from '../../../components/Topbar'
import Footer from '../../../components/Footer'

const Page = () => {
    return (
        <>
            <Topbar />
            <Navbar />

            {/* Header */}

            <section className='searchHeader'>
                <div className="container">
                    <form className="row g-3">
                        <div className="col-md-8">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon">
                                    <img src="/search-icon.png" className='img-fluid' id="line" alt="" />
                                </span>
                                <input className="form-control" list="datalistOptions" id="searchList" placeholder="Search" />
                                <datalist id="datalistOptions">
                                    <option value="San Francisco" />
                                    <option value="New York" />
                                    <option value="Seattle" />
                                    <option value="Los Angeles" />
                                    <option value="Chicago" />
                                </datalist>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" id='country' placeholder='country' />
                        </div>
                        <div className="col-2">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" />
                                <label className="form-check-label">
                                    Cheating
                                </label>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" />
                                <label className="form-check-label">
                                    Harassment
                                </label>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" />
                                <label className="form-check-label">
                                    Physical Abuse
                                </label>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" />
                                <label className="form-check-label">
                                    Play Boy/Girl
                                </label>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" />
                                <label className="form-check-label">
                                    Gold Digger
                                </label>
                            </div>
                        </div>
                        <div className="col-1">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" />
                                <label className="form-check-label">
                                    Toxic
                                </label>
                            </div>
                        </div>
                        <div className="col-1">
                            <div className="form-check">
                                <label className="form-check-label">
                                    More
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </section>


            <section className='multiSec' data-aos="fade-up">
                <div className="container mt-5" data-aos="fade-up">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <h2>Australia</h2>
                            <img src="/line.png" className='img-fluid' id="line" alt=""/>
                            <div className='div-1'>
                                <h3>Alerts</h3>
                                <img src="/vertical-line.png" className='img-fluid' alt="" />
                                <h3>6K+</h3>
                            </div>
                            <p className='text-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis </p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <img src="/map.png" className='img-fluid' alt=""/>
                        </div>
                    </div>
                </div>



                <div className="container formSec" data-aos="fade-up">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <h2>Search For Alerts</h2>
                            <p className='text-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis </p>
                            <button className='btn-3'>Join Now</button>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <form className="row g-3">
                                <div className="col-md-12">
                                    <select id="inputState" className="form-select">
                                        <option selected>Location</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="col-md-12">
                                    <select id="inputState" className="form-select">
                                        <option selected>Labels</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="col-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" />
                                        <label className="form-check-label">
                                            Cheating
                                        </label>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" />
                                        <label className="form-check-label">
                                            Harassment
                                        </label>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" />
                                        <label className="form-check-label">
                                            Physical Abuse
                                        </label>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" />
                                        <label className="form-check-label">
                                            Play Boy/Girl
                                        </label>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" />
                                        <label className="form-check-label">
                                            Gold Digger
                                        </label>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" />
                                        <label className="form-check-label">
                                            Toxic
                                        </label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <select id="inputState" className="form-select">
                                        <option selected>Gender</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <select id="inputState" className="form-select">
                                        <option selected>Ethnicity</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <select id="inputState" className="form-select">
                                        <option selected>Dating Period</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <select id="inputState" className="form-select">
                                        <option selected>Age</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <button className="searchBtn">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


            {/* Slider */}

            <div className="container" data-aos="fade-up">
                <Slider />
            </div>


            <Footer />
        </>
    )
}

export default Page