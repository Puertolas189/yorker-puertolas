import React, { useState } from "react";
import Button from "@mui/material/Button";
import PlusIcon from "@mui/icons-material/Add";
import MinusIcon from "@mui/icons-material/Remove";

function ItemCount({ stock, initial, onAdd }) {
  let [cantidad, setCantidad] = useState(initial);
  let [stockActual, setStockActual] = useState(stock);

  // Incrementa el número a reservar por 1
  let agregar = () => {
    if (cantidad < stockActual) {
      setCantidad(cantidad + 1);
    }
  };

  // disminuye el número a reservar por 1
  let sacar = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div>
      <h6>Unidades disponibles: {stockActual}</h6>
      <h6>Cantidad seleccionada: {cantidad}</h6>
      <Button onClick={sacar}>
        <MinusIcon></MinusIcon>
      </Button>
      <Button onClick={agregar}>
        <PlusIcon></PlusIcon>
      </Button>
    </div>
  );
}

export default ItemCount;
