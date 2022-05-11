import { Grid } from "@mui/material";
import React from "react";

function ItemDetail({ producto }) {
    console.log(producto);
    console.log(producto.imagen);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>
          <img
            src={producto.imagen}
            alt={producto.nombre}
            style={{ width: "300px" }}
          />
        </Grid>
        <Grid item xs={3}>
          <div>
            <br />
            <h1>{producto.nombre}</h1>
            <h3>{producto.precio}</h3>
          </div>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
        <br/>
        <br/>
        <h1>{producto.titulo}</h1>
        <br/>
        <h4>{producto.descripcion}</h4>
        <br/>
        <h4>{producto.accion}</h4>
        <br/>
        <h4>{producto.modouso}</h4>
        <br/>
        <br/>
        <h2>¿EN QUÉ HORARIO DEBE APLICARSE?</h2>
        <br/>
        <h4>{producto.horario}</h4>
        <br/>
        <br/>
        <h2>¿QUIENES PUEDEN UTILIZARLO?</h2>
        <br/>
        <h4>{producto.quienes}</h4>
        </Grid>
        <Grid item xs={3}></Grid>
    </Grid>
    </div>
  );
}

export default ItemDetail;
