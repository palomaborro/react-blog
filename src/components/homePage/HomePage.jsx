import React from "react";
import Header from "../header/Header";
import Posts from "../posts/Posts";
import SideBar from "../sidebar/SideBar";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="HomePage">
        <Posts />
        <SideBar />
      </div>
    </>
  );
}
