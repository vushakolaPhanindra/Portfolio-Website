import { Award, Trophy, Mic, Brain, Calendar, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
      issuer: "Oracle",
      type: "Professional Certification",
      icon: <Brain className="text-portfolio-accent" size={24} />,
      description: "Advanced certification covering cloud-based data science, machine learning, and AI implementation on OCI platform.",
      tags: ["Cloud Computing", "Data Science", "Machine Learning"],
      file: "/assets/oraclecertificate.pdf"
    },
    {
      title: "Google AI/ML Virtual Internship",
      issuer: "Google",
      type: "Virtual Internship",
      icon: <Award className="text-portfolio-accent" size={24} />,
      description: "Comprehensive program covering artificial intelligence and machine learning fundamentals, practical applications, and industry best practices.",
      tags: ["AI", "Machine Learning", "Google Cloud"],
      file: "/assets/aiml.pdf"
    },
    {
      title: "Generative AI Virtual Internship",
      issuer: "Google",
      type: "Virtual Internship",
      icon: <Brain className="text-portfolio-accent" size={24} />,
      description: "Specialized training in generative AI technologies, including large language models, prompt engineering, and ethical AI development.",
      tags: ["Generative AI", "LLMs", "Prompt Engineering"],
      file: "/assets/genai.pdf"
    }
  ];

  const achievements = [
    {
      title: "National Level Hackathon Participation",
      description: "Actively participated in multiple national-level hackathons, developing innovative solutions and collaborating with diverse teams.",
      icon: <Trophy className="text-portfolio-accent" size={20} />,
      type: "Competition"
    },
    {
      title: "AI Days Event Participation",
      description: "Engaged in AI community events, networking with industry professionals and staying updated with latest AI trends.",
      icon: <Calendar className="text-portfolio-accent" size={20} />,
      type: "Event"
    },
    {
      title: "Singing Competition Winner",
      description: "Secured prize in singing competition, showcasing artistic talents and creative expression beyond technical skills.",
      icon: <Mic className="text-portfolio-accent" size={20} />,
      type: "Arts"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-portfolio-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-portfolio-text-primary">
            Certifications & <span className="text-portfolio-accent">Achievements</span>
          </h2>
          <p className="text-xl text-portfolio-text-muted max-w-2xl mx-auto">
            Continuous learning and recognition of excellence in technology and beyond
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-portfolio-text-primary mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-portfolio-accent/20 shadow-card hover:shadow-elevated transition-all duration-300 transform hover:scale-105 group"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    {cert.icon}
                    <Badge variant="outline" className="border-portfolio-accent text-portfolio-accent">
                      {cert.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-portfolio-text-primary group-hover:text-portfolio-accent transition-colors">
                    {cert.title}
                  </CardTitle>
                  <p className="text-portfolio-accent font-medium">{cert.issuer}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-portfolio-text-secondary mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="text-xs bg-portfolio-accent/10 text-portfolio-accent border-none"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent/10"
                    onClick={() => window.open(cert.file, '_blank')}
                  >
                    <FileText size={16} className="mr-2" />
                    View Certificate
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-semibold text-portfolio-text-primary mb-8 text-center">
            Notable Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-portfolio-accent/20 shadow-card hover:shadow-elevated transition-all duration-300 transform hover:scale-105 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    {achievement.icon}
                    <Badge variant="outline" className="border-portfolio-accent text-portfolio-accent">
                      {achievement.type}
                    </Badge>
                  </div>
                  <h4 className="text-lg font-semibold text-portfolio-text-primary mb-3 group-hover:text-portfolio-accent transition-colors">
                    {achievement.title}
                  </h4>
                  <p className="text-portfolio-text-secondary leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
