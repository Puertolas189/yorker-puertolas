import React from "react";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import db from "../../Service/firebase";
import { getDocs, collection } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const getData=async () => {
    const docs = collection(db, "Productos");

    try {
      const datos = await getDocs(docs);
      const result = datos.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );
      setProductos(result);
    } catch (error) {}
  }
  useEffect( () => {
    getData();
  }, []);

  return (
    <div style={{ align: "center" }}>
      <h1 style={{ color: "red" }}>{greeting}</h1>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
