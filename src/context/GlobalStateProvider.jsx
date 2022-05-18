import React, { createContext, useState } from "react";

export const GlobalContext = createContext("");

const GlobalStateProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const AddToCard = (producto, cantidad) => {
    if (carrito?.length > 0) {
      if (carrito.findIndex((item) => item.producto.id === producto.id) >= 0)
        console.log("Ya existe");
      else 
        setCarrito([...carrito, { producto, cantidad }]);
    } else {
      setCarrito([...carrito, { producto, cantidad }]);
    }
  };

  return (
    <GlobalContext.Provider value={{ carrito, AddToCard }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalStateProvider;
