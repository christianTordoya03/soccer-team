import React from "react";
import { Provider } from "react-redux";
import Store from "./App/Store";
import Jugadores from "./Components/Jugadores";

function App() {
  return (
    <Provider store={Store}>
      <main>
        <h1>Soccer-Team</h1>
        <Jugadores />
        {/* <EquipoSeleccionado /> */}
      </main>
    </Provider>
  );
}

export default App;
