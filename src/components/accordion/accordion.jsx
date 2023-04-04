import { useState } from 'react';

const Accordion = () => {
  const arr = [
    {
      id: 1,
      title: 'titulosssss',
      body: 'luego sale su valoranto?',
    },
    {
      id: 2,
      title: 'juguemosss',
      body: 'luego sale dotaaaaaaa?',
    },
  ];

  const [efecto, setEfecto] = useState(-1);

  const clicka = element => {
    if (efecto == element.id) {
      setEfecto(-1);
    } else setEfecto(element.id);
  };
  return (
    <>
      {arr.map(element => (
        <div
          onClick={() => {
            clicka(element);
          }}
          key={element.id}
        >
          <div>{element.title}</div>
          {efecto == element.id && <div>{element.body}</div>}
        </div>
      ))}
    </>
  );
};
export default Accordion;
