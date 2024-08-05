import React, { useState } from "react";
import "./app.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setSteps] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  console.log("component was rendered");
  console.log(step);

  // const [user, setUser] = useState({ name: "john" });

  function handlePervious() {
    step > 1 && setSteps((prevStep) => prevStep - 1);

    console.log("prev fn rendered");
  }

  function handleNext() {
    step <= 2 && setSteps((prevStep) => prevStep + 1);

    //BAD PRACTICE
    // user.name = "test1";

    // setUser({ name: "terry" });
    console.log("next fn rendered");
  }

  function handleIsOpen() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <>
      <button className="close" onClick={handleIsOpen}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            step:{step} {messages[step - 1]}
            {/* <div>{user.name}</div> */}
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
      )}
    </>
  );
}

export default App;
