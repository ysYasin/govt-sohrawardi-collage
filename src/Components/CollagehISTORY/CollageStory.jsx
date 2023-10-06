import React from "react";
import { Link } from "react-router-dom";

const CollageStory = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "rgb(182 255 254 / 18%)",
        flexDirection: "column-reverse",
      }}
      className="wc-body d-flex py-5 px-5 align-items-center justify-content-between gap-5"
    >
      <div className="wc-img m-lg-4">
        <img src="/uv.jpeg" width="600px" alt="" />
      </div>
      <div className=" text-center ms-5" style={{ marginLeft: "4rem" }}>
        <h1>Collage history !</h1>
        <p className="px-3 text-start">
          The Government Shahid Suhrawardy College is situated at Laxsmibazar by
          the Eastern side of historically famous Bahadurshah Park of Old Dhaka.
          The main two-storeyed building established on the total 1(one) acre of
          land is furnished with red-bricks.Besides, the whole educational
          activities run with a total of three buildings-one of its three
          storeyed building and also another two storeyed building. The total
          number of students of this college is about 12 thousands. To know the
          birth of this important college we have to look at the half century
          back.
          <br />
          <Link to="/seemore">see more... </Link>
        </p>
      </div>
    </div>
  );
};

export default CollageStory;
