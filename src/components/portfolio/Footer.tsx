import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-surface-elevated border-t border-portfolio-accent/20 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-portfolio-text-muted text-sm">
            <p className="flex items-center gap-1">
              © {currentYear} Vushakola Phanindra
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/vushakola-phanindra-144319298/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:phanivushakola@gmail.com"
              className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-200"
              aria-label="Email Contact"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com/vushakolaPhanindra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Back to top */}
        <div className="text-center mt-6 pt-6 border-t border-portfolio-accent/10">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors duration-200 text-sm"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;