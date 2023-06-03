import React, {useState} from "react"
export const App = () => {
  return (
    <div className="App">
      teste
      <br />
      <input type="text" id="num1" placeholder="Digite o primeiro número"/>
      <input type="text" id="num2" placeholder="Digite o segundo número"/>
      <button>Enviar</button>
    </div>
  );
}
function somar(valor1: number, valor2: number) {
  let resultado: number = valor1 + valor2
  return (
    <div>
      {resultado}
    </div>
  )
}
