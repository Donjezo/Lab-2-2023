import { useEffect, useState, useContext } from "react";
import DashbordHeader from "../Header/DashbordHeader";
import Footer from "../Footer/Footer";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";
function Dashbord(props) {
  const navigate = useNavigate();
  const myValue = localStorage.getItem("userId");

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://localhost:5001/api/User")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  const handleDeleteUser = (userId) => {
    fetch(`https://localhost:5001/api/User/${userId}`, {
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

  return (
    <div>
      <div className="mb-5">
        <DashbordHeader></DashbordHeader>
      </div>
      <div>
        <h3>pershendetje{props.id}</h3>
        <h3>pershendetje{myValue}</h3>
      </div>

      <div className="mb-5 col-sm-6 col-md-8 col align-self-center container px-4 col-sm-6 col-md-8">
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
            {users.map((user) => (
              <tr key={user.id}>
                <th>{user.id}</th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.type}</td>
                <td>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer className="navbar"></Footer>
    </div>
  );
}

export default Dashbord;
