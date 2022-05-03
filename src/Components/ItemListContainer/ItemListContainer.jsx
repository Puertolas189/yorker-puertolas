import React from "react";
import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import DepigmentI from "../../Imagenes/Depigment I.jpg";
import HydrateI from "../../Imagenes/Hydrate I.jpg";
import HydrateII from "../../Imagenes/Hydrate II.jpg";
import RenewI from "../../Imagenes/Renew I.jpg";
import RenewII from "../../Imagenes/Renew II.jpg";
import RestructureI from "../../Imagenes/Restructure I.jpg";
import RestructureII from "../../Imagenes/Restructure II.jpg";
import ShotAntiAging from "../../Imagenes/Shot AntiAging.png";
import ShotHydratation from "../../Imagenes/Shot Hydratation.png";
import ShotRegeneration from "../../Imagenes/Shot Regeneration.png";
import Treatment from "../../Imagenes/Treatment.png";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const cremas = [
    {
      id: 1,
      nombre: "Despirmentación I",
      descripcion: "",
      stock: 20,
      precio: "S 1500",
      imagen: DepigmentI,
    },
    {
      id: 2,
      nombre: "Hidratación I",
      descripcion: "",
      stock: 40,
      precio: "S 1500",
      imagen: HydrateI,
    },
    {
      id: 3,
      nombre: "Hidratación II",
      descripcion: "",
      stock: 10,
      precio: "S 1500",
      imagen: HydrateII,
    },
    {
      id: 4,
      nombre: "Renovación I",
      descripcion: "",
      stock: 10,
      precio: "S 1500",
      imagen: RenewI,
    },
    {
      id: 5,
      nombre: "Renovación II",
      descripcion: "",
      stock: 13,
      precio: "S 1500",
      imagen: RenewII,
    },
    {
      id: 6,
      nombre: "Reestructuración I",
      descripcion: "",
      stock: 10,
      precio: "S 1500",
      imagen: RestructureI,
    },
    {
      id: 7,
      nombre: "Reestructuración II",
      descripcion: "",
      stock: 10,
      precio: "S 1500",
      imagen: RestructureII,
    },
    {
      id: 8,
      nombre: "Shot Anti-Age",
      descripcion: "",
      stock: 7,
      precio: "S 3000",
      imagen: ShotAntiAging,
    },
    {
      id: 9,
      nombre: "Shot Hidratación",
      descripcion: "",
      stock: 7,
      precio: "S 3000",
      imagen: ShotHydratation,
    },
    {
      id: 10,
      nombre: "Shot Regeneración",
      descripcion: "",
      stock: 7,
      precio: "S 3000",
      imagen: ShotRegeneration,
    },
    {
      id: 11,
      nombre: "Tratamiento Renovación Celular",
      descripcion: "",
      stock: 5,
      precio: "S 9500",
      imagen: Treatment,
    },
  ];

  useEffect(() => {
    const pedido = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(cremas);
      }, 2000);
    });
    pedido
      .then((res) => {
        setProductos(res);
      })
      .catch((err) => console.log(err));

    return () => {};
  }, []);

  return (
    <div style={{align: "center"}}>
      <h1 style={{ color: "red" }}>{greeting}</h1>
      <ItemList productos={productos}/>
    </div>
  );
};

export default ItemListContainer;
