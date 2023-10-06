import React from "react";
import { Link } from "react-router-dom";

const HeadAncors = () => {
  return (
    <div>
      <div className="head-ancor">
        <Link to="tweeter.com">
          <b>X</b>
        </Link>
        <Link to="tweeter.com">IG</Link>
        <Link to="tweeter.com">G+</Link>
        <Link to="tweeter.com">FB</Link>
      </div>
    </div>
  );
};

export default HeadAncors;
