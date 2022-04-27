import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({ greeting }) => {
  const onAdd = () => {
    console.log("Hola Mundo");
  };
  return (
    <div>
      <h1 style={{ color: "red" }}>{greeting}</h1>
      <ItemCount stock="12" initial="0" func="onAdd"></ItemCount>
    </div>
  );
};

export default ItemListContainer;
