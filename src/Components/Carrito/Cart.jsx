import { ButtonBase, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalStateProvider";

function Cart() {
  const { carrito } = useContext(GlobalContext);
  console.log(carrito);
  return (
    <div style={{maxWidth: 500,}}>
      {carrito.length > 0 ? (
        carrito.map((item, index) => (
            <Grid container spacing={2}>
            <Grid item>
              
                <img src={item.producto.imagen}
            alt={item.producto.nombre} style={{ width: "100px" }}/>
              
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {item.producto.nombre}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Precio unitario: {item.producto.precio}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                  Cantidad: {item.cantidad}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
    
        ))
      ) : (
        <Grid item xs={12}>
          <h1>No seleccionó productos</h1>
        </Grid>
      )}
    </div>
  );
}

export default Cart;
