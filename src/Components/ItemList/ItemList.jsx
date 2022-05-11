import React from "react";
import Item from "../Item/Item";
import Spinner from "../../Imagenes/Spinner.gif";
import './ItemList';
import { Grid } from "@mui/material";

function ItemList({ productos }) {
  console.log(productos);
  return (
    <Grid container spacing={2}>
      {productos.length > 0 ? (
        productos.map((producto) => <Grid item xs={4}><Item producto={producto} /></Grid>)
      ) : (
        <Grid item xs={12}>
          <h1>Cargando...</h1>
          <img src={Spinner}></img>
        </Grid>
      )}
    </Grid>
  );
}

export default ItemList;
