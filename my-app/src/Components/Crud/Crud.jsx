import React, { useEffect, useState } from "react";
import axios from "axios";

const Crud = () => {
  const [smundjaList, setSmundjaList] = useState([]);
  const [newSmundja, setNewSmundja] = useState({
    name: "",
    specializimiId: "",
  });
  const [editSmundja, setEditSmundja] = useState(null);
  const [selectedSpecializimi, setSelectedSpecializimi] = useState("");
  const [specializimiList, setSpecializimiList] = useState([]);

  useEffect(() => {
    fetchSmundjaList();
    fetchSpecializimiList();
  }, []);

  const fetchSmundjaList = async () => {
    try {
      const response = await axios.get(
        "https://localhost:5008/api/Specializimi"
      );
      setSmundjaList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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

  const createSmundja = async (event) => {
    event.preventDefault();
    const newSmundjaData = {
      name: newSmundja.name,
      specializimiId: selectedSpecializimi,
    };

    await axios.post(
      "https://localhost:5008/api/Specializimi/",
      newSmundjaData
    );
    setNewSmundja({ name: "", specializimiId: "" });
    setSelectedSpecializimi("");
    fetchSmundjaList();
  };

  const updateSmundja = async () => {
    try {
      await axios.put(
        `https://localhost:5008/api/Specializimi/${editSmundja.id}`,
        editSmundja
      );
      setEditSmundja(null);
      fetchSmundjaList();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSmundja = async (id) => {
    try {
      await axios.delete(`https://localhost:5008/api/Specializimi/${id}`);
      fetchSmundjaList();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (smundja) => {
    setEditSmundja({ ...smundja });
  };

  const handleCancel = () => {
    setEditSmundja(null);
  };

  return (
    <div>
      <h2>Smundja Table</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Specializimi ID</th>
            <th>Specializimi</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {smundjaList.map((smundja) =>
            smundja.id === editSmundja?.id ? (
              <tr key={smundja.id}>
                <td>{smundja.id}</td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={editSmundja.name}
                    onChange={(e) =>
                      setEditSmundja({ ...editSmundja, name: e.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={editSmundja.specializimiId}
                    onChange={(e) =>
                      setEditSmundja({
                        ...editSmundja,
                        specializimiId: e.target.value,
                      })
                    }
                  />
                </td>
                <td>{editSmundja.specializimi?.name}</td>
                <td>
                  <button className="btn btn-primary" onClick={updateSmundja}>
                    Save
                  </button>
                  <button className="btn btn-secondary" onClick={handleCancel}>
                    Cancel
                  </button>
                </td>
              </tr>
            ) : (
              <tr key={smundja.id}>
                <td>{smundja.id}</td>
                <td>{smundja.name}</td>
                <td>{smundja.specializimiId}</td>
                <td>{smundja.specializimi?.name}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(smundja)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteSmundja(smundja.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>

      <h2>Create Smundja</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            value={newSmundja.name}
            onChange={(e) =>
              setNewSmundja({ ...newSmundja, name: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Specializimi:</label>
          <select
            className="form-control"
            value={selectedSpecializimi}
            onChange={(e) => setSelectedSpecializimi(e.target.value)}
          >
            <option value="">Select Specializimi</option>
            {specializimiList.map((specializimi) => (
              <option key={specializimi.id} value={specializimi.id}>
                {specializimi.name}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary" onClick={createSmundja}>
          Create
        </button>
      </form>
    </div>
  );
};

export default Crud;
