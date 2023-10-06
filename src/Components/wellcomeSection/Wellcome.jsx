import React from "react";
import "./wellcome.css";
import { Link } from "react-router-dom";

const Wellcome = () => {
  return (
    <div
      style={{ width: "100%", background: "#b6ffce59" }}
      className="wc-body d-flex py-5 px-5 align-items-center justify-content-between gap-5"
    >
      <div className="wc-text ms-5">
        <h1 className=" text-center">Take our plasure !</h1>
        <p className="px-3">
          The Government Shahid Suhrawardy College is situated at Laxsmibazar by
          the Eastern side of historically famous Bahadurshah Park of Old Dhaka.
          The main two-storeyed building established on the total 1(one) acre of
          land is furnished with red-bricks.Besides, the whole educational
          activities run with the total three buildings-one of its three
          storeyed building and also another two storeyed building. The total
          number of students of this college is about 12 thousands. To know the
          birth of this important college we have to look at the half century
          <br />
          <Link to="/seemore">see more... </Link>
        </p>
      </div>
      <div className="wc-img m-lg-4">
        <img src="/wellcome.jpg" width="600px" alt="" />
      </div>
    </div>
  );
};

export default Wellcome;
