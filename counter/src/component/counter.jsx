import React, { useState } from "react";

const Counter = (props) => {
  console.log(props);
  const [value, setValue] = useState(props.value);

  const [imageUrl, setImageUrl] = useState("https://picsum.photos/200");

  const formValue = () => {
    return value === 0 ? "Ноль" : value;
  };

  const getBageClasses = () => {
    let classes = "badge m-2 bg-";
    classes += value === 0 ? "danger" : "primary";
    return classes;
  };

  const handleIncrement = (productId) => {
    setValue(value + 1);
  };

  const handleDecrement = (productId) => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <div>
      <h4>{props.name}</h4>
      <span className={getBageClasses()}>{formValue()}</span>
      <button
        onClick={() => handleIncrement({ id: 1 })}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => handleDecrement()}
        className="btn btn-secondary btn-sm"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
