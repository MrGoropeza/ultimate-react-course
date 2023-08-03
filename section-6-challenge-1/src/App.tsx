import { useState } from "react";
import "./App.css";
import Counter from "./Counter/Counter";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const handleStepChange = (type: "add" | "sub") =>
    setStep((prev) => (type === "add" ? prev + 1 : prev - 1));

  const handleCountChange = (type: "add" | "sub") =>
    setCount((prev) => (type === "add" ? prev + step : prev - step));

  const today = new Date();
  today.setDate(today.getDate() + count);

  return (
    <section className="wrapper">
      <Counter label="Step" value={step} onChange={handleStepChange} />
      <Counter label="Count" value={count} onChange={handleCountChange} />

      <p className="date-result">
        {count === 0 && "Today is "}
        {count > 0 && `${count} days from today is `}
        {count < 0 && `${count * -1} days ago was `}
        {today.toLocaleDateString()}
      </p>
    </section>
  );
}

export default App;
