import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Foooter/Footer";

function App() {
  return (
    <>
      <div>
        <Header></Header>
        <Outlet />
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
