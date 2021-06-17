import React, {useState, useRef} from 'react';

function App() { 
  const textInputRef = useRef<HTMLInputElement>(null)
  const[list, setList] = useState<string[]>([]);

  const addTask = () => { 
    if (!textInputRef.current) return;
    if (textInputRef.current.value === "") return;

    let valorTexto = textInputRef.current.value;
    textInputRef.current.value = "";
    setList([...list, valorTexto]);
  };
function apagarItem(position: number) {
  let listaFiltrada = list.filter((_, index) => index !== position)
  setList(listaFiltrada)
}

  return (
    <div> 
      <input type="text" ref={textInputRef} />
      <button onClick={addTask}> Add Task</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button onClick={() => apagarItem(index)}>Apagar</button>
          </li>

        ))}
      </ul>
    </div>

  );
}

export default App;
