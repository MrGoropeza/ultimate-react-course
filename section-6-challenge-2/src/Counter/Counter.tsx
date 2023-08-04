import "./Counter.scss";

export type ChangeEvent =
  | { type: "add" | "sub" }
  | { type: "set"; value: number };

type Props = {
  value: number;
  onChange: (event: ChangeEvent) => void;
};

const Counter = ({ value, onChange }: Props) => {
  return (
    <div className="counter-container">
      <button
        type="button"
        className="button sub"
        onClick={() => onChange({ type: "sub" })}
      >
        -
      </button>

      <input
        type="number"
        value={value}
        onChange={(e) => onChange({ type: "set", value: +e.target.value })}
      />

      <button
        type="button"
        className="button add"
        onClick={() => onChange({ type: "add" })}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
