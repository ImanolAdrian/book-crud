import { useEffect, useState } from 'react';

const INITIAL = 'https://www.pngall.com/wp-content/uploads/4/Hole.png';
const PITO = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSv0GqV1I6Wju8XOCmRCpf7gOWFXs0bo6Q_w&usqp=CAU';

const Topos = () => {
  const board = [false, false, false, false, false, false, false, false, false];

  const [tabla, setTabla] = useState(board);

  useEffect(() => {
    setInterval(() => {
      // const number = Math.floor(Math.random() * 9);
      // const newTabla = [...tabla];
      // newTabla[number] = true;
      // setTabla(newTabla);
      setTabla(prevTabla => {
        const number = Math.floor(Math.random() * 9);
        const newTabla = [...prevTabla];
        newTabla[number] = true;
        setTimeout(() => {
          setTabla(lastTabla => {
            const newT = [...lastTabla];
            newT[number] = false;
            return newT;
          });
        }, 1000);
        return newTabla;
      });
    }, 1000);
  }, []);

  const [contador, setContador] = useState(0);

  const clicka = p => {
    setContador(contador + 1);
    const newP = [...tabla];
    newP[p] = false;
    setTabla(newP);
  };

  return (
    <>
      <div className="madriguera">
        {tabla.map((show, p) => (
          <div className="hueco">{show && <img src={PITO} onClick={() => clicka(p)} />}</div>
        ))}
      </div>
      <div>Golpeaste {contador} topos</div>
    </>
  );
};
export default Topos;
