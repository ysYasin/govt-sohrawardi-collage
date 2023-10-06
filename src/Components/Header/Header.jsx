import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { BeakerIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import NaveHead from "../NaveHead/NaveHead";
import { Link } from "react-router-dom";
import HeadAncors from "./HeadAncors";

const Header = () => {
  return (
    <div className="header d-flex flex-column text-center">
      <div className="top-header-mobile w-100 bg-success px-5 d-flex align-items-center justify-content-between py-1 pt-2 text-white">
        <div className="d-flex gap-4 fs-5">
          <p className="border-end d-flex align-items-center px-3">
            <PhoneIcon className="ico" /> +880100000000
          </p>

          <p className="">
            <EnvelopeIcon className="ico"></EnvelopeIcon> :
            govsscdhk_college@yahoo.com
          </p>
        </div>
        <div className="d-flex align-items-center">
          <div className="px-3 border-end me-2">
            <h4>
              <b>EN</b>
            </h4>
          </div>
          <HeadAncors></HeadAncors>
        </div>
      </div>
      <div className="naveHead top-0">
        <NaveHead></NaveHead>
      </div>
    </div>
  );
};

export default Header;
