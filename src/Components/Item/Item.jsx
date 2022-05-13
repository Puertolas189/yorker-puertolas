import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

function Item({ producto }) {
  return (
    <div>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{ width: "300px" }}
      />

      <div>
        <br />
        <h4>{producto.nombre}</h4>
        <h3>{producto.precio}</h3>
        {/* <ItemCount stock={producto.stock} initial={initial} func="onAdd" /> */}
        <Link to={`/item/${producto.id}`}>Ver detalle</Link>
      </div>
    </div>
  );
}

export default Item;
