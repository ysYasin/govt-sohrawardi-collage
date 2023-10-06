import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Aboutus.css";
import Asaid from "../Asaid/Asaid";

const AboutUs = () => {
  return (
    <>
      <div className="aboutus text-center">
        <div className="img-au">
          <img src="/cover1.png" alt="" />
        </div>
        <div className="layout">
          <div className="pharagraps w-75 mx-auto py-5 d-flex flex-column gap-3">
            <h1 className="text-uppercase">Little bit about Us</h1>
            <p>
              The Government Shahid Suhrawardy College is situated at
              Laxsmibazar by the Eastern side of historically famous Bahadurshah
              Park of Old Dhaka. The main two-storeyed building established on
              the total 1(one) acre of land is furnished with
              red-bricks.Besides, the whole educational activities run with the
              total three buildings-one of its three storeyed building and also
              another two storeyed building. The total number of students of
              this college is about 12 thousands. To know the birth of this
              important college we have to look at the half century back.
            </p>
            <p>
              The present Government Shahid Suhrawardy College was established
              on 11 November, 1949. At that time the name of this college was
              Kaed-E-Azam College. The Kaed-E-Azam College started its journey
              in a moisture building situated on the land of Vhaoalraz Estate at
              Nalgola (5/1, Zumman Bepari Lane). Immediate repair of the college
              was completed by the help of five thousand taka of the then
              District Magistrate. Later on, after buying the present land of
              36-37, Laxsmibazar the college was shifted to it. The building of
              Nalgola was then turned into a hostel. The famous professor Mr.
              Syed Zahir Ahsan of Geography Department engaged in Bihar
              Provincial Service took the charge of The Principal as the first
              Principal of the college in 1950. At the beginning, the approval
              of teaching was confined to the courses of I.A., I. Com., and B.
              Com. It was governmentally enlisted as college in 1951-1952
              session with total 300 students and 10 teachers. The gradual
              improvement of the college began just after the joining of the
              renowned Professor Mr. A. M. A. R. Fatemi as Principal on 15
              April, 1954. Science course was started at Intermediate level in
              1955. The ceremonial inauguration of science course was declared
              by the then Governor of East Pakistan Mr. A. K. Fazlul Haque. B.A.
              (Pass) course was started in 1956. The starting of science course
              at graduate class in 1958 was epoch-making. Later on, coming to
              visit the college Governor Zakir Hussain inaugurated the course at
              graduate level formally. At that time there was no science course
              at graduate level in any college in Dhaka except in this college.
              And the successful person of all these activities was the
              Principal Mr. Fatemi. Soon this college became familiar as an
              ideal educational institution of the province. When the college
              authority proposed the ex-governor of the then East Pakistan to be
              the main patron, he accepted the proposal whole heartedly.
            </p>
            <p>
              During the period of The Principal Mr. Fatemi (from15-04-1954 to
              15-12-1971) the number of students and teachers raised to 3400 and
              60 respectively. After getting the independence the name of the
              college was changed into Shahid Suhrawardy College in 1972,
              according to the name of the veteran politician known as the fancy
              child of democracy Mr. Hossain Shahid Suhrawardy. The college is
              enlisted as governmental college on 01 November in 1984. So, the
              college was renamed as Government Shahid Suhrawardy College. At
              present the science, arts and commerce section at Higher
              Secondary, graduate and Honours level in this college are running.
              Honours course was started from 2004-2005 academic session in this
              college. At present teaching is going on at honours level in 16
              departments. The result of diligent industry and perseverance of
              the past Principals and the teachers at different times the
              present Government Shahid Suhrawardy College is determined to keep
              the past glory. According to the academic session of 2006-2007 the
              total number of the students is about 12 thousands. In comparison
              to this great number of students the number of teachers is
              indigence. Professor Mr. Khan Haibur Rahman is the Principal of
              the college now. He took the charge of Principal of the college on
              13-04-2009. The academic activities along with the administrative
              activities of the college are going on smoothly and in a
              disciplined way by his potentiality.
            </p>
            <p>
              The depth of the flowing Buriganges nearby and the busy activities
              of the commercial township of Sadarghat are the two sources of
              inspiration for the character of the students of the Government
              Shahid Suhrawardy College.
            </p>
          </div>
          {/* asaid section */}
          <div style={{ marginTop: "5rem" }}>
            <Asaid></Asaid>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
