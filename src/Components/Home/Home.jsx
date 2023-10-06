import React from "react";
import HeadCarosel from "../HeadCarosel/HeadCarosel";
import Wellcome from "../wellcomeSection/Wellcome";
import Speach from "../Speach/Speach";
import SpacialNoticSection from "../SpacialNoticSection/SpacialNoticSection";
import CollageStory from "../CollagehISTORY/CollageStory";

const Home = () => {
  return (
    <div>
      <HeadCarosel></HeadCarosel>
      <Wellcome></Wellcome>
      <CollageStory></CollageStory>
      <Speach></Speach>
      <SpacialNoticSection></SpacialNoticSection>
    </div>
  );
};

export default Home;
