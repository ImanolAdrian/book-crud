import { useState } from 'react';

const Buscador = () => {
  const arr = [
    {
      id: 1,
      title: 'manzana',
    },
    {
      id: 2,
      title: 'pera',
    },
    {
      id: 3,
      title: 'naranja',
    },
    {
      id: 4,
      title: 'piña',
    },
  ];
  const [navigation, setNavigation] = useState('');

  const filtered = arr.filter(fruit => fruit.title.toLowerCase().includes(navigation.toLowerCase()));
  return (
    <>
      <label for="buscador">BUSCAR:</label>
      <input type="text" name="buscador" value={navigation} onChange={e => setNavigation(e.target.value)} />
      {filtered.map(word => {
        return (
          <ul>
            <li>{word.title}</li>
          </ul>
        );
      })}
    </>
  );
};
export default Buscador;
