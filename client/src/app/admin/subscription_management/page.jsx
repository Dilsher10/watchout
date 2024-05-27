"use client";
import React, { useEffect } from 'react';
import Sidebar from '../../../../components/admin/Sidebar';
import Navbar from '../../../../components/admin/Navbar';
import Footer from '../../../../components/admin/Footer';
import Link from 'next/link';
import { FaEye } from "react-icons/fa";
import MUIDataTable from "mui-datatables";

const Page = () => {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  const columns = ["Name", "Email ID", "Phone", "Location", ""];

  const data = [
    ["Joe James", "Ken@hotmail.com", "44637483483", "Street 13, LA", <Link className="eye-btn" href="#"><FaEye /></Link>],
    ["John Walsh", "Ken@hotmail.com", "44637483483", "Street 13, LA", <Link className="eye-btn" href="#"><FaEye /></Link>],
    ["Bob Herm", "Ken@hotmail.com", "44637483483", "Street 13, LA", <Link className="eye-btn" href="#"><FaEye /></Link>],
    ["James Houston", "Ken@hotmail.com", "44637483483", "Street 13, LA", <Link className="eye-btn" href="#"><FaEye /></Link>],
  ];

  const options = {
    filterType: 'checkbox',
  };

  return (
    <>
      <div className="container-fluid position-relative bg-white d-flex p-0">
        <Sidebar />
        <div className="content" id='adminNavbar'>
          <Navbar />

          {/* Tabs */}

          <div className="col-sm-12 col-xl-12">
            <div className="bg-light rounded h-100 p-4">
              <h6 className="mb-4 title">Subscription Management</h6>
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                    data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                    aria-selected="true">Free Trail Users</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                    data-bs-target="#pills-profile" type="button" role="tab"
                    aria-controls="pills-profile" aria-selected="false">Subscribed Users</button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <MUIDataTable
                    data={data}
                    columns={columns}
                    options={options}
                  />
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <MUIDataTable
                    data={data}
                    columns={columns}
                    options={options}
                  />
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

export default Page;