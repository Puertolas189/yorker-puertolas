import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "../Components/Contact/Contact";
import ItemCategoryContainer from "../Components/ItemCategoryContainer/ItemCategoryContainer";
import ItemDetailContainer from "../Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../Components/ItemListContainer/ItemListContainer";
import Cart from "../Components/Carrito/Cart";
import Layout from "../Layout/layout";

const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:id" element={<ItemCategoryContainer />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Rutas;
