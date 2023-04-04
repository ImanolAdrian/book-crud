import { useState } from 'react';

const Galeria = () => {
  const arr = [
    { id: 1, img: 'https://picsum.photos/500/300' },
    { id: 2, img: 'https://picsum.photos/500/400' },
    { id: 3, img: 'https://picsum.photos/500/600' },
    { id: 4, img: 'https://picsum.photos/500/500' },
  ];

  const [show, setShow] = useState('');

  const click = element => {
    setShow(element.img);
  };

  const close = () => setShow('');
  return (
    <>
      {show != '' && (
        <div className="modal">
          <img src={show} alt="image" />
          <div onClick={close}>
            <img src="https://cdn-icons-png.flaticon.com/512/25/25298.png" alt="close" width="50px" />
          </div>
        </div>
      )}
      <div className="images">
        {arr.map(element => {
          return (
            <div key={element.id} onClick={() => click(element)}>
              <div>
                <img src={element.img} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Galeria;
