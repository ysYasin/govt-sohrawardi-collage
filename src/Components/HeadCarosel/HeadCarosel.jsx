import react, { useEffect, useState } from "react";
import "./HeadCarosel.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function HeadCarosel() {
  const imgUrls = ["/cover1.png", "/coverImg1.jpg", "/coverImg-3.jpg"]; // carosel mi mages
  const [index, setIndex] = useState(0); // statse to set img index
  let showingImg = imgUrls[index]; // setting url
  const isEqual = index === imgUrls.length - 1; // Handleing Setintervall

  useEffect(() => {
    // Set interval function
    const setInvervalId = setInterval(function () {
      if (!isEqual) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 3000); // timing is here

    /// clean up set inderval
    return () => {
      clearInterval(setInvervalId);
    };
  }, [index, isEqual, imgUrls]);

  return (
    <div className="carasolmg">
      <img src={showingImg} alt="" />
      <div className="carosel-main-body text-white d-flex flex-column align-items-center justify-content-center">
        <div className="search-bar position-relative">
          <input type="text" />
          <button className="position-absolute search-placeHolder">
            <MagnifyingGlassIcon className="ico "></MagnifyingGlassIcon>
          </button>
        </div>
        <div className="title">
          <h1>Wellcome to |</h1>
          <h2 className="">Govt. Shohid Sohrawardi Collage</h2>
        </div>
      </div>
    </div>
  );
}

export default HeadCarosel;
