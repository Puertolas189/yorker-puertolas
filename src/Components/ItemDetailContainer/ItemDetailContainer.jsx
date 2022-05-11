import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { data } from "../../Config/Data";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const { id } = useParams();
    const [producto, setProducto] = useState([]);
  const filtro = data.find((prod) => prod.id === Number(id));

  useEffect(() => {
    const detalle = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(filtro);
      }, 500);
    });
    detalle
      .then((res) => {
        setProducto(res);
      })
      .catch((err) => console.log(err));

    return () => {};
  }, []);

  return (
    <div style={{ align: "center" }}>
      <ItemDetail producto={filtro} />
    </div>
  );
}

export default ItemDetailContainer;
