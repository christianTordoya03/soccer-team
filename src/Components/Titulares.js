import React from "react";
import { connect } from "react-redux";
import cancha from "../Assets/cancha.svg";

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
      <div className="cancha">
        {titulares.map((jugador) => (
          <article className="titular" key={jugador.id}>
            <div>
              <img src={jugador.foto} alt={jugador.nombre} />
              <button onClick={() => quitarTitular(jugador)}>X</button>
            </div>
            <p>{jugador.nombre}</p>
          </article>
        ))}
        <img src={cancha} alt="cancha de futbol" />
      </div>
    </section>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);
