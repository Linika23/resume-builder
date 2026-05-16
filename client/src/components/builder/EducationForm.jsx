import { HiAcademicCap, HiPlus } from 'react-icons/hi'
import { useResume } from '../../context/ResumeContext.jsx'

function EducationForm() {
  const { resumeData, updateArrayEntry, addArrayEntry, removeArrayEntry } = useResume()
  const { education } = resumeData

  const template = { degree: '', school: '', year: '', gpa: '' }

  return (
    <div>
      <h3 className="form-section-title"><HiAcademicCap /> Education</h3>

      {education.map((edu, index) => (
        <div key={index} className="dynamic-entry">
          <div className="dynamic-entry__header">
            <span className="dynamic-entry__number">Education #{index + 1}</span>
            {education.length > 1 && (
              <button className="dynamic-entry__remove" onClick={() => removeArrayEntry('education', index)}>
                Remove
              </button>
            )}
          </div>
          <div className="form-grid">
            <div className="input-group">
              <label>Degree *</label>
              <input type="text" placeholder="B.S. Computer Science" value={edu.degree} onChange={e => updateArrayEntry('education', index, 'degree', e.target.value)} />
            </div>
            <div className="input-group">
              <label>School / University *</label>
              <input type="text" placeholder="Stanford University" value={edu.school} onChange={e => updateArrayEntry('education', index, 'school', e.target.value)} />
            </div>
            <div className="input-group">
              <label>Graduation Year</label>
              <input type="text" placeholder="2023" value={edu.year} onChange={e => updateArrayEntry('education', index, 'year', e.target.value)} />
            </div>
            <div className="input-group">
              <label>GPA (optional)</label>
              <input type="text" placeholder="3.8 / 4.0" value={edu.gpa} onChange={e => updateArrayEntry('education', index, 'gpa', e.target.value)} />
            </div>
          </div>
        </div>
      ))}

      <button className="add-entry-btn" onClick={() => addArrayEntry('education', template)}>
        <HiPlus /> Add Another Education
      </button>
    </div>
  )
}

export default EducationForm
