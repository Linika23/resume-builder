import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import './CTASection.css'

function CTASection() {
  return (
    <section className="cta section">
      <div className="container">
        <div className="cta__card">
          <div className="cta__glow"></div>
          <h2 className="cta__title">
            Ready to Build Your <span className="gradient-text">Dream Resume?</span>
          </h2>
          <p className="cta__subtitle">
            Join thousands of professionals who landed their dream jobs with AI-crafted resumes.
            It's free, fast, and incredibly easy.
          </p>
          <Link to="/builder" className="btn btn-primary btn-lg cta__btn">
            Start Building Now
            <HiArrowRight />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer__inner">
          <span className="footer__brand">Resume<span className="gradient-text">AI</span></span>
          <span className="footer__copy">&copy; 2025 ResumeAI. Built with React & OpenAI.</span>
        </div>
      </footer>
    </section>
  )
}

export default CTASection
