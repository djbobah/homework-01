import React, { useState } from "react";
import Counter from "./counter";

const Counters = ({ onReset, counters, ...rest }) => {
  return (
    <div>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        Сброс
      </button>
      {counters.map((counter) => (
        <Counter key={Counter.id} {...counter} {...rest} />
      ))}
    </div>
  );
};

export default Counters;
