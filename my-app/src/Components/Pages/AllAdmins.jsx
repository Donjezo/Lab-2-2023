import { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./css/styles.css";
import { useNavigate } from "react-router-dom";

const AllAdminsTable = () => {
  const history = useNavigate();
  const navigate = useNavigate();
  const myValue = localStorage.getItem("userId");

  const [users, setUsers] = useState([]);

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

          <button
            class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
            id="sidebarToggle"
            href="#!"
          >
            <i class="fas fa-bars"></i>
          </button>

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
                      <a class="nav-link" href="layout-static.html">
                        Add Medicine
                      </a>
                    </nav>
                  </div>
                  <a
                    class="nav-link collapsed"
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsePages"
                    aria-expanded="false"
                    aria-controls="collapsePages"
                  >
                    <div class="sb-nav-link-icon">
                      <i class="fas fa-book-open"></i>
                    </div>
                    Add Admin/Doctorr
                    <div class="sb-sidenav-collapse-arrow">
                      <i class="fas fa-angle-down"></i>
                    </div>
                  </a>

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
            <div class="card-header">
              <i class="fas fa-table me-1"></i>
              DataTable Example
              <div class="card-body">
                <div>
                  <div className="mb-5 col-sm-6 col-md-8 col align-self-center container px-4 col-sm-6 col-md-8">
                    <h3>All Admins table</h3>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">id</th>
                          <th scope="col">First</th>
                          <th scope="col">Last</th>
                          <th scope="col">email</th>
                          <th scope="col">Role</th>
                          <th scope="col">Handle</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users
                          .filter((user) => user.type === "admin")
                          .map((user) => (
                            <tr key={user.id}>
                              <th>{user.id}</th>
                              <td>{user.firstName}</td>
                              <td>{user.lastName}</td>
                              <td>{user.email}</td>
                              <td>{user.type}</td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  onClick={() => handleDeleteUser(user.id)}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="layoutSidenav_content">
            <footer class="py-4 bg-light mt-auto">
              <div class="container-fluid px-4">
                <div class="d-flex align-items-center justify-content-between small">
                  <div class="text-muted">Copyright &copy; Lab2 2023</div>
                  <div>
                    <a href="#">Privacy Policy</a>
                    &middot;
                    <a href="#">Terms &amp; Conditions</a>
                  </div>
                </div>
              </div>
            </footer>
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
export default AllAdminsTable;
