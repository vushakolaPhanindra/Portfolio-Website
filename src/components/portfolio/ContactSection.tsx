import { Mail, Phone, Linkedin, Download, Send, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // replace these with your EmailJS keys:
      const serviceId = 'service_ewrpwr4';
      const templateId = 'template_0jqx50c';
      const publicKey = 'R4gh1k18fjvCjwhwG';

      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      }, publicKey);

      alert(' Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      alert(' Failed to send message. Please try again later.');
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-portfolio-accent" size={24} />,
      label: "Email",
      value: "phanivushakola@gmail.com",
      href: "mailto:phanivushakola@gmail.com"
    },
    {
      icon: <Phone className="text-portfolio-accent" size={24} />,
      label: "Phone",
      value: "+91-8247676238",
      href: "tel:+918247676238"
    },
    {
      icon: <Linkedin className="text-portfolio-accent" size={24} />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/vushakola-phanindra-144319298/"
    },
    {
      icon: <MapPin className="text-portfolio-accent" size={24} />,
      label: "Location",
      value: "Hyderabad, Telangana, India",
      href: "https://maps.app.goo.gl/PYUq43pQm6iTShpG7"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-portfolio-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-portfolio-text-primary">
            Get In <span className="text-portfolio-accent">Touch</span>
          </h2>
          <p className="text-xl text-portfolio-text-muted max-w-2xl mx-auto">
            Ready to collaborate on exciting AI/ML projects? Let's discuss how we can work together to build innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-portfolio-text-primary mb-6">
                Let's Connect
              </h3>
              <p className="text-portfolio-text-secondary leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, innovative projects, or just chat about the latest in AI and machine learning. 
                Whether you have a project in mind or want to explore potential collaborations, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="bg-gradient-card border-portfolio-accent/20 shadow-card hover:shadow-elevated transition-all duration-300 transform hover:scale-105 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-portfolio-accent/10 rounded-lg group-hover:bg-portfolio-accent/20 transition-colors">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-portfolio-text-primary text-sm">
                          {info.label}
                        </h4>
                        {info.href ? (
                          <a 
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-portfolio-text-secondary hover:text-portfolio-accent transition-colors text-sm"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-portfolio-text-secondary text-sm">
                            {info.value}
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Resume Download */}
            <Card className="bg-gradient-card border-portfolio-accent/20 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-portfolio-text-primary mb-2">
                      Resume / CV
                    </h4>
                    <p className="text-portfolio-text-secondary text-sm">
                      Download my complete resume to learn more about my experience and qualifications.
                    </p>
                  </div>
                  <Button 
                    asChild
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300 flex items-center gap-2"
                  >
                    <a 
                      href="/assets/PhanindraResume1.pdf" 
                      download 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Download size={16} />
                      Download
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-gradient-card border-portfolio-accent/20 shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-portfolio-text-primary mb-6">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-portfolio-surface-elevated border-portfolio-accent/20 text-portfolio-text-primary placeholder:text-portfolio-text-muted focus:border-portfolio-accent"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-portfolio-surface-elevated border-portfolio-accent/20 text-portfolio-text-primary placeholder:text-portfolio-text-muted focus:border-portfolio-accent"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      required
                      className="bg-portfolio-surface-elevated border-portfolio-accent/20 text-portfolio-text-primary placeholder:text-portfolio-text-muted focus:border-portfolio-accent resize-none"
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
