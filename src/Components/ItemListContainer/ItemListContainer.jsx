import React from "react";
import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { data } from "../../Config/Data";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const pedido = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
    pedido
      .then((res) => {
        setProductos(res);
      })
      .catch((err) => console.log(err));

    return () => {};
  }, []);

  return (
    <div style={{ align: "center" }}>
      <h1 style={{ color: "red" }}>{greeting}</h1>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
