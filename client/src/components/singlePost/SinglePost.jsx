import React from "react";
import "./SinglePost.scss";

export default function SinglePost() {
  return (
    <div className="SinglePost">
      <div className="SinglePost__container">
        <img
          className="SinglePost__container__img"
          src="https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg"
          alt=""
        />
        <h1 className="SinglePost__container__title">
          Aliqua adipisicing qui commodo officia.
          <div className="SinglePost__container__title__edit">
            <i className="SinglePost__container__title__edit__icon fas fa-pen"></i>
            <i className="SinglePost__container__title__edit__icon fas fa-trash"></i>
          </div>
        </h1>
        <div className="SinglePost__container__info">
          <span className="SinglePost__container__info__author">
            Author: <b>Paloma</b>
          </span>
          <span className="SinglePost__container__info__date">1 hour ago</span>
        </div>
        <p className="SinglePost__container__description">
          Lorem ipsum irure ea laboris laboris quis laborum commodo excepteur
          commodo aute pariatur. Cupidatat eu ullamco Lorem duis elit proident
          eiusmod dolore commodo cillum aute laboris cupidatat. Dolor esse duis
          ea in aliqua id sit pariatur veniam consequat ullamco incididunt
          nulla. Mollit occaecat irure aliquip fugiat consequat aute adipisicing
          dolore.
          Lorem ipsum irure ea laboris laboris quis laborum commodo excepteur
          commodo aute pariatur. Cupidatat eu ullamco Lorem duis elit proident
          eiusmod dolore commodo cillum aute laboris cupidatat. Dolor esse duis
          ea in aliqua id sit pariatur veniam consequat ullamco incididunt
          nulla. Mollit occaecat irure aliquip fugiat consequat aute adipisicing
          dolore.
          Lorem ipsum irure ea laboris laboris quis laborum commodo excepteur
          commodo aute pariatur. Cupidatat eu ullamco Lorem duis elit proident
          eiusmod dolore commodo cillum aute laboris cupidatat. Dolor esse duis
          ea in aliqua id sit pariatur veniam consequat ullamco incididunt
          nulla. Mollit occaecat irure aliquip fugiat consequat aute adipisicing
          dolore.
          Lorem ipsum irure ea laboris laboris quis laborum commodo excepteur
          commodo aute pariatur. Cupidatat eu ullamco Lorem duis elit proident
          eiusmod dolore commodo cillum aute laboris cupidatat. Dolor esse duis
          ea in aliqua id sit pariatur veniam consequat ullamco incididunt
          nulla. Mollit occaecat irure aliquip fugiat consequat aute adipisicing
          dolore.
        </p>
      </div>
    </div>
  );
}
