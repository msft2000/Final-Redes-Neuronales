import React from "react";
import "../scss/SinglePage.scss";
import axios from 'axios';
import { Toaster,toast } from "react-hot-toast";

function getSentimiento(texto,setSentimientos,setClaseActual){
  const toastID=toast.loading("Procesando")
  let data = JSON.stringify({
    "texto": `${texto}`
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://127.0.0.1:8000/sentiment/get-sentiment/',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  axios.request(config)
  .then((response) => {
    toast.dismiss(toastID)
    toast.success('Se ha calculado los sentimientos correctamente.')
    let data=JSON.stringify(response.data)
    data=data.replace('"','')
    const sentimientos=data.split("%").map((n)=>{return parseFloat(n).toFixed(2)})
    setSentimientos(sentimientos)  
    setClaseActual("appear")  
    return
  })
  .catch((error) => {
    toast.dismiss(toastID)
    toast.error('Se han generado errores en la petición. Intentelo nuevamente.')
    console.log(error);
    return
  });

}

function SinglePage() {
  const [claseActual, setClaseActual] = React.useState("none");
  const [sentimientos, setSentimientos]=React.useState([0.0,0.0,0.0]);
  const [texto,setTexto]=React.useState("");
  const [link,setLink]=React.useState("");
  const handleUseTexto=async ()=>{
    await getSentimiento(texto,setSentimientos,setClaseActual)
  }
  return (
    <React.Fragment>
      <Toaster/>
      <div id="single-page--container">
        <h1>Sistema de Análisis de Sentimientos</h1>
        <div className="single-page-content">
          <div className="info--container" style={{display:"none"}}>
            <h3>Usar Twitter</h3>
            <input type="url" placeholder="Ingrese el link del tweet a analizar" onChange={((e)=>{setLink(e.target.value)})}/>
            <button onClick={handleUseTexto}>Analizar</button>
          </div>
          <hr />
          <div className="info--container">
            <h3>Usar Texto</h3>
            <textarea
              placeholder="Ingrese el texto a analizar"
              rows="10"
              cols="50"
              onChange={((e)=>{setTexto(e.target.value)})}
            ></textarea>
            <button onClick={handleUseTexto}>Analizar</button>
          </div>
        </div>
      </div>
      <div id="results--container" className={claseActual}>
        <div className="result-content--container">
          <h3>Resultados</h3>
          <div className="result--container">
            <div className="result--item">
              <h4>Positivo</h4>
              <p>{sentimientos[2]}</p>
            </div>
            <div className="result--item">
              <h4>Negativo</h4>
              <p>{sentimientos[0]}</p>
            </div>
            <div className="result--item">
              <h4>Neutro</h4>
              <p>{sentimientos[1]}</p>
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
