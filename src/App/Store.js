import { createStore } from "redux";
import cesar from "../Assets/cesar.jpg";
import abelink from "../Assets/abelink.jpg";
import benito from "../Assets/benito.jpg";
import bryan from "../Assets/bryan.jpg";
import fernando from "../Assets/fernando.jpg";
import lucho from "../Assets/lucho.jpg";
import luigi from "../Assets/luigi.jpg";
import misho from "../Assets/misho.jpg";
import owen from "../Assets/owen.jpg";
import skins from "../Assets/skins.jpg";
import waida from "../Assets/waida.jpg";
import yoshi from "../Assets/yoshi.jpg";
import mayi from "../Assets/mayi.jpg";

//data
const initialState = {
  jugadores: [
    {
      id: 1,
      nombre: "Shiffu",
      foto: cesar,
    },
    {
      id: 2,
      nombre: "Abelink",
      foto: abelink,
    },
    {
      id: 3,
      nombre: "Benito",
      foto: benito,
    },
    {
      id: 4,
      nombre: "Sinior",
      foto: bryan,
    },
    {
      id: 5,
      nombre: "Noruego",
      foto: fernando,
    },
    {
      id: 6,
      nombre: "Kratos",
      foto: lucho,
    },
    {
      id: 7,
      nombre: "DaddyLuigi",
      foto: luigi,
    },
    {
      id: 8,
      nombre: "Misho",
      foto: misho,
    },
    {
      id: 9,
      nombre: "Owen",
      foto: owen,
    },
    {
      id: 10,
      nombre: "Skins",
      foto: skins,
    },
    {
      id: 11,
      nombre: "Waida",
      foto: waida,
    },
    {
      id: 12,
      nombre: "Yoshi",
      foto: yoshi,
    },
    {
      id: 13,
      nombre: "OrigamiSoul",
      foto: mayi,
    },
  ],
  titulares: [],
  suplentes: [],
};

//state, lo que se quiere
const reducerEntrenador = (state = initialState, action) => {
  if (action.type === "AGREGAR_TITULAR") {
    return {
      ...state,
      titulares: state.titulares.concat(action.jugador),
      jugadores: state.jugadores.filter(
        (jugador) => jugador.id !== action.jugador.id
      ),
    };
  }

  if (action.type === "AGREGAR_SUPLENTE") {
    return {
      ...state,
      suplentes: state.suplentes.concat(action.jugador),
      jugadores: state.jugadores.filter(
        (jugador) => jugador.id !== action.jugador.id
      ),
    };
  }

  if (action.type === "QUITAR_TITULAR") {
    return {
      ...state,
      titulares: state.titulares.filter(
        (jugador) => jugador.id !== action.jugador.id
      ),
      jugadores: state.jugadores.concat(action.jugador),
    };
  }
  if (action.type === "QUITAR_SUPLENTE") {
    return {
      ...state,
      suplentes: state.suplentes.filter(
        (jugador) => jugador.id !== action.jugador.id
      ),
      jugadores: state.jugadores.concat(action.jugador),
    };
  }
  return state;
};

export default createStore(reducerEntrenador);
