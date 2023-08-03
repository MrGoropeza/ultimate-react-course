import "./Counter.css";

type Props = {
  label: string;
  value: number;
  onChange: (type: "add" | "sub") => void;
};

const Counter = ({ label, value, onChange }: Props) => {
  return (
    <div className="counter-container">
      <button
        type="button"
        className="button sub"
        onClick={() => onChange("sub")}
      >
        -
      </button>

      <p className="text">
        <span className="label">{label}</span>: {value}
      </p>

      <button
        type="button"
        className="button add"
        onClick={() => onChange("add")}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
