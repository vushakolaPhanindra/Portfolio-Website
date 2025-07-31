import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace('#', '') || 'home');
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = section === 'home' ? document.body : document.getElementById(section);
        if (element) {
          const offsetTop = section === 'home' ? 0 : element.offsetTop;
          const offsetBottom = offsetTop + (section === 'home' ? window.innerHeight : element.offsetHeight);
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-portfolio-accent/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-portfolio-text-primary">
            <span className="text-portfolio-accent">P</span>hanindra
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '') || 'home';
              const isActive = activeSection === sectionId;
              
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-colors duration-200 relative ${
                    isActive 
                      ? 'text-portfolio-accent' 
                      : 'text-portfolio-text-secondary hover:text-portfolio-accent'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-portfolio-accent animate-scale-in"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Hire Me Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-portfolio-text-primary"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-portfolio-accent/20 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const sectionId = item.href.replace('#', '') || 'home';
                const isActive = activeSection === sectionId;
                
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left text-sm font-medium transition-colors duration-200 ${
                      isActive 
                        ? 'text-portfolio-accent' 
                        : 'text-portfolio-text-secondary hover:text-portfolio-accent'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
              <Button
                onClick={() => scrollToSection('#contact')}
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 mt-4 w-full"
              >
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;