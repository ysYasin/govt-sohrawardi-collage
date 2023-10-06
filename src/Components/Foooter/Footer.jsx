import React from "react";
import "./Footer.css";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadAncors from "../Header/HeadAncors";

const Footer = () => {
  return (
    <div className=" bottom-0 w-100">
      <div className="footer d-flex bg-dark text-secondary px-5 py-5 gap-5">
        <div>
          <h1>IMPORTANT LINK</h1>
          <ul>
            <li>
              <Link className="link-secondary" to="/">
                Education Board
              </Link>
            </li>
            <li>
              <Link className="link-secondary" to="/">
                Directorate Of Secondary and Higher Education
              </Link>
            </li>
            <li>
              <Link className="link-secondary" to="/">
                National University
              </Link>
            </li>
            <li>
              <Link className="link-secondary" to="/">
                National University Info
              </Link>
            </li>
            <li>
              <Link className="link-secondary" to="/">
                Ministry of Education
              </Link>
            </li>
            <li>
              <Link className="link-secondary" to="/">
                Our Fan Page
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1>Contact Information</h1>
          <div>
            <p>
              <strong>Government Shahid Suhrawardy College, Dhaka.</strong>
            </p>
            <p>36-37, Luxmibazar, Sutrapur, Dhaka-1100</p>
            <p className="icon-link-hover">
              <EnvelopeIcon className="ico"></EnvelopeIcon> :
              govsscdhk_college@yahoo.com
            </p>
            <p className="">
              <PhoneIcon className="ico"></PhoneIcon> : 02-223359499
            </p>
          </div>
        </div>
        <div>
          <h3>Stay Connected on</h3>
          <HeadAncors></HeadAncors>
        </div>
      </div>
      <div
        style={{ background: "#000000" }}
        className="d-flex border-top-50 justify-content-around align-items-center px-5 py-3"
      >
        <p>
          Copyright © 2023 Government Shaheed Suhrawardy College, Dhaka. All
          rights reserved.
        </p>
        <p>Designed by ProProgram</p>
      </div>
    </div>
  );
};

export default Footer;
