import { ArrowDown, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-bg">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-portfolio-accent opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-portfolio-accent-glow opacity-5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={profilePhoto}
                alt="Vushakola Phanindra"
                className="w-48 h-48 rounded-full object-cover shadow-elevated border-4 border-portfolio-accent/20 animate-glow-pulse"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20"></div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent animate-slide-up">
            Vushakola Phanindra
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-portfolio-text-secondary mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Aspiring AI & ML Engineer
          </h2>
          
          <div className="flex items-center justify-center gap-2 text-portfolio-text-muted mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <MapPin size={20} />
            <span className="text-lg">Hyderabad, Telangana, India</span>
          </div>

          {/* Motivational Quote */}
          <blockquote className="text-xl md:text-2xl text-portfolio-text-secondary max-w-4xl mx-auto mb-12 italic animate-scale-in" style={{ animationDelay: '0.6s' }}>
            "Success is the sum of small efforts, repeated day in and day out."
            <cite className="block text-portfolio-text-muted text-lg mt-2 not-italic">— Robert Collier</cite>
          </blockquote>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-portfolio-accent-foreground transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown 
            size={24} 
            className="text-portfolio-accent cursor-pointer hover:text-portfolio-accent-glow transition-colors"
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;