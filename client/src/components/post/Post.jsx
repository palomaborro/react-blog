import React from "react";
import "./Post.scss";

export default function Post() {
  return (
    <div className="Post">
      <img
        className="Post__img"
        src="https://paperetsdecolorets.es/wp-content/uploads/2019/10/placeholder.png"
        alt=""
      />
      <div className="Post__info">
        <div className="Post__info__categories">
          <span className="Post__info__categories__individual">Music</span>
          <span className="Post__info__categories__individual">Life</span>
        </div>
        <span className="Post__info__title">
          Dolor quis cupidatat sit laboris culpa.
        </span>
        <hr />
        <span className="Post__info__date">1 hour ago</span>
      </div>
      <p className='Post__info__description'>
        Sunt nostrud cupidatat enim esse qui eu elit. Pariatur elit id veniam
        incididunt anim cillum. Ullamco sunt reprehenderit non deserunt fugiat
        aliquip sunt do quis eiusmod est dolor. Ipsum aliquip proident occaecat
        velit consequat minim proident tempor Lorem.
        Sunt nostrud cupidatat enim esse qui eu elit. Pariatur elit id veniam
        incididunt anim cillum. Ullamco sunt reprehenderit non deserunt fugiat
        aliquip sunt do quis eiusmod est dolor. Ipsum aliquip proident occaecat
        velit consequat minim proident tempor Lorem.
        Sunt nostrud cupidatat enim esse qui eu elit. Pariatur elit id veniam
        incididunt anim cillum. Ullamco sunt reprehenderit non deserunt fugiat
        aliquip sunt do quis eiusmod est dolor. Ipsum aliquip proident occaecat
        velit consequat minim proident tempor Lorem.
      </p>
    </div>
  );
}
