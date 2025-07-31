import { GraduationCap, Code, Brain, Sparkles, Wrench } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-portfolio-text-primary">
            About <span className="text-portfolio-accent">Me</span>
          </h2>
          <p className="text-xl text-portfolio-text-muted max-w-2xl mx-auto">
            Passionate about leveraging AI and Machine Learning to solve real-world problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Content */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-portfolio-accent/20 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="text-portfolio-accent" size={24} />
                  <h3 className="text-xl font-semibold text-portfolio-text-primary">Education</h3>
                </div>
                <p className="text-portfolio-text-secondary leading-relaxed">
                  Currently pursuing <strong>B.Tech in Computer Science Engineering</strong> with a specialization in 
                  <strong className="text-portfolio-accent"> Artificial Intelligence & Machine Learning</strong>. 
                  My academic journey has equipped me with strong foundations in algorithms, data structures, 
                  and cutting-edge AI technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-portfolio-accent/20 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="text-portfolio-accent" size={24} />
                  <h3 className="text-xl font-semibold text-portfolio-text-primary">Passion & Vision</h3>
                </div>
                <p className="text-portfolio-text-secondary leading-relaxed">
                  I'm deeply fascinated by the potential of AI to transform industries and improve lives. 
                  From developing intelligent crop disease detection systems to creating mental health prediction models, 
                  I strive to build technology that makes a meaningful impact on society.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-portfolio-accent/20 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="text-portfolio-accent" size={24} />
                  <h3 className="text-xl font-semibold text-portfolio-text-primary">Beyond Coding</h3>
                </div>
                <p className="text-portfolio-text-secondary leading-relaxed">
                  When I'm not coding, you'll find me participating in hackathons, exploring the latest AI research, 
                  or expressing my creativity through singing. I believe in the power of diverse experiences to fuel innovation 
                  and bring fresh perspectives to problem-solving.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Technical Skills Section */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-portfolio-accent/20 shadow-card">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center gap-3">
                  <Wrench className="text-portfolio-accent" size={24} />
                  <h3 className="text-xl font-semibold text-portfolio-text-primary">Technical Skills</h3>
                </div>

                {/* Languages & Frameworks */}
                <div>
                  <h4 className="text-lg font-semibold text-portfolio-text-primary mb-2">Languages & Frameworks</h4>
                  <p className="text-portfolio-text-secondary leading-relaxed">
                    Python, Java, SQL, C, JavaScript, Prolog, R, Node.js, Flutter, Hugging Face, Pandas, NumPy,
                    scikit-learn, TensorFlow, SciPy, NLTK, HTML, CSS
                  </p>
                </div>

                {/* Tools & Platforms */}
                <div>
                  <h4 className="text-lg font-semibold text-portfolio-text-primary mb-2">Tools & Platforms</h4>
                  <p className="text-portfolio-text-secondary leading-relaxed">
                    Jupyter Notebook, VS Code, GitHub, Git, Postman, Android Studio, MySQL Workbench, 
                    PyCharm, Anaconda, Canva, Google Cloud Platform, MongoDB, Streamlit.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
