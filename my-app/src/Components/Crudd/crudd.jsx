import React, { useState, useEffect } from "react";
import axios from "axios";

const CrudComponent = () => {
  const [ekipet, setEkipet] = useState([]);
  const [newEkipi, setNewEkipi] = useState({});

  useEffect(() => {
    fetchEkipet();
  }, []);

  const fetchEkipet = async () => {
    try {
      const response = await axios.get("https://localhost:5008/api/Ekipi");
      setEkipet(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addEkipi = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://localhost:5008/api/Ekipi",
        newEkipi
      );
      setEkipet([...ekipet, response.data]);
      setNewEkipi({});
    } catch (error) {
      console.log(error);
    }
  };

  const updateEkipi = async (id, updatedEkipi) => {
    try {
      await axios.put(`https://localhost:5008/api/Ekipi/${id}`, updatedEkipi);
      setEkipet(
        ekipet.map((ekipi) =>
          ekipi.id === id ? { ...ekipi, ...updatedEkipi } : ekipi
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEkipi = async (id) => {
    try {
      await axios.delete(`https://localhost:5008/api/Ekipi/${id}`);
      setEkipet(ekipet.filter((ekipi) => ekipi.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Ekipet</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
            <th>League</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ekipet.map((ekipi) => (
            <tr key={ekipi.id}>
              <td>{ekipi.id}</td>
              <td>{ekipi.emri}</td>
              <td>{ekipi.qyteti}</td>
              <td>{ekipi.liga.emri}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteEkipi(ekipi.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add Ekipi</h2>
      <form onSubmit={addEkipi}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Ekipi Name"
                value={newEkipi.emri || ""}
                onChange={(e) =>
                  setNewEkipi({ ...newEkipi, emri: e.target.value })
                }
              />
            </div>
          </div>
          <div className="col-md-6">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CrudComponent;
