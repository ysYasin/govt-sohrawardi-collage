import React from "react";
import Asaid from "../../Asaid/Asaid";

const NoaticeBoard = () => {
  return (
    <div style={{ minHeight: "100vh" }} className="">
      <div className="img-au mb-5">
        <img src="/notice.jpeg" alt="" />
      </div>
      <div className="layout">
        <div>
          <h1
            style={{ fontFamily: "Preahvihear", fontSize: "4rem" }}
            className="mt-5 text-center"
          >
            All Notices
          </h1>
        </div>

        <Asaid></Asaid>
      </div>
    </div>
  );
};

export default NoaticeBoard;
