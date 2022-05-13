import React, { useState } from "react";
import Button from "@mui/material/Button";
import PlusIcon from "@mui/icons-material/Add";
import MinusIcon from "@mui/icons-material/Remove";

function ItemCount({ stock, initial, onAdd }) {
  let [cantidad, setCantidad] = useState(initial);
  let [stockActual, setStockActual] = useState(stock);

  let sumar = () => {
    console.log(cantidad);
    console.log(stockActual);
    if (cantidad < stockActual) {
      setCantidad(Number(cantidad) + 1);
    }
    console.log(cantidad);
  };

  let restar = () => {
    if (cantidad > 0) {
      setCantidad(Number(cantidad) - 1);
    }
  };

  let agregar = () => {
    setStockActual(Number(stockActual) - Number(cantidad));
    onAdd(cantidad);
  };

  return (
    <div>
      <h6>Unidades disponibles: {Number(stockActual)}</h6>
      <h6>Cantidad seleccionada: {Number(cantidad)}</h6>
      <Button onClick={restar}>
        <MinusIcon></MinusIcon>
      </Button>
      <Button onClick={sumar}>
        <PlusIcon></PlusIcon>
      </Button>
      <Button onClick={agregar}>Agregar</Button>
    </div>
  );
}

export default ItemCount;
