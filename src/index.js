import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";



//Componente functional component
function App() {  
  //estados: ENTRADA, RODANDO E FIM.
  const [estado, setEstado] = useState('ENTRADA')
  //Palpites
  const [palpite, setPalpite] = useState('150')
  const [numPalpites,setNumPalpites] = useState('1')

  const [min, setMin] = useState(0)
  const [max, setMax] = useState(300)

  const iniciarJogo = () => {
    setEstado('RODANDO')
    setMin(0)
    setMax(300)
    setPalpite(150)
    setNumPalpites(1)
  }
  if(estado === 'ENTRADA'){
    return <button onClick={iniciarJogo}>Começar a Jogar!</button>
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1)
    setMax(palpite)
    const proxPalpite = parseInt((palpite - min) / 2) + min
    setPalpite(proxPalpite)
  }
  const maior = () => {
    setNumPalpites(numPalpites + 1)
    setMin(palpite)
    const proxPalpite = parseInt((max - palpite)/2) + palpite
    setPalpite(proxPalpite)
  }
  const acertou = () => {
    setEstado('FIM')
  }
  if(estado === 'FIM'){s
    return (
      <div>
        <p>Acertei o número {palpite} com {numPalpites} chutes!</p>
        <button onClick={iniciarJogo}>Iniciar novamente!</button>
      </div>
    )
  }

  return (
    <div className="App">
      <p>O seu número é {palpite}?</p>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou</button>
      <button onClick= {maior}>Maior</button>
    </div>
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
