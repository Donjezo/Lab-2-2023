import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/allPosts.css";

import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  
  MDBCardText,
 
} from "mdb-react-ui-kit";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the API
    axios
      .get("https://localhost:5008/api/Postimet")
      .then((response) => {
        console.log("Posts retrieved:", response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error retrieving posts:", error);
      });
  }, []);

  return (
    <div className="mx-5 ">
     
      {posts.map((post) => (
        <MDBCard key={post.id} className="mb-8 p-3 mb-2 rounded-5 ">
          <MDBCardHeader className=" ">{post.autorName}</MDBCardHeader>
          <MDBCardBody color="secondary" className="mx-1">
            <MDBCardText>
              <h5>{post.title}</h5>
            </MDBCardText>
            <MDBCardText>{post.content}</MDBCardText>

            <div className="d-inline">
              <i class=" d-inline bi bi-hand-thumbs-up me-2 text-primary"></i>
              <h6 className="d-inline me-4 text-primary">{post.likes}</h6>
              <i class=" d-inline bi bi-hand-thumbs-down me-4"></i>
              <i class="bi bi-arrow-90deg-up me-5"> share</i>
              <i class="bi bi-chat-left-text-fill me-5  top-50 start-50">
                Coments
              </i>
            </div>
          </MDBCardBody>
        </MDBCard>
      ))}
      <div></div>
    </div>
  );
};

export default AllPosts;
