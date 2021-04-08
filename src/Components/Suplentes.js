import React from "react";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  quitarSuplente(jugador) {
    dispatch({
      type: "QUITAR_SUPLENTE",
      jugador,
    });
  },
});

const mapStateToProps = (state) => ({
  suplentes: state.suplentes,
});

const Suplentes = ({ suplentes, quitarSuplente }) => {
  return (
    <section>
      <h2>Suplentes</h2>
      <div className="Suplentes">
        {suplentes.map((jugador) => (
          <article className="suplente" key={jugador.id}>
            <div>
              <img src={jugador.foto} alt={jugador.nombre} />
              <button onClick={() => quitarSuplente(jugador)}>X</button>
            </div>
            <p>{jugador.nombre}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);
