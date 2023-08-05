import "./Form.scss";

import { FormEvent, useState } from "react";
import { Item } from "../../lib/models";

type FormValues = {
  quantity: number;
  description: string;
};

const initialState: FormValues = { quantity: 1, description: "" };

type Props = { onAddItem: (item: Item) => void };

const Form = ({ onAddItem }: Props) => {
  const [formState, setFormState] = useState<FormValues>(initialState);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newItem: Item = { id: Date.now(), packed: false, ...formState };

    onAddItem(newItem);
    setFormState(initialState);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>

      <select
        value={formState.quantity}
        onChange={(e) => {
          const quantity = Number(e.target.value);
          setFormState((prev) => ({ ...prev, quantity }));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        required
        value={formState.description}
        onChange={(e) =>
          setFormState((prev) => ({ ...prev, description: e.target.value }))
        }
      />

      <button>Add</button>
    </form>
  );
};

export default Form;
