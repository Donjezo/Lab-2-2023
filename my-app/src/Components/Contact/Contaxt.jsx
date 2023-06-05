import React, { useEffect, useState } from "react";

function Contact() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://localhost:5445/api/coffeshop");
      const json = await response.json();

      // Assuming the API response is an array of objects
      const coffeeShopData = json.map((item) => ({
        id: item.id,
        name: item.name,
        address: item.address,
      }));

      setData(coffeeShopData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <p>ID: {item.id}</p>
          <p>Name: {item.name}</p>
          <p>Address: {item.address}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Contact;
