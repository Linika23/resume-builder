import { HiCode, HiPlus } from 'react-icons/hi'
import { useResume } from '../../context/ResumeContext.jsx'

function ProjectsForm() {
  const { resumeData, updateArrayEntry, addArrayEntry, removeArrayEntry } = useResume()
  const { projects } = resumeData

  const template = { name: '', description: '', tech: '', link: '' }

  return (
    <div>
      <h3 className="form-section-title"><HiCode /> Projects</h3>

      {projects.map((proj, index) => (
        <div key={index} className="dynamic-entry">
          <div className="dynamic-entry__header">
            <span className="dynamic-entry__number">Project #{index + 1}</span>
            {projects.length > 1 && (
              <button className="dynamic-entry__remove" onClick={() => removeArrayEntry('projects', index)}>
                Remove
              </button>
            )}
          </div>
          <div className="form-grid">
            <div className="input-group">
              <label>Project Name *</label>
              <input type="text" placeholder="AI Resume Builder" value={proj.name} onChange={e => updateArrayEntry('projects', index, 'name', e.target.value)} />
            </div>
            <div className="input-group">
              <label>Technologies</label>
              <input type="text" placeholder="React, Node.js, OpenAI" value={proj.tech} onChange={e => updateArrayEntry('projects', index, 'tech', e.target.value)} />
            </div>
            <div className="input-group form-grid--full">
              <label>Description</label>
              <textarea placeholder="What does this project do? What problems does it solve?" value={proj.description} onChange={e => updateArrayEntry('projects', index, 'description', e.target.value)} rows={3} />
            </div>
            <div className="input-group form-grid--full">
              <label>Live Link / GitHub</label>
              <input type="url" placeholder="https://github.com/user/project" value={proj.link} onChange={e => updateArrayEntry('projects', index, 'link', e.target.value)} />
            </div>
          </div>
        </div>
      ))}

      <button className="add-entry-btn" onClick={() => addArrayEntry('projects', template)}>
        <HiPlus /> Add Another Project
      </button>
    </div>
  )
}

export default ProjectsForm
