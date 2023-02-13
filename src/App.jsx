import { useState } from "react";
import { v4 } from "uuid";
import "./App.css";

const itemsStart = [
  {
    id: v4(),
    value: "wake up 8AM",
  },
  { id: v4(), value: "complete projects" },
];

function App() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState(itemsStart);

  const addItem = () => {
    const newItem = { id: v4(), value: value };
    setItems([...items, newItem]);
  };

  const onInputChange = (event) => {
    setValue(event.target.value);
  };

  console.log(items);

  return (
    <div className="App">
      <h1>To-do List</h1>
      <div>{value}</div>
      <div className="filters">
        <button>all</button>
        <button>done</button>
        <button>not done</button>
      </div>

      <input
        value={value}
        onChange={(event) => onInputChange(event)}
        type="text"
        placeholder="write somths..."
      />

      {items.map((item, index) => (
        <div className="task" key={index}>
          - {item.value}
        </div>
      ))}

      {/* <div className="task">- </div> */}

      <button onClick={addItem}>Add new Item</button>
    </div>
  );
}

export default App;
