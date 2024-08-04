import React, { useState } from "react";
import "./app.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setSteps] = useState(1);
  const [user, setUser] = useState({ name: "john" });

  function handlePervious() {
    step > 1 && setSteps(step - 1);
  }
  function handleNext() {
    step <= 2 && setSteps(step + 1);

    //BAD PRACTICE
    // user.name = "test1";

    setUser({ name: "terry" });
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      <p className="message">
        step:{step} {messages[step - 1]}
        <div>{user.name}</div>
      </p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePervious}
        >
          Prevoius
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
