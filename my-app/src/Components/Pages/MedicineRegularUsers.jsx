import React, { useEffect, useState } from "react";
import DashbordHeader from "../Header/DashbordHeader";
import axios from "axios";
import  './css/MedicineRegularUsers.css'
import Footer from "../Footer/Footer";
const MedicineRegularUsers = () => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    fetchMedicines();
  }, []);

  const fetchMedicines = async () => {
    try {
      const response = await axios.get('https://localhost:5010/api/medicines');
      setMedicines(response.data);
    } catch (error) {
      console.error('Error fetching medicines:', error);
    }
  };

  return (
    <div>
      <DashbordHeader></DashbordHeader>
      <div className="container mt-5 ">
        <div className="row mx-5 justify-content-center product-grid-style">
          {medicines.map((medicine) => (
            <div
              key={medicine.id}
              className="col-11 col-sm-6 col-lg-4 col-xl-3"
            >
              <div className="product-details">
                <div className="product-img">
                  <img src={medicine.imageUrl} alt={medicine.name} />
                  <div className="product-cart">
                    <a href="#!">
                      <i className="fa-solid fa fa-eye"></i>
                    </a>
                    <a href="#!">
                      <i className="fas fa-cart-plus"></i>
                    </a>
                    <a href="#!">
                      <i className="fas fa-heart"></i>
                    </a>
                  </div>
                </div>
                <div className="product-info">
                  <a href="#!">{medicine.name}</a>
                  <p className="price text-center m-0">
                    <span className="red line-through me-2">
                      ${medicine.unitPrice}
                    </span>
                    <span>${medicine.unitPrice - medicine.discount}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
          </div>
          <Footer></Footer>
    </div>
  );
};

export default MedicineRegularUsers;


