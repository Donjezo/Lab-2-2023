import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";

const DashbordHeader = (props) => {
  const history = useNavigate();

  function logout() {
    localStorage.removeItem("userId");
    history("/login");
  }

  return (
    <div>
      <header id="header" class="">
        <div class="container d-flex align-items-center">
          <h1 class="logo me-auto">
            <a href="/">E-Patient</a>
          </h1>

          <a href="index.html" class="logo me-auto">
            <img src="assets/img/logo.png" alt="" class="img-fluid"></img>
          </a>

          <div className="me-5">
            <div class="input-group rounded ml-3 pd-3">
              <input
                type="search"
                class="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
              </span>
            </div>
          </div>
          <nav id="navbar1" class="navbar1 order-last order-lg-0">
            <ul>
              <li>
                <a class="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>

              <li>
                <a class="nav-link scrollto" href="#departments">
                  My Posts
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#doctors">
                  Barrnat
                </a>
              </li>
              <li class="dropdown">
                <a href="#">
                  <span>Users</span> <i class="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Admin</a>
                  </li>

                  <li>
                    <a href="#">Doktorr</a>
                  </li>
                  <li>
                    <a href="#">Organizata</a>
                  </li>
                  <li>
                    <a href="#">Pacient</a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="nav-link scrollto" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <a href="/editProfile" class="appointment-btn scrollto me-3">
            <span class="d-none d-md-inline">
              Profile <i class="bi bi-person-fill"></i>
            </span>
          </a>
          <a>
            <i class="lg bi bi-chat me-3 "></i>
          </a>

          <a onClick={logout}>
            <i class=" md bi bi-box-arrow-in-right "></i>
          </a>
        </div>
      </header>
    </div>
  );
};
export default DashbordHeader;
