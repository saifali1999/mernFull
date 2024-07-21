import React, { useState } from "react";
import "./newdash.css";
import Sidebar from "./Sidebar";
import DashNav from "./DashNav";

import { useAuth } from "../store/auth";


const NewDashboard = () => {
  return (
    <>
      <div className="main_wrapper">
        <Sidebar />

        <div className="main_content">
          <DashNav />
          <div>
            <h2 className="text-center py-4 mt-4">Welcome to Dashboard </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewDashboard;

// Created Services api.
// Created table to show all the services on all service page of dashboard.
// Created add service page inside dashboard and added functionality.
// Created edit service page inside dashboard and added functionality.

// changed the content language to swedish on event detail page.
// Used new api on events page to show upcoming events only.
// changed the design to show full title of post on homepage.

{
  /* <div className="col-md-6 col-lg-6 col-11 mx-auto bg-white p-3 p-md-4 mt-5">
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
     </div> */
}
