import "./Slider.scss";

type Props = {
  label: string;
  value: number;
  onChange: (value: number) => void;
};

const Slider = ({ label, value, onChange }: Props) => {
  return (
    <div className="slider-container">
      <label htmlFor="slider">{label}:</label>
      <input
        id="slider"
        type="range"
        value={value}
        onChange={(e) => onChange(+e.target.value)}
      />
      <small className="slider-value">{value}</small>
    </div>
  );
};

export default Slider;
