import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { UserProvider } from "./UserContext";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/HomeScreen/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import EditProfile from "./Components/EditProfile/editProfile";
import AdminDashbord from "./Components/Pages/AfterLoginRegularUser";
import RegularUsers from "./Components/Pages/AdminDashbord";
import EditPassword from "./Components/EditProfile/editPassword";
import AfterLoginPage from "./Components/Contact/afterLoginPage";
import AllUsersTable from "./Components/Pages/allUsersTable";

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
        <Route path="/regularUsers" element={<RegularUsers />} />
        <Route path="/allUsersTable" element={<AllUsersTable></AllUsersTable>}/>
        <Route path="AdminDashbord" element={<AdminDashbord />} />
        <Route path="/editProfile" element={<EditProfile id={id} />} />
        <Route path="/editPassword" element={<EditPassword />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/afterLoginPage" element={<AfterLoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
