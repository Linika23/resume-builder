import { Link } from 'react-router-dom'
import { HiArrowRight, HiSparkles } from 'react-icons/hi'
import './HeroSection.css'

function HeroSection() {
  return (
    <section className="hero">
      {/* Background effects */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1"></div>
        <div className="hero__orb hero__orb--2"></div>
        <div className="hero__orb hero__orb--3"></div>
        <div className="hero__grid"></div>
      </div>

      <div className="hero__content container">
        <div className="hero__text">
          <div className="hero__badge animate-fadeInUp">
            <HiSparkles />
            <span>Powered by OpenAI</span>
          </div>

          <h1 className="hero__title animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Build Your Perfect<br />
            <span className="gradient-text">Resume with AI</span>
          </h1>

          <p className="hero__subtitle animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Input your experience, skills, and education — our AI transforms them
            into professional, ATS-optimized resume content. Preview live, then
            download as a polished PDF in seconds.
          </p>

          <div className="hero__actions animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <Link to="/builder" className="btn btn-primary btn-lg">
              Start Building
              <HiArrowRight />
            </Link>
            <a href="#features" className="btn btn-ghost">
              See How It Works
            </a>
          </div>

          <div className="hero__stats animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="hero__stat">
              <span className="hero__stat-number">10K+</span>
              <span className="hero__stat-label">Resumes Created</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">95%</span>
              <span className="hero__stat-label">ATS Pass Rate</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">&lt;30s</span>
              <span className="hero__stat-label">Generation Time</span>
            </div>
          </div>
        </div>

        <div className="hero__visual animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <div className="hero__mockup">
            <div className="hero__mockup-header">
              <div className="hero__mockup-dots">
                <span></span><span></span><span></span>
              </div>
              <span className="hero__mockup-title">resume_preview.pdf</span>
            </div>
            <div className="hero__mockup-body">
              <div className="hero__mockup-name">John Doe</div>
              <div className="hero__mockup-role">Senior Software Engineer</div>
              <div className="hero__mockup-line hero__mockup-line--full"></div>
              <div className="hero__mockup-line hero__mockup-line--80"></div>
              <div className="hero__mockup-line hero__mockup-line--90"></div>
              <div className="hero__mockup-section">Experience</div>
              <div className="hero__mockup-line hero__mockup-line--full"></div>
              <div className="hero__mockup-line hero__mockup-line--70"></div>
              <div className="hero__mockup-line hero__mockup-line--85"></div>
              <div className="hero__mockup-line hero__mockup-line--60"></div>
              <div className="hero__mockup-section">Skills</div>
              <div className="hero__mockup-tags">
                <span>React</span><span>Node.js</span><span>Python</span><span>AWS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
