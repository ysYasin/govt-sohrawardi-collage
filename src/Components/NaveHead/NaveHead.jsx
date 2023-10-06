import {
  Bars3CenterLeftIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import "./NaveHead.css";
import { Link } from "react-router-dom";

const NaveHead = () => {
  const [sate, setState] = useState(false);
  return (
    <div className="nave-bar px-5 p-3 d-flex align-items-center justify-content-between">
      <div className="logo">
        <img src="/logo.png" width={"25%"} alt="" />
      </div>
      <div className={`navs ${(sate && "left") || "navs"}`}>
        <Link to="/">Home</Link>
        <div className="d-inline-block position-relative">
          <Link to="Home">
            Page <ChevronDownIcon className="ico text-dark "></ChevronDownIcon>
          </Link>
          <div className="sub-navs position-absolute">
            <Link to="/">Library</Link>
            <Link to="/">Online admition</Link>
            <Link to="/">Class routin</Link>
            <Link to="/">Result</Link>
            <Link to="/">Vontact</Link>
            <Link to="/">FB Page</Link>
          </div>
        </div>
        <div className="d-inline-block position-relative">
          <Link to="/">
            Accademic{" "}
            <ChevronDownIcon className="ico text-dark "></ChevronDownIcon>
          </Link>
          <div className="sub-navs position-absolute">
            <Link to="/">Teachers Infirmation</Link>
            <Link to="/">Student Infirmation</Link>
            <Link to="/">3rd/4th class emply Infirmation</Link>
            <Link to="/">UP Academic Calenter</Link>
          </div>
        </div>
        <div className="d-inline-block position-relative">
          <Link to="Home">
            Depertment{" "}
            <ChevronDownIcon className="ico text-dark "></ChevronDownIcon>
          </Link>
          <div className="sub-navs position-absolute">
            <Link to="/">Honer's Cours</Link>
            <Link to="/">Masters Course</Link>
          </div>
        </div>

        <Link to="/noticeboard">Notic Board</Link>
        <Link to="Home">Blog</Link>
        <Link to="/aboutUs">About Us</Link>
      </div>
      <div>
        <button
          onClick={() => setState(!sate)}
          className="border-0 mbl-btn bg-transparent"
        >
          {(sate && <XMarkIcon style={{ width: "2rem" }}></XMarkIcon>) || (
            <Bars3CenterLeftIcon
              style={{ width: "2rem" }}
            ></Bars3CenterLeftIcon>
          )}
        </button>
      </div>
    </div>
  );
};

export default NaveHead;
