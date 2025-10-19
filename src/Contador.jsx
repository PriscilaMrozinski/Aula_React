import { useState } from "react"; // só importa o que você realmente usa

function Contador() {
  const [contador, setContador] = useState(0);
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
    </div>
  );
}

export default Contador;
