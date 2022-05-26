import React, { useEffect, useState } from "react";
import { data } from "../../Config/Data";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs } from "firebase/firestore";
import db from "../../Service/firebase";

function ItemCategoryContainer() {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);

  const getData = async () => {
    const docs = collection(db, "Productos");

    try {
      const datos = await getDocs(docs);
      const result = datos.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );
      const filtro = result.filter((prod) => prod.categoria === Number(id));
      setProductos(filtro);
      
    } catch (error) {}
  };
  useEffect(() => {
    getData();
    return () => {
      setProductos([]);
    };
  }, [id]);

  return (
    <div style={{ align: "center" }}>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemCategoryContainer;
