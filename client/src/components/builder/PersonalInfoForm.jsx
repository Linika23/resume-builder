import { HiUser } from 'react-icons/hi'
import { useResume } from '../../context/ResumeContext.jsx'

function PersonalInfoForm() {
  const { resumeData, updatePersonalInfo, updateField } = useResume()
  const { personalInfo, summary } = resumeData

  return (
    <div>
      <h3 className="form-section-title"><HiUser /> Personal Information</h3>
      <div className="form-grid">
        <div className="input-group">
          <label htmlFor="fullName">Full Name *</label>
          <input id="fullName" type="text" placeholder="John Doe" value={personalInfo.fullName} onChange={e => updatePersonalInfo('fullName', e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email *</label>
          <input id="email" type="email" placeholder="john@example.com" value={personalInfo.email} onChange={e => updatePersonalInfo('email', e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="tel" placeholder="+1 (555) 123-4567" value={personalInfo.phone} onChange={e => updatePersonalInfo('phone', e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="location">Location</label>
          <input id="location" type="text" placeholder="San Francisco, CA" value={personalInfo.location} onChange={e => updatePersonalInfo('location', e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="linkedin">LinkedIn URL</label>
          <input id="linkedin" type="url" placeholder="https://linkedin.com/in/johndoe" value={personalInfo.linkedin} onChange={e => updatePersonalInfo('linkedin', e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="website">Portfolio / Website</label>
          <input id="website" type="url" placeholder="https://johndoe.dev" value={personalInfo.website} onChange={e => updatePersonalInfo('website', e.target.value)} />
        </div>
        <div className="input-group form-grid--full">
          <label htmlFor="summary">Professional Summary</label>
          <textarea id="summary" placeholder="Brief overview of your career, goals, and key strengths..." value={summary} onChange={e => updateField('summary', e.target.value)} rows={4} />
        </div>
      </div>
    </div>
  )
}

export default PersonalInfoForm
