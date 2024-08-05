import { Fragment } from "react";
import "./index.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <>
      <h1>🌴 Far Away 💼</h1>
    </>
  );
}

function Form() {
  return (
    <>
      <div className="add-form">
        <h3>what do you need for your 😍 trip?</h3>
      </div>
    </>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return <li>{item.description}</li>;
}

function Stats() {
  return (
    <div className="stats">
      <footer>
        <em>
          💼 you have X items in your list, and you already packed X ( X%)
        </em>
      </footer>
    </div>
  );
}

export default App;
