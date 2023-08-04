import { useState } from "react";
import "./App.css";
import Counter, { ChangeEvent } from "./Counter/Counter";
import Slider from "./Slider/Slider";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const handleCountChange = (event: ChangeEvent) =>
    setCount((prev) => {
      if (event.type === "set") return event.value;
      if (event.type === "add") return prev + step;
      if (event.type === "sub") return prev - step;
      return prev;
    });

  const today = new Date();
  today.setDate(today.getDate() + count);

  return (
    <section className="wrapper">
      <Slider label="Step" value={step} onChange={setStep} />
      <Counter value={count} onChange={handleCountChange} />

      <p className="date-result">
        {count === 0 && "Today is "}
        {count > 0 && `${count} days from today is `}
        {count < 0 && `${count * -1} days ago was `}
        {today.toLocaleDateString()}
      </p>

      {(count !== 0 || step !== 1) && (
        <button
          type="button"
          className="button"
          onClick={() => {
            setCount(0);
            setStep(1);
          }}
        >
          Reset
        </button>
      )}
    </section>
  );
}

export default App;
