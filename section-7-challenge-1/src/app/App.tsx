import "./App.scss";

import { FormEventHandler, useState } from "react";
import { Button, Field, Input, Label, Select } from "./components";
import { SelectOption } from "./components/Select/Select";

const SERVICE_OPTIONS: SelectOption[] = [
  { label: "Dissatisfied (0%)", value: 0 },
  { label: "It was okay (5%)", value: 0.05 },
  { label: "It was good (10%)", value: 0.1 },
  { label: "Absolutely amazing! (20%)", value: 0.2 },
];

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  const tipPercentage = (tip + friendTip) / 2;
  const total = Math.round(bill * (1 + tipPercentage));
  const totalTip = Math.round(bill * tipPercentage);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    setBill(0);
    setTip(0);
    setFriendTip(0);
  };

  return (
    <main className="container">
      <form className="bill-form" onSubmit={handleSubmit}>
        <Field>
          <Label>How much was the bill?</Label>
          <Input
            type="number"
            value={bill}
            onChange={(e) => setBill(+e.target.value)}
          />
        </Field>

        <Field>
          <Label>How did you like your service?</Label>
          <Select
            options={SERVICE_OPTIONS}
            value={tip}
            onChange={(e) => setTip(+e.target.value)}
          />
        </Field>

        <Field>
          <Label>How did your friend like the service?</Label>
          <Select
            options={SERVICE_OPTIONS}
            value={friendTip}
            onChange={(e) => setFriendTip(+e.target.value)}
          />
        </Field>

        <p className="bill-total">
          You pay ${total} (${bill ?? 0} + ${totalTip} tip)
        </p>

        <Button className="bill-reset">Reset</Button>
      </form>
    </main>
  );
}

export default App;
