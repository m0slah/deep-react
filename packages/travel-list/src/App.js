import "./index.css";

function App() {
  return (
    <>
      <Logo />
      <Form />
      <PackingList />
    </>
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
    <>
      <div className="list">List</div>
    </>
  );
}

export default App;
