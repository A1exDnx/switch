import React from "react";

const Switch = (props) => {
  return (
    <>
      <div className="group-switch">
        <button
          onClick={() => {
            props.onSwitch(true);
          }}
          className={props.value === true ? "btn-purple" : "btn"}
        >
          ON
        </button>
        <button
          onClick={() => {
            props.onSwitch(false);
          }}
          className={props.value === false ? "btn-purple" : "btn"}
        >
          OFF
        </button>
      </div>
    </>
  );
};

export default Switch;
