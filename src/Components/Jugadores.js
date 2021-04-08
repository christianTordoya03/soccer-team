import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  jugadores: state.jugadores,
});
// las funciones se convierten en propiedades
const mapDispatchToProps = (dispatch) => ({
  agregarTitular(jugador) {
    dispatch({
      type: "AGREGAR_TITULAR",
      jugador,
    });
  },
  agregarSuplente(jugador) {
    dispatch({
      type: "AGREGAR_SUPLENTE",
      jugador,
    });
  },
});

const Jugadores = ({ jugadores, agregarTitular, agregarSuplente }) => {
  return (
    <section>
      <h2>Jugadores</h2>
      <div className="contenedor-jugadores">
        {jugadores.map((jugador) => (
          <article className="jugador" key={jugador.id}>
            <img src={jugador.foto} alt={jugador.nombre} />
            <h3>{jugador.nombre}</h3>
            <div>
              <button onClick={() => agregarTitular(jugador)}>Titular</button>
              <button onClick={() => agregarSuplente(jugador)}>Suplente</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores);
