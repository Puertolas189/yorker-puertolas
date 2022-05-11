import React, { useEffect, useState } from "react";
import { data } from "../../Config/Data";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

function ItemCategoryContainer() {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);
  const filtro = data.filter((prod) => prod.categoria === Number(id));

  useEffect(() => {
    const detalle = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(filtro);
      }, 500);
    });
    detalle
      .then((res) => {
        setProductos(res);
      })
      .catch((err) => console.log(err));

    return () => {};
  }, []);

  return (
    <div style={{ align: "center" }}>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemCategoryContainer;
