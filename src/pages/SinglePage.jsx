import React from "react";
import "../scss/SinglePage.scss";

function SinglePage() {
  const [claseActual, setClaseActual] = React.useState("none");
  return (
    <React.Fragment>
      <div id="single-page--container">
        <h1>Sistema de Analizis de Sentimientos</h1>
        <div className="single-page-content">
          <div className="info--container">
            <h3>Usar Twitter</h3>
            <input type="url" placeholder="Ingrese el link del twit a analizar" />
            <button onClick={()=>setClaseActual("appear")}>Analizar</button>
          </div>
          <hr />
          <div className="info--container">
            <h3>Usar Texto</h3>
            <textarea
              placeholder="Ingrese el texto a analizar"
              rows="10"
              cols="50"
            ></textarea>
            <button onClick={()=>setClaseActual("appear")}>Analizar</button>
          </div>
        </div>
      </div>
      <div id="results--container" className={claseActual}>
        <div className="result-content--container">
          <h3>Resultados</h3>
          <div className="result--container">
            <div className="result--item">
              <h4>Positivo</h4>
              <p>0.5</p>
            </div>
            <div className="result--item">
              <h4>Negativo</h4>
              <p>0.5</p>
            </div>
            <div className="result--item">
              <h4>Neutro</h4>
              <p>0.5</p>
            </div>
          </div>
          <button onClick={() => {
            setClaseActual("hidden");
            setTimeout(() => {
              setClaseActual("none");
            },1000);
          }}>Cerrar</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export { SinglePage };
