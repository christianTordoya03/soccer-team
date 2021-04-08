import { createStore } from "redux";

//data
const initialState = {
  jugadores: [{
    id: 1,
    nombre: "Cesar Cachay",
    foto: ""
  }],
  titulares: [],
  suplentes: [],
};

//state, lo que se quiere
const reducerEntrenador = (state = initialState, action) => {
  return state;
};

export default createStore(reducerEntrenador);
