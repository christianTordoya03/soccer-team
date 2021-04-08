import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  jugadores: state.jugadores,
});

const mapDispatchToProps = (dispatch) => ({});

const Jugadores = ({ jugadores }) => {
  return (
    <section>
      <h2>Jugadores</h2>
      <div className="contenedor-jugadores">
        {jugadores.map((jugador) => (
          <article className="jugador">
            <img src={jugador.foto} alt={jugador.nombre} />
            <h3>{jugador.nombre}</h3>
            <div>
              <button>Titular</button>
              <button>Suplente</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores);
