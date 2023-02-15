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
    if (value === "") return;

    const newItem = { id: v4(), value: value };
    setItems([...items, newItem]);
    setValue("");
  };

  const onInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      addItem();
    }
  };

  const handleDelete = (id) => {
    const newArr = items.filter((item) => item.id !== id);
    setItems(newArr);
  };

  const handleImportant = (id) => {
    const newArr = items.map((item) => {
      if (item.id === id) {
        return { ...item, isImportant: !item.isImportant };
      } else return item;
    });
    setItems(newArr);
  };

  console.log(items);
  return (
    <div className="App">
      <h1>To-do List</h1>
      <div className="filters">
        <button>all</button>
        <button>done</button>
        <button>not done</button>
      </div>

      <input
        value={value}
        onKeyDown={handleKeyDown}
        onChange={(event) => onInputChange(event)}
        type="text"
        placeholder="write somths..."
      />

      {items.map((item, index) => (
        <div className="task" key={index}>
          <p style={{ fontWeight: item.isImportant ? "bold" : "" }}>
            - {item.value}
          </p>
          <div className="actions">
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            <input type="checkbox" onChange={() => handleImportant(item.id)} />
          </div>
        </div>
      ))}

      {/* <div className="task">- </div> */}

      <button onClick={addItem}>Add new Item</button>
    </div>
  );
}

export default App;
