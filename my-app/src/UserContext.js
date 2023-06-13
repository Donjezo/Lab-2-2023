import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(""); // Updated variable name

  const setUser = (id) => {
    setUserId(id); // Updated variable name
  };

  return (
    <UserContext.Provider value={{ userId, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
