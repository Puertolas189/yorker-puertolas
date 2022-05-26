import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { data } from "../../Config/Data";
import { useParams } from "react-router-dom";
import db from "../../Service/firebase";
import { getDoc, doc } from "firebase/firestore";

function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
    
  useEffect( () => {
    const docs = doc(db, "Productos", id);
    try {
      getDoc(docs).then(snapshot =>{
        if(snapshot.exists)
        {
          setProducto({id:snapshot.id,...snapshot.data()})
        }
      });
    } catch (error) {}
  }, []);

// useEffect(() => {
//     const detalle = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(filtro);
//       }, 2000);
//     });
//     detalle
//       .then((res) => {
//         setProducto(res);
//       })
//       .catch((err) => console.log(err));

//     return () => {};
//   }, []);

  return (
    <div style={{ align: "center" }}>
      {producto ? (
        <ItemDetail producto={producto} />
      ) : (
        <h1>Cargando</h1>
      )}
    </div>
  );
}

export default ItemDetailContainer;
