import React from "react";
import "./SideBar.scss";
import image from "../../assets/navbar/photo.jpeg";

export default function SideBar() {
  return (
    <div className="SideBar">
      <div className="SideBar__about">
        <span className="SideBar__about__title">ABOUT ME</span>
        <img 
        className="SideBar__about__image"
        src={image}
        alt="" />
        <p className="SideBar__about__paragraph">
          Fugiat excepteur quis officia exercitation sint id qui velit anim
          reprehenderit in mollit cupidatat in. Aute qui nostrud magna irure
          duis do cupidatat qui sunt Lorem nisi est.
        </p>
      </div>
      <div className="SideBar__categories">
        <span className="SideBar__categories__title">CATEGORIES</span>
        <ul className="SideBar__categories__list">
            <li className="SideBar__categories__list__item">Music</li>
            <li className="SideBar__categories__list__item">Tech</li>
            <li className="SideBar__categories__list__item">Series & Cinema</li>
            <li className="SideBar__categories__list__item">Life</li>
        </ul>
      </div>
      <div className="SideBar__socials">
        <span className="SideBar__socials__title">FOLLOW US</span>
        <div className="SideBar__socials__icons">
            <i className="SideBar__socials__icons__detail fab fa-twitter-square"></i>
            <i className="SideBar__socials__icons__detail fab fa-github-square"></i>
            <i className="SideBar__socials__icons__detail fab fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
}
