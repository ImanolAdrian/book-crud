import { useEffect, useState } from 'react';

const michiDefault = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];
const Box = ({ item, check }) => {
  return (
    <div className="boxes" onClick={check}>
      {item == 'x' ? (
        <img src="https://pbs.twimg.com/profile_images/1231631151149785089/ZVT_CyLO_400x400.jpg" alt="equis" width="100%" />
      ) : item == 'o' ? (
        <img src="https://pbs.twimg.com/media/E_SDtHWXEAUxtbW.jpg:large" alt="cero" width="100%" />
      ) : null}
    </div>
  );
};

const Tiktaktoe = () => {
  const [matriz, setMatriz] = useState(michiDefault);

  const [turn, setTurn] = useState('o');

  const [ganador, setGanador] = useState('');

  useEffect(() => {
    if (ganador) alert('El ganador es ' + ganador);
  }, [ganador]);

  useEffect(() => {
    if (
      (matriz[0][0] == matriz[0][1] && matriz[0][1] == matriz[0][2] && matriz[0][0] != '') ||
      (matriz[1][0] == matriz[1][1] && matriz[1][1] == matriz[1][2] && matriz[1][0] != '') ||
      (matriz[2][0] == matriz[2][1] && matriz[2][1] == matriz[2][2] && matriz[2][0] != '') ||
      (matriz[0][0] == matriz[1][0] && matriz[1][0] == matriz[2][0] && matriz[0][0] != '') ||
      (matriz[0][1] == matriz[1][1] && matriz[1][1] == matriz[2][1] && matriz[0][1] != '') ||
      (matriz[0][2] == matriz[1][2] && matriz[1][2] == matriz[2][2] && matriz[0][2] != '')
    ) {
      console.log(turn == 'x');
      setGanador(turn == 'x' ? 'o' : 'x');
    }
    if ((matriz[0][0] == matriz[1][1] && matriz[1][1] == matriz[2][2] && matriz[0][0] != '') || (matriz[0][2] == matriz[1][1] && matriz[1][1] == matriz[2][0] && matriz[0][2] != '')) {
      setGanador(turn == 'x' ? 'o' : 'x');
    }
  }, [matriz]);

  const checkBox = (x, y) => {
    console.log(x, y);
    if (matriz[x][y] == '') {
      const copia = JSON.parse(JSON.stringify(matriz));
      copia[x][y] = turn;
      setTurn(turn == 'o' ? 'x' : 'o');
      setMatriz(copia);
    }
  };

  return (
    <div className="container">
      {matriz.map((cajas, x) => {
        return cajas.map((elemento, y) => {
          return <Box item={elemento} check={() => checkBox(x, y)} />;
        });
      })}
      <h2>Es el turno de: {turn}</h2>
    </div>
  );
};
export default Tiktaktoe;
