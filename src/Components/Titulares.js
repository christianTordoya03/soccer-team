import React from "react";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  quitarTitular(jugador) {
    dispatch({
      type: "QUITAR_TITULAR",
      jugador,
    });
  },
});

const mapStateToProps = (state) => ({
  titulares: state.titulares,
});

const Titulares = ({ titulares, quitarTitular }) => {
  return (
    <section>
      <h2>Titulares</h2>
      <div className="campo">
        {titulares.map((jugador) => (
          <article className="titular" key={jugador.id}>
            <div>
              <img src={jugador.foto} alt={jugador.nombre} />
              <button onClick={() => quitarTitular(jugador)}>X</button>
            </div>
            <p>{jugador.nombre}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);
