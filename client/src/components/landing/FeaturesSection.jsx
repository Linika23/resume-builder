import { HiSparkles, HiEye, HiDocumentDownload, HiLightningBolt, HiTemplate, HiShieldCheck } from 'react-icons/hi'
import './FeaturesSection.css'

const features = [
  {
    icon: <HiSparkles />,
    title: 'AI-Powered Content',
    description: 'OpenAI transforms your raw input into polished, professional resume bullets with action verbs and quantified achievements.',
  },
  {
    icon: <HiEye />,
    title: 'Live Preview',
    description: 'See your resume update in real-time as you fill in each section. What you see is what you get — pixel-perfect.',
  },
  {
    icon: <HiDocumentDownload />,
    title: 'One-Click PDF Export',
    description: 'Download your finished resume as a beautifully formatted PDF, ready to submit to any job application.',
  },
  {
    icon: <HiLightningBolt />,
    title: 'Lightning Fast',
    description: 'Generate a complete, professional resume in under 30 seconds. No sign-ups, no friction — just results.',
  },
  {
    icon: <HiTemplate />,
    title: 'Clean Templates',
    description: 'Professional, minimal resume layouts designed to pass ATS systems and impress recruiters at first glance.',
  },
  {
    icon: <HiShieldCheck />,
    title: 'ATS-Optimized',
    description: 'Every resume is structured with proper heading hierarchy, keywords, and formatting that ATS scanners love.',
  },
]

function FeaturesSection() {
  return (
    <section className="features section" id="features">
      <div className="container">
        <div className="features__header">
          <span className="features__label">Features</span>
          <h2 className="features__title">
            Everything You Need to <span className="gradient-text">Land the Job</span>
          </h2>
          <p className="features__subtitle">
            From AI content generation to instant PDF export — we handle the hard parts so you can focus on your career.
          </p>
        </div>

        <div className="features__grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-card__icon">{feature.icon}</div>
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
