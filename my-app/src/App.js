import React, { useState } from "react";

import { UserProvider } from "./UserContext";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/HomeScreen/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import EditProfile from "./Components/EditProfile/editProfile";
import AdminDashbord from "./Components/Pages/AdminDashbord";
import RegularUsers from "./Components/Pages/AdminDashbord";
import AfterLoginRegularUser from "./Components/Pages/AfterLoginRegularUser";
import EditPassword from "./Components/EditProfile/editPassword";
import AfterLoginPage from "./Components/Contact/afterLoginPage";
import AllUsersTable from "./Components/Pages/allUsersTable";
import AllAdminsTable from "./Components/Pages/AllAdmins";
import AllDoctorsTable from "./Components/Pages/AllDoctors";
import EditProfileAdmin from "./Components/EditProfile/editProfileAdmin";
import Medicine from "./Components/Pages/Medicine";
import EditPasswordAdmin from "./Components/EditProfile/editPasswordAdmin";
import MedicineRegularUsers from "./Components/Pages/MedicineRegularUsers";
import UserPost from "./Components/Pages/userPosts";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDdNYqmIfSKcV38gn-CYFhSuyKbCuKazzc",
//   authDomain: "donjeta-domain.firebaseapp.com",
//   projectId: "donjeta-domain",
//   storageBucket: "donjeta-domain.appspot.com",
//   messagingSenderId: "397740420365",
//   appId: "1:397740420365:web:07d7e91d83efa1ff769444",
//   measurementId: "G-QL4KRJ475G",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App() {
  const [id, setId] = useState("");
  console.log(id);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route
          path="/Login"
          element={
            <UserProvider>
              <Login id={(id) => setId(id)} />
            </UserProvider>
          }
        />

        <Route
          path="/regularUsers"
          element={<AfterLoginRegularUser></AfterLoginRegularUser>}
        />
        <Route
          path="/MyPosts"
          element={<UserPost></UserPost>}
        />
        <Route
          path="/MedicineRegularUsers"
          element={<MedicineRegularUsers />}
        />
        <Route path="/Dashbord" element={<AdminDashbord />} />
        <Route path="/Medicine" element={<Medicine />} />
        <Route
          path="/allAdminTable"
          element={<AllAdminsTable></AllAdminsTable>}
        ></Route>
        <Route
          path="/allDoctorTable"
          element={<AllDoctorsTable></AllDoctorsTable>}
        ></Route>
        <Route
          path="/allUsersTable"
          element={<AllUsersTable></AllUsersTable>}
        />
        <Route path="/editProfileAdmin" element={<EditProfileAdmin />} />
        <Route path="/editPasswordAdmin" element={<EditPasswordAdmin />} />
        <Route path="/AdminDashbord" element={<AdminDashbord />} />
        <Route path="/editProfile" element={<EditProfile id={id} />} />
        <Route path="/editPassword" element={<EditPassword />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/afterLoginPage" element={<AfterLoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
