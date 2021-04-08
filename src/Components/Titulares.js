import React from "react";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({});

const mapStateToProps = (state) => ({
  titulares: state.titulares,
});

const Titulares = ({ titulares }) => {
  return (
    <section>
      <h2>Titulares</h2>
      <div className="campo">
        {titulares.map((jugador) => (
          <article className="titular">
            <div>
              <img src={jugador.foto} alt={jugador.nombre} />
              <button>X</button>
            </div>
            <p>{jugador.nombre}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);
