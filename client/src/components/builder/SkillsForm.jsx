import { HiChip } from 'react-icons/hi'
import { useResume } from '../../context/ResumeContext.jsx'
import './SkillsForm.css'

function SkillsForm() {
  const { resumeData, updateField } = useResume()
  const { skills } = resumeData

  const skillTags = skills
    .split(',')
    .map(s => s.trim())
    .filter(s => s.length > 0)

  return (
    <div>
      <h3 className="form-section-title"><HiChip /> Skills</h3>
      <div className="input-group">
        <label htmlFor="skills">Enter your skills (comma-separated)</label>
        <textarea
          id="skills"
          placeholder="React, Node.js, Python, AWS, Docker, TypeScript, PostgreSQL..."
          value={skills}
          onChange={e => updateField('skills', e.target.value)}
          rows={4}
        />
      </div>

      {skillTags.length > 0 && (
        <div className="skills-preview">
          <span className="skills-preview__label">Preview:</span>
          <div className="skills-preview__tags">
            {skillTags.map((tag, i) => (
              <span key={i} className="skills-preview__tag">{tag}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default SkillsForm
