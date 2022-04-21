import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer
        greeting={"Bienvenido a un nuevo mundo para la mujer."}
      ></ItemListContainer>
    </div>
  );
}

export default App;
