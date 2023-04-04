import { useEffect, useState } from 'react';
const BACK = 'https://comicstores.es/imagenes_grandes/4012927/401292774145.JPG';

const card = [
  { id: 1, img: 'https://cdn.statsroyale.com/images/cards/full/hog_rider.png', flipped: false },
  { id: 2, img: 'https://i.blogs.es/81d29a/debad5e9-9761-4aa3-a487-b1cac8c604a5/450_1000.webp', flipped: false },
  { id: 3, img: 'https://i.pinimg.com/170x/33/7f/d4/337fd4466532208479748f347f42db8a.jpg', flipped: false },
  { id: 4, img: 'https://cdn.statsroyale.com/images/cards/full/hog_rider.png', flipped: false },
  { id: 5, img: 'https://cdn.statsroyale.com/images/cards/full/wizard.png', flipped: false },
  { id: 6, img: 'https://i.blogs.es/81d29a/debad5e9-9761-4aa3-a487-b1cac8c604a5/450_1000.webp', flipped: false },
  { id: 7, img: 'https://i.pinimg.com/170x/33/7f/d4/337fd4466532208479748f347f42db8a.jpg', flipped: false },
  { id: 8, img: 'https://cdn.statsroyale.com/images/cards/full/wizard.png', flipped: false },
];

const Cards = () => {
  const [cont, setCont] = useState({ primer: '', segundo: '' });
  const [board, setBoard] = useState(card);

  useEffect(() => {
    if (cont.primer == cont.segundo && cont.primer != '') {
      setCont({ primer: '', segundo: '', primerPos: '', segundoPos: '' });
    }
    if (cont.primer != cont.segundo && cont.segundo != '') {
      setTimeout(() => {
        const newBoard = JSON.parse(JSON.stringify(board));
        newBoard[cont.primerPos].flipped = false;
        newBoard[cont.segundoPos].flipped = false;
        setBoard(newBoard);
        setCont({ primer: '', segundo: '', primerPos: '', segundoPos: '' });
      }, 1000);
    }
  }, [cont]);

  const clicka = (carta, i) => {
    if (cont.primerPos != i) {
      const newBoard = JSON.parse(JSON.stringify(board));
      newBoard[i].flipped = true;
      setBoard(newBoard);
      if (cont.primer == '') {
        setCont({ primer: carta.img, segundo: '', primerPos: i });
      } else setCont({ ...cont, segundo: carta.img, segundoPos: i });
    } else alert('elige otra carta');
  };

  return (
    <>
      <div className="contCards">
        {board.map((carta, i) => {
          return (
            <div className="card" key={carta.id} onClick={() => clicka(carta, i)}>
              <img src={carta.flipped == true ? carta.img : BACK} alt="car" />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Cards;
