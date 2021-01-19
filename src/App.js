import "./App.css";

// Import du hook useState
import React, { useState } from "react";
// Import des composants
import Switch from "./components/Switch";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  const [switch4, setSwitch4] = useState(false);

  return (
    <>
      <div className="container">
        <div class="switch-box">
          <Switch value={switch1} onSwitch={setSwitch1} />
          <Switch value={switch2} onSwitch={setSwitch2} />
          <Switch value={switch3} onSwitch={setSwitch3} />
          <Switch value={switch4} onSwitch={setSwitch4} />
        </div>
        <div class="rep-box">
          <div
            className={
              switch1 === true &&
              switch2 === true &&
              switch3 === true &&
              switch4 === true
                ? "green"
                : "red"
            }
          >
            {switch1 === true &&
            switch2 === true &&
            switch3 === true &&
            switch4 === true
              ? "Go !"
              : "No Way !"}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
