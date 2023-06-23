import React, { useEffect, useState } from "react";
import axios from "axios";

const Crud2 = () => {
  const [specializimiList, setSpecializimiList] = useState([]);
  const [newSpecializimi, setNewSpecializimi] = useState({
    name: "",
  });
  const [editSpecializimi, setEditSpecializimi] = useState(null);

  useEffect(() => {
    fetchSpecializimiList();
  }, []);

  const fetchSpecializimiList = async () => {
    try {
      const response = await axios.get(
        "https://localhost:5008/api/Specializimi"
      );
      setSpecializimiList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createSpecializimi = async (event) => {
    event.preventDefault();
    await axios.post(
      "https://localhost:5008/api/Specializimi/",
      newSpecializimi
    );
    setNewSpecializimi({ name: "" });
    fetchSpecializimiList();
  };

  const updateSpecializimi = async () => {
    try {
      await axios.put(
        `https://localhost:5008/api/Specializimi/${editSpecializimi.id}`,
        editSpecializimi
      );
      setEditSpecializimi(null);
      fetchSpecializimiList();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSpecializimi = async (id) => {
    try {
      await axios.delete(`https://localhost:5008/api/Specializimi/${id}`);
      fetchSpecializimiList();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (specializimi) => {
    setEditSpecializimi({ ...specializimi });
  };

  const handleCancel = () => {
    setEditSpecializimi(null);
  };

  return (
    <div>
      <h2>Specializimi Table</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {specializimiList.map((specializimi) =>
            specializimi.id === editSpecializimi?.id ? (
              <tr key={specializimi.id}>
                <td>{specializimi.id}</td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={editSpecializimi.name}
                    onChange={(e) =>
                      setEditSpecializimi({
                        ...editSpecializimi,
                        name: e.target.value,
                      })
                    }
                  />
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={updateSpecializimi}
                  >
                    Save
                  </button>
                  <button className="btn btn-secondary" onClick={handleCancel}>
                    Cancel
                  </button>
                </td>
              </tr>
            ) : (
              <tr key={specializimi.id}>
                <td>{specializimi.id}</td>
                <td>{specializimi.name}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(specializimi)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteSpecializimi(specializimi.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>

      <h2>Create Specializimi</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            value={newSpecializimi.name}
            onChange={(e) =>
              setNewSpecializimi({ ...newSpecializimi, name: e.target.value })
            }
          />
        </div>
        <button className="btn btn-primary" onClick={createSpecializimi}>
          Create
        </button>
      </form>
    </div>
  );
};

export default Crud2;
