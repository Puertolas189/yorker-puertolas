import React, { createContext, useState } from "react";

export const GlobalContext = createContext("");

const GlobalStateProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  //const [itemsEnCarrito, setItemsEnCarrito] = useState(0);

   const DeleteFromCard = (id) => {
     console.log("id: " + id);
     const prodEliminar = carrito.filter((item) => item.producto.id !== id);
     setCarrito(prodEliminar);
   };

  const DeleteAll = () => {
    setCarrito([]);
  };

  const AddToCard = (producto, cantidad) => {
    if (carrito?.length > 0) {
      if (carrito.some((item) => item.producto.id === producto.id)) {
        carrito.find((item) => item.producto.id === producto.id).cantidad +=
          Number(cantidad);
        //setItemsEnCarrito(itemsEnCarrito + Number(cantidad));
        console.log("Ya existe");
      } else setCarrito([...carrito, { producto, cantidad }]);
    } else {
      setCarrito([...carrito, { producto, cantidad }]);
    }
  };

  const totalPrice = () => {
    return carrito.reduce(
      (accumulator, item) =>
        accumulator + Number(item.producto.precio * item.cantidad),
      0
    );
  };

  return (
    <GlobalContext.Provider
      value={{
        carrito,
        //itemsEnCarrito,
        AddToCard,
        DeleteFromCard,
        DeleteAll,
        totalPrice,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalStateProvider;
