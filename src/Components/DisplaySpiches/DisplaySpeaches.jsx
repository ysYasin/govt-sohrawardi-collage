import React from "react";
import "./DisplaySpeaches.css";
import { Link } from "react-router-dom";

const DisplaySpeaches = ({ speachs }) => {
  const { name, post, collage, img, speach, masage } = speachs;
  return (
    <>
      <div>
        <p>
          <b>{masage}</b>
        </p>
        <div className="card">
          <div className="card-imgs">
            <img src={img} alt="" />
          </div>
          <div className="card-body">
            <h1>{name}</h1>
            <h3>{post}</h3>
            <p>
              {speach.length > 300 ? speach.slice(0, 300) : speach}{" "}
              <Link to="">See More...</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplaySpeaches;
