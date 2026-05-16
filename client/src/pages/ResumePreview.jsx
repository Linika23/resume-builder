import { useResume } from '../context/ResumeContext.jsx'
import { useNavigate } from 'react-router-dom'
import { HiDownload, HiArrowLeft, HiMail, HiPhone, HiLocationMarker, HiGlobe } from 'react-icons/hi'
import { downloadPDF } from '../utils/exportPdf.js'
import './ResumePreview.css'

function ResumePreview() {
  const { resumeData } = useResume()
  const navigate = useNavigate()
  const { personalInfo, generatedResume } = resumeData

  /* Use AI-generated content if available, fall back to raw input */
  const resume = generatedResume || {
    summary: resumeData.summary,
    experience: resumeData.experience.map(e => ({
      title: e.title,
      company: e.company,
      dates: `${e.startDate} – ${e.endDate}`,
      bullets: e.description ? e.description.split('\n').filter(Boolean) : [],
    })),
    skills: {
      technical: resumeData.skills ? resumeData.skills.split(',').map(s => s.trim()).filter(Boolean) : [],
      soft: [],
    },
    education: resumeData.education.map(e => ({
      degree: e.degree,
      school: e.school,
      year: e.year,
      gpa: e.gpa,
    })),
    projects: resumeData.projects.map(p => ({
      name: p.name,
      description: p.description,
      tech: p.tech ? p.tech.split(',').map(s => s.trim()) : [],
    })),
    certifications: [],
  }

  return (
    <main className="preview-page">
      <div className="container">
        <div className="preview-page__controls">
          <button className="btn btn-secondary" onClick={() => navigate('/builder')}>
            <HiArrowLeft /> Back to Editor
          </button>
          <button className="btn btn-primary" onClick={() => downloadPDF('resume-content', `${personalInfo.fullName || 'resume'}.pdf`)}>
            <HiDownload /> Download PDF
          </button>
        </div>

        <div className="preview-page__wrapper">
          <div className="resume" id="resume-content">
            {/* Header */}
            <div className="resume__header">
              <h1 className="resume__name">{personalInfo.fullName || 'Your Name'}</h1>
              <div className="resume__contact">
                {personalInfo.email && <span><HiMail className="resume__icon" /> {personalInfo.email}</span>}
                {personalInfo.phone && <span><HiPhone className="resume__icon" /> {personalInfo.phone}</span>}
                {personalInfo.location && <span><HiLocationMarker className="resume__icon" /> {personalInfo.location}</span>}
                {personalInfo.website && <span><HiGlobe className="resume__icon" /> {personalInfo.website}</span>}
              </div>
            </div>

            {/* Summary */}
            {resume.summary && (
              <div className="resume__section">
                <h2 className="resume__section-title">Professional Summary</h2>
                <p className="resume__text">{resume.summary}</p>
              </div>
            )}

            {/* Experience */}
            {resume.experience?.length > 0 && resume.experience[0].title && (
              <div className="resume__section">
                <h2 className="resume__section-title">Experience</h2>
                {resume.experience.map((exp, i) => (
                  <div key={i} className="resume__entry">
                    <div className="resume__entry-header">
                      <div>
                        <strong className="resume__entry-title">{exp.title}</strong>
                        <span className="resume__entry-company"> — {exp.company}</span>
                      </div>
                      <span className="resume__entry-dates">{exp.dates}</span>
                    </div>
                    {exp.bullets?.length > 0 && (
                      <ul className="resume__bullets">
                        {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Education */}
            {resume.education?.length > 0 && resume.education[0].degree && (
              <div className="resume__section">
                <h2 className="resume__section-title">Education</h2>
                {resume.education.map((edu, i) => (
                  <div key={i} className="resume__entry">
                    <div className="resume__entry-header">
                      <div>
                        <strong className="resume__entry-title">{edu.degree}</strong>
                        <span className="resume__entry-company"> — {edu.school}</span>
                      </div>
                      <span className="resume__entry-dates">{edu.year}{edu.gpa ? ` | GPA: ${edu.gpa}` : ''}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Skills */}
            {(resume.skills?.technical?.length > 0 || resume.skills?.soft?.length > 0) && (
              <div className="resume__section">
                <h2 className="resume__section-title">Skills</h2>
                {resume.skills.technical?.length > 0 && (
                  <p className="resume__text"><strong>Technical:</strong> {resume.skills.technical.join(', ')}</p>
                )}
                {resume.skills.soft?.length > 0 && (
                  <p className="resume__text"><strong>Soft Skills:</strong> {resume.skills.soft.join(', ')}</p>
                )}
              </div>
            )}

            {/* Projects */}
            {resume.projects?.length > 0 && resume.projects[0].name && (
              <div className="resume__section">
                <h2 className="resume__section-title">Projects</h2>
                {resume.projects.map((proj, i) => (
                  <div key={i} className="resume__entry">
                    <strong className="resume__entry-title">{proj.name}</strong>
                    {proj.tech?.length > 0 && <span className="resume__entry-tech"> ({proj.tech.join(', ')})</span>}
                    <p className="resume__text">{proj.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Certifications */}
            {resume.certifications?.length > 0 && (
              <div className="resume__section">
                <h2 className="resume__section-title">Certifications</h2>
                <ul className="resume__bullets">
                  {resume.certifications.map((cert, i) => <li key={i}>{cert}</li>)}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ResumePreview
