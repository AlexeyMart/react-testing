import { useState, ChangeEvent } from "react";
import { content } from "../../content";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);

  const {
    Counter: { setButtonText, incrementButtonText },
  } = content;

  const incrementCount = () => setCount((count) => count + 1);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setAmount(parseInt(event.target.value));

  const handleClick = () => setCount(amount);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={incrementCount}>{incrementButtonText}</button>

      <input
        type="number"
        name="amount"
        value={amount || 0}
        onChange={handleChange}
      />

      <button onClick={handleClick}>{setButtonText}</button>
    </div>
  );
};
