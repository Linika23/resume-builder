import { HiDocumentSearch, HiSparkles } from 'react-icons/hi'
import { useResume } from '../../context/ResumeContext.jsx'
import './ReviewStep.css'

function ReviewStep({ onGenerate, loading }) {
  const { resumeData } = useResume()
  const { personalInfo, summary, experience, education, skills, projects } = resumeData

  return (
    <div className="review">
      <h3 className="form-section-title"><HiDocumentSearch /> Review Your Information</h3>
      <p className="review__desc">Review your details below. When ready, click generate and our AI will craft professional resume content.</p>

      <div className="review__section">
        <h4 className="review__section-title">Personal Info</h4>
        <div className="review__grid">
          <div><span className="review__label">Name:</span> {personalInfo.fullName || '—'}</div>
          <div><span className="review__label">Email:</span> {personalInfo.email || '—'}</div>
          <div><span className="review__label">Phone:</span> {personalInfo.phone || '—'}</div>
          <div><span className="review__label">Location:</span> {personalInfo.location || '—'}</div>
        </div>
      </div>

      {summary && (
        <div className="review__section">
          <h4 className="review__section-title">Summary</h4>
          <p className="review__text">{summary}</p>
        </div>
      )}

      <div className="review__section">
        <h4 className="review__section-title">Experience ({experience.length})</h4>
        {experience.map((exp, i) => (
          <div key={i} className="review__item">
            <strong>{exp.title || 'Untitled'}</strong> at {exp.company || '—'} ({exp.startDate} – {exp.endDate})
          </div>
        ))}
      </div>

      <div className="review__section">
        <h4 className="review__section-title">Education ({education.length})</h4>
        {education.map((edu, i) => (
          <div key={i} className="review__item">
            <strong>{edu.degree || 'Untitled'}</strong> — {edu.school || '—'} ({edu.year})
          </div>
        ))}
      </div>

      {skills && (
        <div className="review__section">
          <h4 className="review__section-title">Skills</h4>
          <p className="review__text">{skills}</p>
        </div>
      )}

      <div className="review__section">
        <h4 className="review__section-title">Projects ({projects.length})</h4>
        {projects.map((proj, i) => (
          <div key={i} className="review__item">
            <strong>{proj.name || 'Untitled'}</strong> — {proj.tech || 'No tech listed'}
          </div>
        ))}
      </div>

      <button
        className="btn btn-primary btn-lg review__generate"
        onClick={onGenerate}
        disabled={loading}
      >
        {loading ? (
          <>
            <div className="spinner" style={{ width: 20, height: 20, borderWidth: 2 }}></div>
            AI is Crafting Your Resume...
          </>
        ) : (
          <>
            <HiSparkles />
            Generate Resume with AI
          </>
        )}
      </button>
    </div>
  )
}

export default ReviewStep
