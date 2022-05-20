import React, { useContext } from "react";
import { Link } from "react-router-dom";
import botonCompra from "../../Imagenes/BotonCompraYorker.gif";
import { GlobalContext } from "../../context/GlobalStateProvider";

function CardWidget() {
  const { itemsEnCarrito } = useContext(GlobalContext);
  
  return (
    <div>
      <Link to={`/cart`}>
        {" "}<h7>{itemsEnCarrito}</h7>
        <img src={botonCompra} style={{ width: "5rem" }} alt=""></img>
      </Link>{" "}
    </div>
  );
}

export default CardWidget;
