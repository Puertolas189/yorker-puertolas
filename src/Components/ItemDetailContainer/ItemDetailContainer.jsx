import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { data } from "../../Config/Data";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const filtro = data.find((prod) => prod.id === Number(id));

  useEffect(() => {
    const detalle = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(filtro);
      }, 2000);
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
      {producto ? (
        <ItemDetail producto={producto} />
      ) : (
        <h1>Cargando</h1>
      )}
    </div>
  );
}

export default ItemDetailContainer;
