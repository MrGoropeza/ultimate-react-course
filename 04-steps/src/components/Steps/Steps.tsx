import { ReactNode, useState } from "react";
import "./Steps.scss";

export type StepDefinition = {
  title?: string;
};

type Props = {
  children?: ReactNode;
  className?: string;
  steps: StepDefinition[];
};

const Steps = ({ className, children, steps }: Props) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handlePrevStep = () =>
    setCurrentStep((current) => (current === 0 ? 0 : current - 1));

  const handleNextStep = () =>
    setCurrentStep((current) =>
      current === steps.length - 1 ? steps.length - 1 : current + 1
    );

  return (
    <div className={`steps-container ${className ?? ""}`}>
      <ul className="steps-list">
        {steps.map((_, index) => (
          <li
            key={index}
            className="steps-item"
            data-state={index === currentStep ? "active" : undefined}
            onClick={() => setCurrentStep(index)}
          >
            {index + 1}
          </li>
        ))}
      </ul>

      <p className="steps-message">
        {steps.length > 0 ? steps[currentStep].title : "There are no steps."}
      </p>

      <div className="steps-content">{children}</div>

      <div className="steps-buttons">
        <button
          type="button"
          className="steps-button"
          disabled={currentStep === 0}
          onClick={handlePrevStep}
        >
          Previous
        </button>
        <button
          type="button"
          className="steps-button"
          disabled={currentStep === steps.length - 1}
          onClick={handleNextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Steps;
