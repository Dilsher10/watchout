"use client"
import React, { useEffect, useState } from 'react'
import Slider from "../../../components/Slider"
import Navbar from '../../../components/Navbar'
import Topbar from '../../../components/Topbar'
import Footer from '../../../components/Footer'
import { FaMapMarkerAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
const URL = process.env.NEXT_PUBLIC_API_URL + "/api/auth/user/search";

const Page = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);

    // Search

    const [hoveredCountry, setHoveredCountry] = useState(null);

    const handleMouseEnter = (country) => {
        setHoveredCountry(country);
    };

    const handleMouseLeave = () => {
        setHoveredCountry(null);
    };

    const [user, setUser] = useState({
        country: "",
        alertType: "",
        gender: "",
        ethnicity: "",
        dating: "",
        age: "",
    })

    const [responseData, setResponseData] = useState([]);
    const [message, setMessage] = useState("");

    const isEmpty = !responseData || responseData.length === 0;

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            });

            if (response.ok) {
                const res_data = await response.json();
                setUser({ country: "", alertType: "", gender: "", ethnicity: "", dating: "", age: "" });
                if (res_data.length > 0) {
                    setResponseData(res_data);
                } else {
                    setResponseData([]);
                    setMessage("Record not found");
                }
            } else {
                setResponseData(null);
                setMessage("Record not found");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <Topbar />
            <Navbar />

            {/* Header */}

            <section className='searchHeader'>
                <img src="../bg.png" alt="" className='img-fluid' />
            </section>

            {/* <section className='searchHeader'>
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
            </section> */}


            <section className='multiSec' data-aos="fade-up">
                <div className="container mt-5" data-aos="fade-up">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            {hoveredCountry === null ? (
                                <div className="defaultDiv">
                                    <h2>United States</h2>
                                    <img src="/line.png" className="img-fluid" id="line" alt="" />
                                    <div className="div-1">
                                        <h3>Alerts</h3>
                                        <img src="/vertical-line.png" className="img-fluid" alt="" />
                                        <h3>4K+</h3>
                                    </div>
                                    <p className="text-2">
                                        Amidst the vibrant US dating scene, the arrival of 4,000+ alerts acts as a decisive guide, steering individuals toward informed and secure romantic experiences. These alerts span from cautionary stories to invaluable advice, providing essential direction. They equip people to identify warning signs, understand genuine connections, and direct the intricacies of contemporary relationships prudently.
                                    </p>
                                </div>
                            ) : null}
                            <div className={`australia ${hoveredCountry === 'Australia' ? 'showAus' : ''}`}>
                                <h2>Australia</h2>
                                <img src="/line.png" className="img-fluid" id="line" alt="" />
                                <div className="div-1">
                                    <h3>Alerts</h3>
                                    <img src="/vertical-line.png" className="img-fluid" alt="" />
                                    <h3>1K+</h3>
                                </div>
                                <p className="text-2">
                                    Amidst the vibrant Australia dating scene, the arrival of 1,000+ alerts acts as a decisive guide, steering individuals toward informed and secure romantic experiences. These alerts span from cautionary stories to invaluable advice, providing essential direction. They equip people to identify warning signs, understand genuine connections, and direct the intricacies of contemporary relationships prudently.
                                </p>
                            </div>
                            <div className={`united-states ${hoveredCountry === 'United States' ? 'showUs' : ''}`}>
                                <h2>United States</h2>
                                <img src="/line.png" className="img-fluid" id="line" alt="" />
                                <div className="div-1">
                                    <h3>Alerts</h3>
                                    <img src="/vertical-line.png" className="img-fluid" alt="" />
                                    <h3>4K+</h3>
                                </div>
                                <p className="text-2">
                                    Amidst the vibrant US dating scene, the arrival of 4,000+ alerts acts as a decisive guide, steering individuals toward informed and secure romantic experiences. These alerts span from cautionary stories to invaluable advice, providing essential direction. They equip people to identify warning signs, understand genuine connections, and direct the intricacies of contemporary relationships prudently.
                                </p>
                            </div>
                            <div className={`canada ${hoveredCountry === 'Canada' ? 'showCan' : ''}`}>
                                <h2>Canada</h2>
                                <img src="/line.png" className="img-fluid" id="line" alt="" />
                                <div className="div-1">
                                    <h3>Alerts</h3>
                                    <img src="/vertical-line.png" className="img-fluid" alt="" />
                                    <h3>4K+</h3>
                                </div>
                                <p className="text-2">
                                    Amidst the vibrant Canada dating scene, the arrival of 4,000+ alerts acts as a decisive guide, steering individuals toward informed and secure romantic experiences. These alerts span from cautionary stories to invaluable advice, providing essential direction. They equip people to identify warning signs, understand genuine connections, and direct the intricacies of contemporary relationships prudently.
                                </p>
                            </div>
                            <div className={`russia ${hoveredCountry === 'Russia' ? 'showRus' : ''}`}>
                                <h2>Russia</h2>
                                <img src="/line.png" className="img-fluid" id="line" alt="" />
                                <div className="div-1">
                                    <h3>Alerts</h3>
                                    <img src="/vertical-line.png" className="img-fluid" alt="" />
                                    <h3>5K+</h3>
                                </div>
                                <p className="text-2">
                                    Amidst the vibrant Russia dating scene, the arrival of 5,000+ alerts acts as a decisive guide, steering individuals toward informed and secure romantic experiences. These alerts span from cautionary stories to invaluable advice, providing essential direction. They equip people to identify warning signs, understand genuine connections, and direct the intricacies of contemporary relationships prudently.
                                </p>
                            </div>
                            <div className={`united-kingdom ${hoveredCountry === 'United Kingdom' ? 'showUk' : ''}`}>
                                <h2>United Kingdom</h2>
                                <img src="/line.png" className="img-fluid" id="line" alt="" />
                                <div className="div-1">
                                    <h3>Alerts</h3>
                                    <img src="/vertical-line.png" className="img-fluid" alt="" />
                                    <h3>3K+</h3>
                                </div>
                                <p className="text-2">
                                    Amidst the vibrant UK dating scene, the arrival of 3,000+ alerts acts as a decisive guide, steering individuals toward informed and secure romantic experiences. These alerts span from cautionary stories to invaluable advice, providing essential direction. They equip people to identify warning signs, understand genuine connections, and direct the intricacies of contemporary relationships prudently.
                                </p>
                            </div>
                            <div className={`south-africa ${hoveredCountry === 'South Africa' ? 'showSa' : ''}`}>
                                <h2>South Africa</h2>
                                <img src="/line.png" className="img-fluid" id="line" alt="" />
                                <div className="div-1">
                                    <h3>Alerts</h3>
                                    <img src="/vertical-line.png" className="img-fluid" alt="" />
                                    <h3>2K+</h3>
                                </div>
                                <p className="text-2">
                                    Amidst the vibrant South Africa dating scene, the arrival of 2,000+ alerts acts as a decisive guide, steering individuals toward informed and secure romantic experiences. These alerts span from cautionary stories to invaluable advice, providing essential direction. They equip people to identify warning signs, understand genuine connections.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="map mt-4">
                                <FaMapMarkerAlt className="marker aus" onMouseEnter={() => handleMouseEnter('Australia')} onMouseLeave={handleMouseLeave} />
                                <FaMapMarkerAlt className="marker us" onMouseEnter={() => handleMouseEnter('United States')} onMouseLeave={handleMouseLeave} />
                                <FaMapMarkerAlt className="marker can" onMouseEnter={() => handleMouseEnter('Canada')} onMouseLeave={handleMouseLeave} />
                                <FaMapMarkerAlt className="marker rus" onMouseEnter={() => handleMouseEnter('Russia')} onMouseLeave={handleMouseLeave} />
                                <FaMapMarkerAlt className="marker uk" onMouseEnter={() => handleMouseEnter('United Kingdom')} onMouseLeave={handleMouseLeave} />
                                <img src="/map.png" className="img-fluid" alt="" />
                                <FaMapMarkerAlt className="marker sa" onMouseEnter={() => handleMouseEnter('South Africa')} onMouseLeave={handleMouseLeave} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container formSec" data-aos="fade-up">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <h2>Search For Alerts</h2>
                            <p className='text-2'>Improve your dating experience through personalized alerts. Customize your search based on location and warning labels such as harassment, physical abuse, deceit, and other crucial factors. Specify preferences such as gender, ethnicity, age, and dating timeline. Keep yourself safe and help others to be safe as well! We all know that past behavior is a predictor of future behavior and now you can stay away from and alert others to people who have caused more harm than good! Add Alerts and View Alerts for the protection of others and yourself! The person you give your heart too should deserve it!</p>
                            <button className='btn-3' data-bs-toggle="modal" data-bs-target="#signupModal">Join Now</button>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <form className="row g-3" onSubmit={handleSubmit}>
                                <div className="col-md-12">
                                    <select className="form-select" name="country" onChange={handleInput}>
                                        <option>Country</option>
                                        <option value="USA">USA</option>
                                        <option value="UK">UK</option>
                                        <option value="Russia">Russia</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Australia">Australia</option>
                                        <option value="South Africa">South Africa</option>
                                    </select>
                                </div>
                                <div className="col-md-12">
                                    <select className="form-select" name="alertType" onChange={handleInput}>
                                        <option>Alert Types</option>
                                        <option value="Cheating">Cheating</option>
                                        <option value="Harassment">Harassment</option>
                                        <option value="Physical Abuse">Physical Abuse</option>
                                        <option value="Play Boy/Girl">Play Boy/Girl</option>
                                        <option value="Gold Digger">Gold Digger</option>
                                        <option value="Toxic">Toxic</option>
                                        <option value="Control and Possessiveness">Control and Possessiveness</option>
                                        <option value="Isolation">Isolation</option>
                                        <option value="Verbal and Emotional Abuse">Verbal and Emotional Abuse</option>
                                        <option value="Physical/Mental Abuse">Physical/Mental Abuse</option>
                                        <option value="Financial Control">Financial Control</option>
                                        <option value="Narcissism">Narcissism</option>
                                        <option value="Infidelity and Betrayal">Infidelity and Betrayal</option>
                                        <option value="Manipulation and Deception">Manipulation and Deception</option>
                                        <option value="Stonewalling">Stonewalling</option>
                                        <option value="Jealousy and Insecurity">Jealousy and Insecurity</option>
                                        <option value="Lack of Respect">Lack of Respect</option>
                                        <option value="Addiction and Substance Abuse">Addiction and Substance Abuse</option>
                                        <option value="Passive-Aggressive Behavior">Passive-Aggressive Behavior</option>
                                        <option value="Dependence and Co-Dependence">Dependence and Co-Dependence</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <select className="form-select" name="gender" onChange={handleInput}>
                                        <option>Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <select className="form-select" name="ethnicity" onChange={handleInput}>
                                        <option>Ethnicity</option>
                                        <option value="American Indian or Alaska Native">American Indian or Alaska Native</option>
                                        <option value="Asian">Asian</option>
                                        <option value="Black or African American">Black or African American</option>
                                        <option value="Hispanic or Latino">Hispanic or Latino</option>
                                        <option value="Native Hawaiian or Other Pacific Islander">Native Hawaiian or Other Pacific Islander</option>
                                        <option value="White">White</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <select className="form-select" name="dating" onChange={handleInput}>
                                        <option>Dating Period</option>
                                        <option value="1 Month">1 Month</option>
                                        <option value="3 Months">3 Months</option>
                                        <option value="5 Months">5 Months</option>
                                        <option value="More than 1 Year">More than 1 Year</option>
                                        <option value="More than 2 Year">More than 2 Year</option>
                                        <option value="More than 3 Year">More than 3 Year</option>
                                        <option value="More than 4 Year">More than 4 Year</option>
                                        <option value="More than 5 Year">More than 5 Year</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <select className="form-select" name="age" onChange={handleInput}>
                                        <option>Age</option>
                                        <option value="18 - 25">18 - 25</option>
                                        <option value="25 - 30">25 - 30</option>
                                        <option value="30 - 35">30 - 35</option>
                                        <option value="35 - 40">35 - 40</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="searchBtn">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Table */}

                    <div>
                        <table className={`table table-hover ${isEmpty ? 'hide' : ''}`}>
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Country</th>
                                    <th scope="col">Alert Type</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Ethnicity</th>
                                    <th scope="col">Dating</th>
                                    <th scope="col">Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                {responseData ? (
                                    responseData.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.name}</td>
                                            <td>{item.country}</td>
                                            <td>{item.alertType}</td>
                                            <td>{item.gender}</td>
                                            <td>{item.ethnicity}</td>
                                            <td>{item.dating}</td>
                                            <td>{item.age}</td>
                                        </tr>
                                    ))
                                ) : (
                                    message && (
                                        <tr>
                                            <td colSpan="6" className="notFound">{message}</td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                        {isEmpty && <p className="notFound">{message}</p>}
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