import { Button, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalStateProvider";
import DeleteIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";

function Cart() {
  const { carrito, DeleteFromCard, DeleteAll, totalPrice } = useContext(GlobalContext);

  let eliminarUno = (id) => {
    DeleteFromCard(id);
  };

  let eliminarTodos = () => {
    DeleteAll();
  };

  return (
    <div>
      <div style={{ maxWidth: 500 }}>
        {carrito.length > 0
          ? carrito.map((item) => (
              <Grid container spacing={2}>
                <Grid item>
                  <img
                    src={item.producto.imagen}
                    alt={item.producto.nombre}
                    style={{ width: "100px" }}
                  />
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        {item.producto.nombre}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Precio unitario: $ {item.producto.precio}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Monto total: $ {item.producto.precio * item.cantidad}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Cantidad: {item.cantidad}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ cursor: "pointer" }} variant="body2">
                        <Button  onClick={() => eliminarUno(item.producto.id)}>
                          <DeleteIcon></DeleteIcon>
                        </Button>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ))
          : ""}
      </div>
      <div>
        {carrito.length > 0 ? (
          <Grid item xs={12}>
            <h1>TOTAL A PAGAR</h1>
            <h1>{totalPrice()}</h1>
            <Link to='/'><Button>FINALIZAR COMPRA</Button></Link>
            <Link to='/'><Button>Seguir comprando</Button></Link>
            <Button onClick={eliminarTodos}>Anular compra</Button>
          </Grid>
        ) : (
          <Grid item xs={12}>
            <h1>No seleccionó productos</h1>
            <Link to='/'><Button>Empezar a comprar</Button></Link>
          </Grid>
        )}
      </div>
    </div>
  );
}

export default Cart;
