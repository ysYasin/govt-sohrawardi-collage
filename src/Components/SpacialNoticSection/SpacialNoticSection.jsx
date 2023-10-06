import React from "react";
import "./SpacialNoticSection.css";

const noticeImg = ["/SheikhRasel.jpg", "/SheikhRasel.jpg", "SheikhRasel.jpg"];
const SpacialNoticSection = () => {
  return (
    <>
      <div className="SpacialNoticSection text-center">
        <h1 className="text-center mb-4">Spacia Notices !</h1>
        <div className="SpacialNoticBody">
          {noticeImg?.map((item) => {
            return (
              <div key={noticeImg.indexOf(item)} className="notic text-center">
                <div className="img ">
                  <img src={item} alt="" />
                </div>
                <div className="notic-body text-center pt-3">
                  <h3>‘শেখ রাসেল দিবস-২০২২’ উদযাপন সংক্রান্ত বিজ্ঞপ্তি।</h3>
                </div>
                <button className="px-4 py-2 btn btn-primary">Read More</button>
              </div>
            );
          })}
        </div>
        <button className="btn btn-primary">See More...</button>
      </div>
    </>
  );
};

export default SpacialNoticSection;
