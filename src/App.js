import React from "react";
import { Provider } from "react-redux";
import Store from "./App/Store";
import EquipoSeleccionado from "./Components/EquipoSeleccionado";
import Jugadores from "./Components/Jugadores";
import "./Styles/Styles.scss";

function App() {
  return (
    <Provider store={Store}>
      <main>
        <h1>Soccer-Team</h1>
        <Jugadores />
        <EquipoSeleccionado />
      </main>
    </Provider>
  );
}

export default App;
