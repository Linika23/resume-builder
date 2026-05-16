import { HiBriefcase, HiPlus } from 'react-icons/hi'
import { useResume } from '../../context/ResumeContext.jsx'

function ExperienceForm() {
  const { resumeData, updateArrayEntry, addArrayEntry, removeArrayEntry } = useResume()
  const { experience } = resumeData

  const template = { title: '', company: '', startDate: '', endDate: '', description: '' }

  return (
    <div>
      <h3 className="form-section-title"><HiBriefcase /> Work Experience</h3>

      {experience.map((exp, index) => (
        <div key={index} className="dynamic-entry">
          <div className="dynamic-entry__header">
            <span className="dynamic-entry__number">Experience #{index + 1}</span>
            {experience.length > 1 && (
              <button className="dynamic-entry__remove" onClick={() => removeArrayEntry('experience', index)}>
                Remove
              </button>
            )}
          </div>
          <div className="form-grid">
            <div className="input-group">
              <label>Job Title *</label>
              <input type="text" placeholder="Software Engineer" value={exp.title} onChange={e => updateArrayEntry('experience', index, 'title', e.target.value)} />
            </div>
            <div className="input-group">
              <label>Company *</label>
              <input type="text" placeholder="Google" value={exp.company} onChange={e => updateArrayEntry('experience', index, 'company', e.target.value)} />
            </div>
            <div className="input-group">
              <label>Start Date</label>
              <input type="text" placeholder="Jan 2022" value={exp.startDate} onChange={e => updateArrayEntry('experience', index, 'startDate', e.target.value)} />
            </div>
            <div className="input-group">
              <label>End Date</label>
              <input type="text" placeholder="Present" value={exp.endDate} onChange={e => updateArrayEntry('experience', index, 'endDate', e.target.value)} />
            </div>
            <div className="input-group form-grid--full">
              <label>Description</label>
              <textarea placeholder="Describe your responsibilities and achievements..." value={exp.description} onChange={e => updateArrayEntry('experience', index, 'description', e.target.value)} rows={3} />
            </div>
          </div>
        </div>
      ))}

      <button className="add-entry-btn" onClick={() => addArrayEntry('experience', template)}>
        <HiPlus /> Add Another Experience
      </button>
    </div>
  )
}

export default ExperienceForm
