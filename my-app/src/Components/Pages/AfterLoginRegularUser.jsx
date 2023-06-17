import React, { useEffect, useState } from "react";
import DashbordHeader from "../Header/DashbordHeader";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./css/afterLoginRegularUser.css";
import AllPosts from "./AllPosts";

function AfterLoginRegularUser(props) {
  const [postContent, setPostContent] = useState("");
  const [posts, setPosts] = useState([]);

  
  function createPost() {
    axios
      .post("https://localhost:5008/api/Postimet", {
        autorId: 1,
        autorName: "John Doe",
        title: "First Post",
        content: postContent,
        likes: 10,
      })
      .then((response) => {
        console.log("Post created:", response.data);
        setPostContent("");
        setPosts((prevPosts) => [...prevPosts, response.data]);
      })
      .catch((error) => {
        console.error("Error creating post:", error);
      });
  }

  return (
    <div>
      <div className="mb-5">
        <DashbordHeader></DashbordHeader>
      </div>

      {/* Create Post Form */}
      <div className="text-center me-14">
        <div className="text-center container bootstrap snippets bootdey">
          <div className="">
            <div className="">
              <div className="well well-sm well-social-post">
                <form>
                  {/* Post Actions */}
                  <ul className="list-inline" id="list_PostActions">
                    <li className="active">
                      <a href="#">Update status</a>
                    </li>
                    <li>
                      <a href="#">Add photos/Video</a>
                    </li>
                    <li>
                      <a href="#">Create photo album</a>
                    </li>
                  </ul>
                  {/* Post Content */}
                  <textarea
                    className="form-control"
                    placeholder="What's in your mind?"
                    value={postContent}
                    onChange={(event) => setPostContent(event.target.value)}
                  ></textarea>
                  {/* Post Actions */}
                  <ul className="list-inline post-actions">
                    <li>
                      <a href="#">
                        <span className="glyphicon glyphicon-camera"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="glyphicon glyphicon-user"></a>
                    </li>
                    <li>
                      <a href="#" className="glyphicon glyphicon-map-marker"></a>
                    </li>
                    <li className="pull-right">
                      <a
                        href="#"
                        className="btn btn-primary btn-xs"
                        onClick={createPost}
                      >
                        Post
                      </a>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

     <AllPosts></AllPosts>
      <Footer></Footer>
    </div>
  );
}

export default AfterLoginRegularUser;
