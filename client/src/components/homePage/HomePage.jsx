import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import Posts from "../posts/Posts";
import SideBar from "../sidebar/SideBar";
import "./HomePage.scss";
import axios from "axios";

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/posts');
      setPosts(res.data)
    }
    fetchPosts()
  }, [])

  return (
    <>
      <Header />
      <div className="HomePage">
        <Posts posts={posts} />
        <SideBar />
      </div>
    </>
  );
}
