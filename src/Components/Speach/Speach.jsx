import React from "react";
import "./Speach.css";
import { useLoaderData } from "react-router-dom";
import DisplaySpeaches from "../DisplaySpiches/DisplaySpeaches";

const Speach = () => {
  const speaches = useLoaderData();

  return (
    <div
      className="speach d-flex align-items-center gap-5"
      style={{ padding: "7rem 3rem" }}
    >
      {speaches.map((Speach) => (
        <DisplaySpeaches key={Speach._id} speachs={Speach}></DisplaySpeaches>
      ))}
    </div>
  );
};

export default Speach;
