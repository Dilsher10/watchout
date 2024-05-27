"use client";
import { React, useEffect } from "react";
import BlogSlider from "../../components/BlogSlider";
import Slider from "../../components/Slider";
import TestimonialSlider from "../../components/TestimonialSlider";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../../components/Navbar';
import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
    });
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);


  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;


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
              <h3>Before Dating Watch Out</h3>
              <p>Are you tired of swiping left and right, hoping to find that special someone only to stumble upon deceptive individuals looking to exploit your trust? At WatchOut, we're on a mission to revolutionize the dating scene by empowering you with the knowledge and tools to protect yourself against fraudulent schemes.</p>
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
                  <h5 className="card-title">322K+</h5>
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
              <Link href="/user_dashboard/login" className='btn-2'>Submit Alert</Link>
              <Link href="/user_dashboard/login" className='btn-1'>View Alerts</Link>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <img src="/group-img.png" alt="" className='img-fluid' />
            </div>
          </div>
        </div>
      </section>


      <div className="container processSec" data-aos="fade-up">
        <h1>Watch Out Steps</h1>
        <p className='processText'>Lorem Ipsum is simply dummy text of the printing </p>
        <div className="row">
          <div className="col">
            <div className="card">
              <img src="/process-1.png" className="img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Create an<br /> Account</h5>
                <p>Join Watch Out for a secure dating journey. Set up your profile and access a vigilant community dedicated to safety.</p>
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
                <h5 className="card-title">Watch Out <br /> Alerts</h5>
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

              {token ? (
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
                      <p className="card-text">Effective communication lays the foundation for a healthy relationship. Watch out for partners who dodge important conversations, exhibit controlling behavior, or refuse to listen to your needs and feelings.</p>
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
                      <p className="card-text">Your gut feeling is a powerful tool. If something feels off or too good to be true, take the time to evaluate the situation. Trusting your intuition can safeguard you from entering relationships that might not be right for you.</p>
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
              <h2>Australia</h2>
              <img src="/line.png" className='img-fluid' id="line" alt="" />
              <div className='div-1'>
                <h3>Alerts</h3>
                <img src="/vertical-line.png" className='img-fluid' alt="" />
                <h3>4K+</h3>
              </div>
              <p className='text-2'>Amidst the vibrant UK dating scene, the arrival of 4,000+ alerts acts as a decisive guide, steering individuals toward informed and secure romantic experiences. These alerts span from cautionary stories to invaluable advice, providing essential direction. They equip people to identify warning signs, understand genuine connections, and direct the intricacies of contemporary relationships prudently. By accepting these signals as trusted companions, individuals gain the power of knowledge, enabling them to make wise choices while safeguarding their emotional wellness</p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <img src="/map.png" className='img-fluid' alt="" />
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
          <h1>Watch Out Blogs</h1>
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
