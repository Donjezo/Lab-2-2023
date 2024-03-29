import { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./css/styles.css";
import { useNavigate } from "react-router-dom";

const AddAdmin = () => {
  const history = useNavigate();
  const navigate = useNavigate();
  const myValue = localStorage.getItem("userId");
  const [users, setUsers] = useState([]);
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    type: "admin",
    status: 1,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the registration data to the backend API
    fetch("https://localhost:5001/api/User/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to create user.");
        }
      })
      .then((data) => {
        // Handle the response from the backend
        console.log(data);
        // Redirect to login page
        navigate("/allAdminTable"); // Replace '/login' with the actual path of your login page
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
        // Display the error message to the user
        // You can set the error message in the state and render it in your component
      });
  };

  useEffect(() => {
    fetch("https://localhost:5050/api/Useradmin")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  const handleDeleteUser = (userId) => {
    fetch(`https://localhost:5050/api/Useradmin/${userId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // User successfully deleted, update the users state
          setUsers(users.filter((user) => user.id !== userId));
        } else {
          // Handle error response
          console.log("Failed to delete user.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function Logout() {
    localStorage.removeItem("userId");
    history("/login");
  }

  return (
    <>
      <body class="sb-nav-fixed">
        <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
          <a class="navbar-brand ps-3" href="index.html">
            E-Patient, Welcome Admin!
          </a>

          <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <div class="input-group">
              <input
                class="form-control"
                type="text"
                placeholder="Search for..."
                aria-label="Search for..."
                aria-describedby="btnNavbarSearch"
              />
              <button
                class="btn btn-primary"
                id="btnNavbarSearch"
                type="button"
              >
                <i class="fas fa-search"></i>
              </button>
            </div>
          </form>

          <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-user fa-fw"></i>
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a class="dropdown-item" href="#!">
                    Settings
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#!">
                    Activity Log
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a onClick={Logout} class="dropdown-item">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav me-8">
            <nav
              class="sb-sidenav accordion sb-sidenav-dark"
              id="sidenavAccordion"
            >
              <div class="sb-sidenav-menu">
                <div class="nav">
                  <div class="sb-sidenav-menu-heading">Users</div>
                  <a class="nav-link" href="/Dashbord">
                    <div class="sb-nav-link-icon">
                      <i class="fas fa-tachometer-alt"></i>
                    </div>
                    Dashbord
                  </a>
                  <a class="nav-link" href="/allUsersTable">
                    <div class="sb-nav-link-icon">
                      <i class="fas fa-tachometer-alt"></i>
                    </div>
                    All Users
                  </a>
                  <a class="nav-link" href="/allDoctorTable">
                    <div class="sb-nav-link-icon">
                      <i class="fas fa-tachometer-alt"></i>
                    </div>
                    Doctors
                  </a>
                  <a class="nav-link" href="/allAdminTable">
                    <div class="sb-nav-link-icon">
                      <i class="fas fa-tachometer-alt"></i>
                    </div>
                    Admin
                  </a>

                  <div class="sb-sidenav-menu-heading">Interface</div>
                  <a
                    class="nav-link collapsed"
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseLayouts"
                    aria-expanded="false"
                    aria-controls="collapseLayouts"
                  >
                    <div class="sb-nav-link-icon">
                      <i class="fas fa-columns"></i>
                    </div>
                    Barrna/Medicine
                    <div class="sb-sidenav-collapse-arrow">
                      <i class="fas fa-angle-down"></i>
                    </div>
                  </a>
                  <div
                    class="collapse"
                    id="collapseLayouts"
                    aria-labelledby="headingOne"
                    data-bs-parent="#sidenavAccordion"
                  >
                    <nav class="sb-sidenav-menu-nested nav">
                      <nav class="sb-sidenav-menu-nested nav">
                        <a class="nav-link" href="/Medicine">
                          Medicines
                        </a>
                      </nav>
                      <a class="nav-link" href="layout-static.html">
                        Add Medicine
                      </a>
                    </nav>
                  </div>
                  <a
                    class="nav-link collapsed"
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseLayouts"
                    aria-expanded="false"
                    aria-controls="collapseLayouts"
                  >
                    <div class="sb-nav-link-icon">
                      <i class="fas fa-columns"></i>
                    </div>
                    Add
                    <div class="sb-sidenav-collapse-arrow">
                      <i class="fas fa-angle-down"></i>
                    </div>
                  </a>
                  <div
                    class="collapse"
                    id="collapseLayouts"
                    aria-labelledby="headingOne"
                    data-bs-parent="#sidenavAccordion"
                  >
                    <nav class="sb-sidenav-menu-nested nav">
                      <nav class="sb-sidenav-menu-nested nav">
                        <a class="nav-link" href="/Medicine">
                          Admin
                        </a>
                      </nav>
                      <a class="nav-link" href="layout-static.html">
                        Doctor
                      </a>
                    </nav>
                  </div>
                  <div class="sb-sidenav-menu-heading">My Profile</div>
                  <a class="nav-link" href="/editProfileAdmin">
                    <div class="sb-nav-link-icon">
                      <i class="fas fa-chart-area"></i>
                    </div>
                    Edit Profile
                  </a>
                  <a class="nav-link" href="tables.html">
                    <div class="sb-nav-link-icon">
                      <i class="fas fa-table"></i>
                    </div>
                    Edit Password
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <div>
            <section id="hero" class="mt-10 d-flex align-items-center">
              <div className="App pt-5">
                <div className="outer pt-5">
                  <div className="bleonaRegister">
                    <div className="inner  ">
                      <form onSubmit={handleSubmit} className="">
                        <h3 className="">Register new Admin!</h3>

                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your first name here"
                            name="firstName"
                            value={state.firstName}
                            onChange={handleInputChange}
                          />
                          <label></label>
                        </div>

                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your last name here"
                            name="lastName"
                            value={state.lastName}
                            onChange={handleInputChange}
                          />
                          <label></label>
                        </div>

                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            name="email"
                            value={state.email}
                            onChange={handleInputChange}
                          />
                          <label></label>
                        </div>

                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            name="password"
                            value={state.password}
                            onChange={handleInputChange}
                          />
                          <label></label>
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm your password"
                            name="password"
                          />
                          <label></label>
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck1"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck1"
                            >
                              Remember me
                            </label>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </div>
                        </div>

                        <div className="d-grid gap-2 pt-4 ">
                          <button
                            type="submit"
                            className="btn btn-primary  btn-lg btn-block"
                          >
                            Register
                          </button>
                        </div>

                        <p className="forgot-password text-right">
                          Already registered <a href="/Login">log in?</a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
          crossorigin="anonymous"
        ></script>
        <script src="js/scripts.js"></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"
          crossorigin="anonymous"
        ></script>
        <script src="assets/demo/chart-area-demo.js"></script>
        <script src="assets/demo/chart-bar-demo.js"></script>
        <script
          src="https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/umd/simple-datatables.min.js"
          crossorigin="anonymous"
        ></script>
        <script src="js/datatables-simple-demo.js"></script>
      </body>
    </>
  );
};
export default AddAdmin;
