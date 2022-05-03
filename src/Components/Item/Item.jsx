import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import Button from "@mui/material/Button";

function Item({ producto }) {

  const initial=0;
  const onAdd = () => {
    console.log("Hola Mundo");
  };

  return (
    <div>
      <img
        src={producto.imagen}
        alt="Imagen del curso"
        style={{ width: "300px" }}
      />

      <div>
        <br/>
        <h4>{producto.nombre}</h4>
        <h3>{producto.precio}</h3>
        <ItemCount stock={producto.stock} initial={initial} func="onAdd"/>
        <Button>Ver detalle</Button>
      </div>
    </div>
  );
}

export default Item;
