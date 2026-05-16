import { createContext, useContext, useState } from 'react'

const ResumeContext = createContext()

const initialState = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    website: '',
  },
  summary: '',
  experience: [
    { title: '', company: '', startDate: '', endDate: '', description: '' },
  ],
  education: [
    { degree: '', school: '', year: '', gpa: '' },
  ],
  skills: '',
  projects: [
    { name: '', description: '', tech: '', link: '' },
  ],
  certifications: '',
  /* AI-generated content stored here after generation */
  generatedResume: null,
}

export function ResumeProvider({ children }) {
  const [resumeData, setResumeData] = useState(initialState)

  const updatePersonalInfo = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value },
    }))
  }

  const updateField = (field, value) => {
    setResumeData(prev => ({ ...prev, [field]: value }))
  }

  const updateArrayEntry = (section, index, field, value) => {
    setResumeData(prev => {
      const updated = [...prev[section]]
      updated[index] = { ...updated[index], [field]: value }
      return { ...prev, [section]: updated }
    })
  }

  const addArrayEntry = (section, template) => {
    setResumeData(prev => ({
      ...prev,
      [section]: [...prev[section], { ...template }],
    }))
  }

  const removeArrayEntry = (section, index) => {
    setResumeData(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index),
    }))
  }

  const setGeneratedResume = (data) => {
    setResumeData(prev => ({ ...prev, generatedResume: data }))
  }

  const resetForm = () => {
    setResumeData(initialState)
  }

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        updatePersonalInfo,
        updateField,
        updateArrayEntry,
        addArrayEntry,
        removeArrayEntry,
        setGeneratedResume,
        resetForm,
      }}
    >
      {children}
    </ResumeContext.Provider>
  )
}

export function useResume() {
  const context = useContext(ResumeContext)
  if (!context) throw new Error('useResume must be used within ResumeProvider')
  return context
}
