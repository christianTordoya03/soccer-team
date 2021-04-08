import React from "react";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({});

const mapStateToProps = (state) => ({
  suplentes: state.suplentes,
});

const Suplentes = ({ suplentes }) => {
  return (
    <section>
      <h2>Suplentes</h2>
      <div className="Suplentes">
        {suplentes.map((jugador) => (
          <article className="suplente">
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

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);
