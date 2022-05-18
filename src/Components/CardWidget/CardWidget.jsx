import React from "react";
import { Link } from "react-router-dom";
import botonCompra from "../../Imagenes/BotonCompraYorker.gif";
import ItemList from "../ItemList/ItemList";

function CardWidget() {
  return (
    <div>
      <Link to={`/cart`}>
        {" "}
        <img src={botonCompra} style={{ width: "5rem" }} alt=""></img>
      </Link>{" "}
    </div>
  );
}

export default CardWidget;
