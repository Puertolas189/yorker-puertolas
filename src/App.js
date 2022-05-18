import "./App.css";
import GlobalStateProvider from "./context/GlobalStateProvider";
import Rutas from "./routes/Rutas";

function App() {
  return (
    <div className="App">
      <GlobalStateProvider>
        <Rutas />
      </GlobalStateProvider>
    </div>
  );
}

export default App;
