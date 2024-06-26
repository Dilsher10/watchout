"use client";
import React, { useEffect, useState } from 'react';
import Sidebar from '../../../../components/user_dashboard/Sidebar';
import Navbar from '../../../../components/user_dashboard/Navbar';
import Footer from '../../../../components/user_dashboard/Footer';
import axios from 'axios';
import { toast } from 'react-toastify';



const Page = () => {

    // On Change

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [dating, setDating] = useState("");
    const [toxic, setToxic] = useState("");
    const [cheat, setCheat] = useState("");
    const [scam, setScam] = useState("");
    const [ethnicity, setEthnicity] = useState("");
    const [nationality, setNationality] = useState("");
    const [description, setDescription] = useState("");


    const postSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("image", image);
            formData.append("gender", gender);
            formData.append("dob", dob);
            formData.append("city", city);
            formData.append("state", state);
            formData.append("country", country);
            formData.append("phone", phone);
            formData.append("email", email);
            formData.append("dating", dating);
            formData.append("toxic", toxic);
            formData.append("cheat", cheat);
            formData.append("scam", scam);
            formData.append("ethnicity", ethnicity);
            formData.append("nationality", nationality);
            formData.append("description", description);

            await axios.post(process.env.NEXT_PUBLIC_API_URL + "/api/auth/user/post", formData);
            toast.success("Posted Successfully");
            e.target.reset();
        } catch (error) {
            console.error("Error:", error);
            toast.error("Something went wrong");
        }
    };

    return (
        <>
            <div className="container-fluid position-relative bg-white d-flex p-0">
                <Sidebar />
                <div className="content" id='adminNavbar'>
                    <Navbar />
                    <div className="container pt-4 px-4">
                        <div className="row g-4">
                            <div className="col-sm-12 col-xl-12">
                                <div className="bg-light rounded h-100 p-5">
                                    <form className='alertForm' enctype="multipart/form-data" onSubmit={postSubmit}>
                                        <div className="row">
                                            <div className="col-6">
                                                <label htmlFor="">Full Name</label>
                                                <input type="text" className="form-control" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="">Picture</label>
                                                <input type="file" className="form-control" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
                                            </div>
                                            <div className="col-6">
                                                <label className="form-label">Gender</label>
                                                <select className="form-select" onChange={(e) => setGender(e.target.value)}>
                                                    <option selected>Select gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                            <div className="col-6">
                                                <label className="form-label">Date of Birth</label>
                                                <input type="date" className="form-control" onChange={(e) => setDob(e.target.value)} />
                                            </div>
                                            <div className="col-6">
                                                <label className="form-label">City</label>
                                                <input type="text" className="form-control" placeholder='Enter city' onChange={(e) => setCity(e.target.value)} />
                                            </div>
                                            <div className="col-6">
                                                <label className="form-label">State</label>
                                                <input type="text" className="form-control" placeholder='Enter state' onChange={(e) => setState(e.target.value)} />
                                            </div>
                                            <div className="col-6">
                                                <label className="form-label">Country</label>
                                                <input type="text" className="form-control" placeholder='Enter country' onChange={(e) => setCountry(e.target.value)} />
                                            </div>
                                            <div className="col-6">
                                                <label className="form-label">Phone Number</label>
                                                <input type="text" className="form-control" placeholder='Enter phone number' onChange={(e) => setPhone(e.target.value)} />
                                            </div>
                                            <div className="col-6">
                                                <label className="form-label">Email ID</label>
                                                <input type="email" className="form-control" placeholder='Enter email id' onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                            <div className="col-6">
                                                <label className="form-label">Dating Period</label>
                                                <select className="form-select" onChange={(e) => setDating(e.target.value)}>
                                                    <option selected>Select dating period</option>
                                                    <option value="1 Month">1 Month</option>
                                                    <option value="3 Months">3 Months</option>
                                                    <option value="5 Months">5 Months</option>
                                                    <option value="More than 1 Year">More than 1 Year</option>
                                                    <option value="More than 2 Years">More than 2 Years</option>
                                                    <option value="More than 3 Years">More than 3 Years</option>
                                                    <option value="More than 4 Years">More than 4 Years</option>
                                                    <option value="More than 5 Years">More than 5 Years</option>
                                                </select>
                                            </div>
                                            <div className="col-12 my-3">
                                                <div className="form-check form-check-inline wrapper">
                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Toxic" onChange={(e) => setToxic(e.target.value)} />
                                                    <label className="form-check-label" for="inlineCheckbox1">Toxic</label>
                                                    <div className="tooltip">It is a Toxic !</div>
                                                </div>
                                                <div className="form-check form-check-inline wrapper">
                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Cheat" onChange={(e) => setCheat(e.target.value)} />
                                                    <label className="form-check-label" for="inlineCheckbox2">Cheat</label>
                                                    <div className="tooltip">It is a Cheat !</div>
                                                </div>
                                                <div className="form-check form-check-inline wrapper">
                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="Scam" onChange={(e) => setScam(e.target.value)} />
                                                    <label className="form-check-label" for="inlineCheckbox3">Scam</label>
                                                    <div className="tooltip">It is a Scam !</div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <label className="form-label">Ethnicity</label>
                                                <input type="text" className="form-control" placeholder='Enter ethnicity' onChange={(e) => setEthnicity(e.target.value)} />
                                            </div>
                                            <div className="col-6">
                                                <label className="form-label">Nationality</label>
                                                <input type="text" className="form-control" placeholder='Enter nationality' onChange={(e) => setNationality(e.target.value)} />
                                            </div>
                                            <div className="col-12">
                                                <label for="exampleFormControlTextarea1" className="form-label">Description Box (100 characters)</label>
                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" placeholder='Type here...' onChange={(e) => setDescription(e.target.value)}></textarea>
                                            </div>
                                        </div>
                                        <div className="mt-5">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Page