import { useState } from "react";
import Contador from "./Contador.jsx"; // importando o componente Contador

function App() {
  const [message, setMessage] = useState("Olá, mundo!");

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage("olá, fui clicado!")}>
        Mudar Mensagem
      </button>
      <hr /> {/* separador visual */}
      <Contador /> {/* renderiza o componente Contador */}
    </div>
  );
}

export default App;

// export default : só pode ter um por aqrquivo
// export default: é uma forma de exportar um módulo, função ou componente em JavaScript
