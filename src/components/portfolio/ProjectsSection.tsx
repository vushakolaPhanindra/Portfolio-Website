import { ExternalLink, Github, Leaf, Brain, Gamepad2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Crop Doctor",
      description: "A modern AI-powered web application to help farmers detect crop diseases and pests through image analysis, interact via voice assistant and chatbot, and visualize health trends with dynamic graphs—all in a clean, responsive interface.",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion", "TensorFlow.js", "Computer Vision"],
      icon: <Leaf className="text-green-500" size={32} />,
      category: "AI/ML",
      highlights: [
      " Image Analysis: Upload and analyze crop images to detect diseases and pests using AI models",
      " Voice Assistant & ChatBot: Ask questions and get instant AI-generated responses",
      " Data Visualizer: View crop health trends with dynamic, interactive graphs",
      " Community Portal: Connect with fellow farmers and agri-experts",
      " Framer Motion Animations: Smooth, elegant user interactions",
      " Modern UI: Built with Tailwind CSS and React for a clean, mobile-responsive design"
      ],
      liveDemo: "https://vushakolaphanindra.github.io/ai-crop-doctor/",
      codeLink: "https://github.com/vushakolaPhanindra/ai-crop-doctor"
    },
    {
      title: "General ML Model Evaluation App",
      description: "A Streamlit web app that lets anyone upload CSV data and compare multiple machine learning models—without writing code. Includes automated preprocessing, detailed reports, feature importance charts, and easy export of results.",
      technologies: ["Python", "Streamlit", "scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      icon: <Brain className="text-purple-500" size={32} />,
      category: "Data Science",
      highlights: [
       "Upload any CSV and dynamically select the target column",
       "Run Logistic Regression, Decision Tree, Random Forest, SVM, and KNN",
       "View accuracy, confusion matrix, and classification reports",
       "Visualize feature importance for tree-based models",
       "Compare all models side by side in charts",
       "Download accuracy comparison as CSV",
       "Handles datasets (up to 100 MB with config)"
      ],
      codeLink: "https://github.com/vushakolaPhanindra/ML-Model-Evaluation-App"
    },
    {
      title: "Tic-Tac-Toe Flutter App",
      description: "Modern mobile game built with Flutter featuring AI opponent, beautiful animations, and engaging user experience. Includes multiple difficulty levels and game statistics tracking.",
      technologies: ["Flutter", "Dart", "State Management", "Animation", "AI Algorithms"],
      icon: <Gamepad2 className="text-blue-500" size={32} />,
      category: "Mobile App",
      highlights: [
        "Smart AI opponent with adjustable difficulty",
        "Smooth animations and transitions",
        "Game statistics and leaderboard",
        "Cross-platform compatibility"
      ],
      codeLink: "https://github.com/vushakolaPhanindra/tictoktoe"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-portfolio-text-primary">
            Featured <span className="text-portfolio-accent">Projects</span>
          </h2>
          <p className="text-xl text-portfolio-text-muted max-w-2xl mx-auto">
            Innovative solutions showcasing the power of AI, machine learning, and modern development practices
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-portfolio-accent/20 shadow-card hover:shadow-elevated transition-all duration-500 transform hover:scale-105 group overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-portfolio-surface-elevated rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <Badge 
                    variant="outline" 
                    className="border-portfolio-accent text-portfolio-accent bg-portfolio-accent/10"
                  >
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-portfolio-text-primary group-hover:text-portfolio-accent transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-portfolio-text-secondary leading-relaxed">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-portfolio-text-primary">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-portfolio-text-muted flex items-start gap-2">
                        <span className="text-portfolio-accent mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-portfolio-text-primary">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="text-xs bg-portfolio-accent/10 text-portfolio-accent border-none hover:bg-portfolio-accent/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  {project.liveDemo && (
                    <Button 
                      asChild
                      size="sm" 
                      className="bg-gradient-primary hover:shadow-glow transition-all duration-300 flex items-center gap-2"
                    >
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  <Button 
                    asChild
                    variant="outline" 
                    size="sm" 
                    className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-portfolio-accent-foreground flex items-center gap-2"
                  >
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <p className="text-portfolio-text-muted mb-6">
            Interested in seeing more of my work?
          </p>
          <Button 
            asChild
            variant="outline" 
            size="lg"
            className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-portfolio-accent-foreground transition-all duration-300"
          >
            <a href="https://github.com/vushakolaPhanindra" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" size={20} />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
