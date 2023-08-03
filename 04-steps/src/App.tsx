import "./App.scss";
import { Steps } from "./components";
import { StepDefinition } from "./components/Steps/Steps";

const steps: StepDefinition[] = [
  { title: "Step 1" },
  { title: "Step 2" },
  { title: "Step 3" },
];

function App() {
  return (
    <>
      <Steps steps={steps}>
        <div className="content">
          <label htmlFor="date-input">Date</label>
          <input type="date" name="date" id="date-input" />

          {/* <div className="furioso">Furioso div</div>

          <Ruler axis="x" /> */}
        </div>
      </Steps>
    </>
  );
}

export default App;

const Ruler = ({ axis }: { axis: "x" | "y" }) => {
  return (
    <div className={`ruler-container ruler-${axis}`}>
      <div className="ruler-bar"></div>
      <div className="ruler-marker ruler-marker-start"></div>
      <div className="ruler-marker ruler-marker-middle"></div>
      <div className="ruler-marker ruler-marker-end"></div>
    </div>
  );
};
