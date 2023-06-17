import React, { useEffect, useState } from "react";
import DashbordHeader from "../Header/DashbordHeader";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./css/afterLoginRegularUser.css";
import AllPosts from "./AllPosts";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";

function AfterLoginRegularUser(props) {
  const [title, setTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [posts, setPosts] = useState([]);
  const id = localStorage.getItem("userId");
  const Name = localStorage.getItem("Name");
  const Surname = localStorage.getItem("Surname");
  const email = localStorage.getItem("Email");

  function createPost() {
    axios
      .post("https://localhost:5008/api/Postimet", {
        autorId: id,
        autorName: Name,
        title: title,
        content: postContent,
        likes: 10,
      })
      .then((response) => {
        console.log("Post created:", response.data);
        setTitle("");
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
      <MDBRow className="mx-5">
        <MDBCol md="4">
          <div class="osahan-account-page-left shadow-sm bg-white ">
            <div class="border-bottom p-4">
              <div class="osahan-user text-center">
                <div class="osahan-user-media">
                  <img
                    class="mb-3 rounded-pill shadow-sm mt-1"
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="gurdeep singh osahan"
                  />
                  <div class="osahan-user-media-body">
                    <h3 class="mb-2">
                      Welcome ,{Name} {Surname}
                    </h3>

                    <p class="mb-1">Regular User</p>
                    <p>{email}</p>
                    <p class="mb-0 text-black font-weight-bold">
                      <a
                        class="text-primary mr-3"
                        data-toggle="modal"
                        data-target="#edit-profile-modal"
                        href="#"
                      >
                        <i class="icofont-ui-edit"></i> EDIT
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ul
              class="nav nav-tabs flex-column border-0 pt-4 pl-4 pb-4"
              id="myTab"
              role="tablist"
            >
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="addresses-tab"
                  data-toggle="tab"
                  href="#addresses"
                  role="tab"
                  aria-controls="addresses"
                  aria-selected="false"
                >
                  <i class="icofont-location-pin"></i> Addresses
                </a>
              </li>
            </ul>
          </div>
        </MDBCol>

        <MDBCol md="6">
          {" "}
          {/* Create Post Form */}
          <div className="text-center mx-4 mb-5">
            <div className="text-center container bootstrap snippets bootdey">
              <div className="">
                <div className="">
                  <div className="well well-sm well-social-post">
                    <form>
                      {/* Post Actions */}
                      <ul className="list-inline" id="list_PostActions">
                        <li className="active">
                          <a href="#">Create Post</a>
                        </li>
                        
                       
                      </ul>
                      {/* Post Content */}
                      <input
                        className="form-control"
                        placeholder="Title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                      ></input>
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
                          <a
                            href="#"
                            className="glyphicon glyphicon-map-marker"
                          ></a>
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
        </MDBCol>
      </MDBRow>

      <Footer></Footer>
    </div>
  );
}

export default AfterLoginRegularUser;
