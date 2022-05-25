import React, { useEffect, useState } from "react";
import { data } from "../../Config/Data";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import db from "../../Service/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

function ItemCategoryContainer() {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);
  const filtro = data.filter((prod) => prod.categoria === Number(id));

  // useEffect(() => {
  //   const detalle = new Promise((resolve, reject) => {
  //       resolve(filtro);
  //   });
  //   detalle
  //     .then((res) => {
  //       setProductos(res);
  //     })
  //     .catch((err) => console.log(err));

  //   return () => {setProductos([])};
  // }, [id]);

  const getData = async () => {
    console.log(id);
    const docs = query(
      collection(db, "Productos"),
      where("categoria", "==", id)
    );
    console.log(docs);
    try {
      getDocs(docs).then((snapshot) => {
        if (snapshot.size === 0) {
          console.log("Sin resultados");
        }
        setProductos(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ align: "center" }}>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemCategoryContainer;
