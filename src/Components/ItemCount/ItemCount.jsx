import React, { useState } from "react";
import Button from "@mui/material/Button";
import PlusIcon from "@mui/icons-material/Add";
import MinusIcon from "@mui/icons-material/Remove";

function ItemCount({ stock, initial, onAdd }) {
  let [cantidad, setCantidad] = useState(initial);
  let [stockActual, setStockActual] = useState(stock);

  let sumar = () => {
    if (cantidad < stockActual) {
      setCantidad(cantidad + 1);
    }
  };

  let restar = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  let agregar = () => {
    onAdd(stockActual-cantidad)
  };

  return (
    <div>
      <h6>Unidades disponibles: {stockActual}</h6>
      <h6>Cantidad seleccionada: {cantidad}</h6>
      <Button onClick={restar}>
        <MinusIcon></MinusIcon>
      </Button>
      <Button onClick={agregar}>
        <PlusIcon></PlusIcon>
      </Button>
    </div>
  );
}

export default ItemCount;
