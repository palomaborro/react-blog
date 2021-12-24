import React from "react";
import "./Post.scss";

export default function Post({ post }) {
  return (
    <div className="Post">
    {post.postPicture && (
      <img
        className="Post__img"
        src={post.postPicture}
        alt=""
      />
    )}
      <div className="Post__info">
        <div className="Post__info__categories">
        {post.categories.map((category) => (
          <span className="Post__info__categories__individual">{category.name}</span>
        ))}
        </div>
        <span className="Post__info__title">
          {post.title}
        </span>
        <hr />
        <span className="Post__info__date">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className='Post__info__description'>
        {post.description}
      </p>
    </div>
  );
}
