import { useState } from 'react';

const Counter = () => {
  const [contador, setContador] = useState(0);
  const menos = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const mas = () => {
    setContador(contador + 1);
  };
  return (
    <div>
      <button onClick={menos}>{/* <button onClick={menos} disabled={contador === 0}> */}-</button>
      <div className="contador">{contador}</div>
      <button onClick={mas} disabled={contador > 9}>
        +
      </button>
    </div>
  );
};

export default Counter;
