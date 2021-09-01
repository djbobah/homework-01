import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
  const [counters, setCounters] = useState([
    { value: 0, id: 1, name: "Ложка" },
    { value: 4, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 3, name: "Стартовый набор минималиста" },
    { value: 0, id: 3, name: "Ненужные вещи" },
  ]);
  return (
    <div>
      {counters.map((counter) => (
        <Counter key={Counter.id} value={counter.value} name={counter.name} />
      ))}
    </div>
  );
};

export default Counters;
