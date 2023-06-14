import React, { useEffect, useState } from "react";
import DashbordHeader from "../Header/DashbordHeader";

import { UserContext } from "../../UserContext";
const EditProfile = () => {
  const [userData, setUserData] = useState({});

  const myValue = localStorage.getItem("userId");

  useEffect(() => {
    fetch(`https://localhost:5001/api/User/${myValue}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [myValue]);

  const saveChanges = () => {
    if (Object.keys(userData).length === 0) {
      console.log("No changes to save.");
      return;
    }

    const jsonData = JSON.stringify(userData);

    fetch(`https://localhost:5001/api/User/${myValue}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("User data updated:", data);
        // Handle any further actions or updates after successful request
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
        // Handle any errors that occurred during the request
      });
  };
  return (
    <>
      <DashbordHeader />
      <div className="container-xl px-4 mt-4">
        <nav className="nav nav-borders">
          <a
            className="nav-link  ms-0 active"
            href="/editProfile"
            target="__blank"
          >
            Profile
          </a>
          <a className="nav-link" href="/" target="__blank">
            Cart
          </a>
          <a className="nav-link " href="/editPassword" target="__blank">
            Password
          </a>
        </nav>
        <hr className="mt-0 mb-4" />
        <div className="row">
          <div className="col-xl-4">
            <div className="card mb-4 mb-xl-0">
              <div className="card-header">Profile Picture</div>
              <div className="card-body text-center">
                <img
                  className="img-account-profile rounded-circle mb-2"
                  src="http://bootdey.com/img/Content/avatar/avatar1.png"
                  alt=""
                />

                <div className="small font-italic text-muted mb-4">
                  JPG or PNG no larger than 5 MB
                </div>

                <button className="btn btn-primary" type="button">
                  Upload new image
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="card mb-4">
              <div className="card-header">Account Details</div>
              <div className="card-body">
                <form>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputFirstName">
                        First name
                      </label>
                      <input
                        className="form-control"
                        id="inputFirstName"
                        type="text"
                        placeholder="Enter your first name"
                        value={userData.firstName || ""}
                        onChange={(event) =>
                          setUserData({
                            ...userData,
                            firstName: event.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLastName">
                        Last name
                      </label>
                      <input
                        className="form-control"
                        id="inputLastName"
                        type="text"
                        placeholder="Enter your last name"
                        value={userData.lastName || ""}
                        onChange={(event) =>
                          setUserData({
                            ...userData,
                            lastName: event.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputOrgName">
                        Found
                      </label>
                      <input
                        className="form-control"
                        id="inputOrgName"
                        type="text"
                        placeholder="Enter your organization name"
                        value={userData.orgName || ""}
                        onChange={(event) =>
                          setUserData({
                            ...userData,
                            orgName: event.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLocation">
                        User type
                      </label>
                      <input
                        className="form-control"
                        id="inputLocation"
                        type="text"
                        value={userData.type || ""}
                        onChange={(event) =>
                          setUserData({
                            ...userData,
                            userType: event.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputEmailAddress">
                      Email address
                    </label>
                    <input
                      className="form-control"
                      id="inputEmailAddress"
                      type="email"
                      placeholder="Enter your email address"
                      value={userData.email || ""}
                      onChange={(event) =>
                        setUserData({ ...userData, email: event.target.value })
                      }
                    />
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputPhone">
                        Phone number
                      </label>
                      <input
                        className="form-control"
                        id="inputPhone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value="555-123-4567"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputBirthday">
                        Birthday
                      </label>
                      <input
                        className="form-control"
                        id="inputBirthday"
                        type="text"
                        name="birthday"
                        placeholder="Enter your birthday"
                        value="06/10/1988"
                      />
                    </div>
                  </div>

                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={saveChanges}
                  >
                    Save changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
