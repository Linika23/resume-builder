import { HiCheck } from 'react-icons/hi'
import './StepIndicator.css'

function StepIndicator({ steps, currentStep, onStepClick }) {
  return (
    <div className="step-indicator">
      {steps.map((step, index) => (
        <div key={index} className="step-indicator__item" onClick={() => onStepClick(index)}>
          <div
            className={`step-indicator__circle ${
              index < currentStep ? 'step-indicator__circle--done' :
              index === currentStep ? 'step-indicator__circle--active' : ''
            }`}
          >
            {index < currentStep ? <HiCheck /> : index + 1}
          </div>
          <span className={`step-indicator__label ${index === currentStep ? 'step-indicator__label--active' : ''}`}>
            {step}
          </span>
          {index < steps.length - 1 && (
            <div className={`step-indicator__line ${index < currentStep ? 'step-indicator__line--done' : ''}`}></div>
          )}
        </div>
      ))}
    </div>
  )
}

export default StepIndicator
