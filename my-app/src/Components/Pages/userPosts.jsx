import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/allPosts.css";
import DashbordHeader from "../Header/DashbordHeader";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardText,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";

const UserPost = () => {
  const [posts, setPosts] = useState([]);
  const myValue = localStorage.getItem("userId");

  useEffect(() => {
    // Fetch posts from the API
    axios
      .get(`https://localhost:5008/api/Postimet/ByAuthor/${myValue}`)
      .then((response) => {
        console.log("Posts retrieved:", response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error retrieving posts:", error);
      });
  }, []);

  const handleDeletePost = (postId) => {
    // Send a DELETE request to the API to delete the post
    axios
      .delete(`https://localhost:5008/api/Postimet/${postId}`)
      .then((response) => {
        console.log("Post deleted:", postId);
        // Remove the deleted post from the posts state
        const updatedPosts = posts.filter((post) => post.id !== postId);
        setPosts(updatedPosts);
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  return (
    <div className="mb-5">
      <DashbordHeader></DashbordHeader>
      <MDBRow>
        <MDBCol md="2"></MDBCol>
        <MDBCol md="8">
          {" "}
          <div className=" m-5 ">
            {posts.map((post) => (
              <MDBCard key={post.id} className="mb-8 p-3 mb-2 rounded-5 ">
                <MDBCardHeader>{post.autorName}</MDBCardHeader>
                <MDBCardBody color="secondary" className="mx-1">
                  <MDBCardText>
                    <h5>{post.title}</h5>
                  </MDBCardText>
                  <MDBCardText>{post.content}</MDBCardText>

                  <div className="d-inline">
                    <i className="d-inline bi bi-hand-thumbs-up me-2 text-primary"></i>
                    <h6 className="d-inline me-4 text-primary">{post.likes}</h6>
                    <i className="d-inline bi bi-hand-thumbs-down me-4"></i>
                    <i className="bi bi-arrow-90deg-up me-5"> share</i>
                    <i className="bi bi-chat-left-text-fill me-5 top-50 start-50">
                      Coments
                    </i>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeletePost(post.id)}
                    >
                      Delete
                    </button>
                  </div>
                </MDBCardBody>
              </MDBCard>
            ))}
          </div>
        </MDBCol>
        <MDBCol md="2"></MDBCol>
      </MDBRow>
      
    </div>
  );
};

export default UserPost;
