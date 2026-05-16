import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useResume } from '../context/ResumeContext.jsx'
import toast from 'react-hot-toast'
import axios from 'axios'
import StepIndicator from '../components/builder/StepIndicator.jsx'
import PersonalInfoForm from '../components/builder/PersonalInfoForm.jsx'
import ExperienceForm from '../components/builder/ExperienceForm.jsx'
import EducationForm from '../components/builder/EducationForm.jsx'
import SkillsForm from '../components/builder/SkillsForm.jsx'
import ProjectsForm from '../components/builder/ProjectsForm.jsx'
import ReviewStep from '../components/builder/ReviewStep.jsx'
import './ResumeBuilder.css'

const steps = ['Personal Info', 'Experience', 'Education', 'Skills', 'Projects', 'Review']

function ResumeBuilder() {
  const [currentStep, setCurrentStep] = useState(0)
  const [loading, setLoading] = useState(false)
  const { resumeData, setGeneratedResume } = useResume()
  const navigate = useNavigate()

  const goNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1)
  }

  const goPrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1)
  }

  const goToStep = (step) => {
    if (step <= currentStep) setCurrentStep(step)
  }

  const handleGenerate = async () => {
    setLoading(true)
    try {
      const apiUrl = import.meta.env.VITE_API_URL || '/api'
      const response = await axios.post(`${apiUrl}/resume/generate`, {
        fullName: resumeData.personalInfo.fullName,
        email: resumeData.personalInfo.email,
        phone: resumeData.personalInfo.phone,
        location: resumeData.personalInfo.location,
        linkedin: resumeData.personalInfo.linkedin,
        website: resumeData.personalInfo.website,
        summary: resumeData.summary,
        skills: resumeData.skills,
        experience: resumeData.experience,
        education: resumeData.education,
        projects: resumeData.projects,
        certifications: resumeData.certifications,
      })
      setGeneratedResume(response.data)
      toast.success('Resume generated successfully!')
      navigate('/preview')
    } catch (error) {
      console.error('Generation error:', error)
      toast.error('Failed to generate resume. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0: return <PersonalInfoForm />
      case 1: return <ExperienceForm />
      case 2: return <EducationForm />
      case 3: return <SkillsForm />
      case 4: return <ProjectsForm />
      case 5: return <ReviewStep onGenerate={handleGenerate} loading={loading} />
      default: return null
    }
  }

  return (
    <main className="builder">
      <div className="container">
        <div className="builder__header">
          <h1 className="builder__title">Build Your <span className="gradient-text">Resume</span></h1>
          <p className="builder__subtitle">Fill in your details step by step — our AI will polish the content for you.</p>
        </div>

        <StepIndicator steps={steps} currentStep={currentStep} onStepClick={goToStep} />

        <div className="builder__form animate-fadeIn" key={currentStep}>
          {renderStep()}
        </div>

        {currentStep < 5 && (
          <div className="builder__nav">
            <button className="btn btn-secondary" onClick={goPrev} disabled={currentStep === 0}>
              Previous
            </button>
            <button className="btn btn-primary" onClick={goNext}>
              Next Step
            </button>
          </div>
        )}
      </div>
    </main>
  )
}

export default ResumeBuilder
