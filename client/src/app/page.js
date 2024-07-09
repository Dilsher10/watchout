"use client";
import { React, useEffect, useState } from "react";
import BlogSlider from "../../components/BlogSlider";
import Slider from "../../components/Slider";
import TestimonialSlider from "../../components/TestimonialSlider";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../../components/Navbar';
import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";


export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [hoveredCountry, setHoveredCountry] = useState(null);

  const handleMouseEnter = (country) => {
    setHoveredCountry(country);
  };

  const handleMouseLeave = () => {
    setHoveredCountry(null);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
    });
    import('bootstrap/dist/js/bootstrap.bundle.min.js');

    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }

  }, []);


  return (
    <>
      <Topbar />
      <Navbar />

      {/* Header */}

      <header>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <h1>STOP DATING BLINDLY</h1>
              <h3>Before Dating Watchout</h3>
              <p>Are you tired of swiping left or right, hoping to be matched with that special person only to find in the end that the individual who you started to grow close to and began to trust was there to manipulate and exploit you?  At Watchout Alert, we are on a mission to revolutionize the dating scene in addition to relationships overall by empowering you with the knowledge and tools you need to protect yourself against individuals whose sole purpose is to run game by being misleading, fake and phony!</p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <img src="/home-1.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </header>

      {/* Icons Section */}

      <section className='iconSec' data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="card">
                <img src="/star.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Review</h5>
                  <h5 className="card-title">322K+</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="card">
                <img src="/sticker.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Happy Users</h5>
                  <h5 className="card-title">47K+</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="card">
                <img src="/team.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Members</h5>
                  <h5 className="card-title">322+</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slider */}

      <div className="container" data-aos="fade-up">
        <Slider />
      </div>

      <section className='groupSec' data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <h1>Simple & Quick Alert System! </h1>
              <p>Submitting or viewing alerts has never been easier. Our user-friendly interface ensures a smooth experience, allowing you to swiftly submit any concerns or browse through alerts with just a few clicks. Whether you're reporting suspicious activity or staying updated on potential risks, our system streamlines the process, keeping you informed and vigilant. Stay ahead of the curve and maintain your safety effortlessly with our intuitive alert system.</p>
              {isAuthenticated ? (
                <>
                  <Link href="/user_dashboard" className='btn-2'>Submit Alert</Link>
                  <Link href="/user_dashboard" className='btn-1'>View Alerts</Link>
                </>
              ) : (
                <>
                  <Link href="/user_dashboard/login" className='btn-2'>Submit Alert</Link>
                  <Link href="/user_dashboard/login" className='btn-1'>View Alerts</Link>
                </>
              )}
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <img src="/group-img.png" alt="" className='img-fluid' />
            </div>
          </div>
        </div>
      </section>


      <div className="container processSec" data-aos="fade-up">
        <h1 className="mb-5">Watchout Alert Steps</h1>
        <div className="row">
          <div className="col">
            <div className="card" data-bs-toggle="modal" data-bs-target="#signupModal">
              <img src="/process-1.png" className="img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Create an<br /> Account</h5>
                <p>Join Watchout for a secure dating journey. Set up your profile and access a vigilant community dedicated to safety.</p>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card">
              <img src="/process-arrow.png" className="img-fluid" id='arrowImg' alt="..." />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="/process-2.png" className="img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Watchout <br /> Alerts</h5>
                <p>Stay updated on dating risks with real-time alerts. Contribute to a safer environment by staying informed.</p>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card">
              <img src="/process-arrow.png" className="img-fluid" id='arrowImg' alt="..." />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="/process-3.png" className="img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Beware</h5>
                <p>Be cautious of red flags and deceitful behaviors. Trust your instincts and use shared experiences to stay safe.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className='multiSec' data-aos="fade-up">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              {isAuthenticated ? (
                <Link href="/user_dashboard">
                  <img src="/home-2.png" className="img-fluid" id="multiImg" alt="" />
                </Link>
              ) : (
                <Link href="/user_dashboard/login">
                  <img src="/home-2.png" className="img-fluid" id="multiImg" alt="" />
                </Link>
              )}
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-2">
                    <img src="/user.png" className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Communication is Key</h5>
                      <p className="card-text">Effective communication lays the foundation for a healthy relationship. Watchout for partners who dodge important conversations, exhibit controlling behavior, or refuse to listen to your needs and feelings.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-2">
                    <img src="/user.png" className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Trusting Your Intuition</h5>
                      <p className="card-text">Your gut feeling is a powerful tool. If something feels off or ‘is’ too good to be true, take the time to evaluate the situation. Trusting your intuition can safeguard you from entering relationships that might not be right for you.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-2">
                    <img src="/user.png" className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Understanding Compatibility:</h5>
                      <p className="card-text">Compatibility goes beyond shared interests; it encompasses values, goals, and life trajectories. Before diving deep, assess whether your potential partner aligns with your core beliefs and long-term aspirations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


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
              <p className='text-2'>Improve your dating experience through personalized alerts. Customize your search based on location and warning labels encompassing harassment, physical abuse, deceit, and other crucial factors. Specify preferences such as gender, ethnicity, age, and dating timeline to create a safety net. Take control of your safety by setting personalized alerts aligned with your dating preferences, ensuring protection against possible concerns in relationships.</p>
              <button className='btn-3'>Join Now</button>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <form className="row g-3">
                <div className="col-md-12">
                  <select className="form-select">
                    <option selected>Location</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-md-12">
                  <select className="form-select">
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
                  <select className="form-select">
                    <option selected>Gender</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-6">
                  <select className="form-select">
                    <option selected>Ethnicity</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <select className="form-select">
                    <option selected>Dating Period</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <select className="form-select">
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


      {/* Testimonial Slider */}

      <section className='testimonialSec' data-aos="fade-up">
        <div className="container">
          <TestimonialSlider />
        </div>
      </section>


      {/* Blogs Section */}

      <section className="blogSec" data-aos="fade-up">
        <div className="container">
          <h1>Watchout Blogs</h1>
          <BlogSlider />
        </div>
      </section>


      {/* Mobile Section */}

      <section className="mobileSec" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-7 col-lg-7">
              <h1>Download Our App</h1>
              <p>Take charge of your dating safety today! Download our app to customize alerts, stay informed, and steer the dating scene with confidence.</p>
              <div className="imgDiv">
                <img src="/android-store.png" alt="" />
                <img src="/app-store.png" alt="" />
              </div>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-5">
              <img src="/mobile.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
