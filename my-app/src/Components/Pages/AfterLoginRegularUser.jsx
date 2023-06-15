import React, { useEffect, useState } from "react";
import DashbordHeader from "../Header/DashbordHeader";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./css/afterLoginRegularUser.css";

function AfterLoginRegularUser(props) {
  const [postContent, setPostContent] = useState("");

  function createPost() {
    axios
      .post("https://localhost:5008/api/Postimet", { content: postContent })
      .then((response) => {
        console.log("Post created:", response.data);
        setPostContent("");
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

      <div className="text-center me-14">
        <div class="text-center container bootstrap snippets bootdey">
          <div class="">
            <div class="">
              <div class="well well-sm well-social-post">
                <form>
                  <ul class="list-inline" id="list_PostActions">
                    <li class="active">
                      <a href="#">Update status</a>
                    </li>
                    <li>
                      <a href="#">Add photos/Video</a>
                    </li>
                    <li>
                      <a href="#">Create photo album</a>
                    </li>
                  </ul>
                  <textarea
                    class="form-control"
                    placeholder="What's in your mind?"
                    value={postContent}
                    onChange={(event) => setPostContent(event.target.value)}
                  ></textarea>
                  <ul class="list-inline post-actions">
                    <li>
                      <a href="#">
                        <span class="glyphicon glyphicon-camera"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="glyphicon glyphicon-user"></a>
                    </li>
                    <li>
                      <a href="#" class="glyphicon glyphicon-map-marker"></a>
                    </li>
                    <li class="pull-right">
                      <a
                        href="#"
                        class="btn btn-primary btn-xs"
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
      <Footer className="navbar"></Footer>
    </div>
  );
}

export default AfterLoginRegularUser;
