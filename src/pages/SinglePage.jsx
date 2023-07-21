import React from "react";
import "../scss/SinglePage.scss";

function SinglePage() {
  return (
    <React.Fragment>
      <div id="single-page--container">
        <h1>Sistema de Analizis de Sentimientos</h1>
        <div className="single-page-content">
          <div className="twitter--container">
            <h3>Usar Twitter</h3>
            <input type="url" placeholder="Ingrese el link del twit a analizar" />
            <button>Analizar</button>
          </div>
          <hr />
          <div className="text--container">
            <h3>Usar Texto</h3>
            <textarea
              placeholder="Ingrese el texto a analizar"
              rows="10"
              cols="50"
            ></textarea>
            <button>Analizar</button>
          </div>
        </div>
      </div>
      <div id="results--container">

      </div>
    </React.Fragment>
  );
}

export { SinglePage };
