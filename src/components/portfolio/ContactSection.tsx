import { Mail, Phone, Linkedin, Download, Send, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    title: '',
    message: ''
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const serviceId = 'service_ewrpwr4';
      const templateId = 'template_0jqx50c';
      const publicKey = 'R4gh1k18fjvCjwhwG';

      await emailjs.send(
        serviceId,
        templateId,
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          title: formData.title,
          message: formData.message
        },
        publicKey
      );

      alert('✅ Message sent successfully!');
      setFormData({
        user_name: '',
        user_email: '',
        title: '',
        message: ''
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('❌ Failed to send message. Please try again later.');
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-portfolio-accent" size={24} />,
      label: 'Email',
      value: 'phanivushakola@gmail.com',
      href: 'mailto:phanivushakola@gmail.com'
    },
    {
      icon: <Phone className="text-portfolio-accent" size={24} />,
      label: 'Phone',
      value: '+91-8247676238',
      href: 'tel:+918247676238'
    },
    {
      icon: <Linkedin className="text-portfolio-accent" size={24} />,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://linkedin.com/in/vushakola-phanindra-144319298/'
    },
    {
      icon: <MapPin className="text-portfolio-accent" size={24} />,
      label: 'Location',
      value: 'Hyderabad, Telangana, India',
      href: 'https://maps.app.goo.gl/PYUq43pQm6iTShpG7'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-portfolio-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-portfolio-text-primary">
            Contact <span className="text-portfolio-accent">Me</span>
          </h2>
          <p className="text-xl text-portfolio-text-muted max-w-2xl mx-auto">
            Feel free to reach out for collaborations, internships, or opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="bg-gradient-card border-portfolio-accent/20 shadow-card hover:shadow-elevated transition-all duration-300 transform hover:scale-105"
                >
                  <CardContent className="p-6 flex items-center gap-4">
                    {info.icon}
                    <div>
                      <h4 className="font-semibold text-portfolio-text-primary text-sm">
                        {info.label}
                      </h4>
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-portfolio-text-secondary hover:text-portfolio-accent text-sm"
                      >
                        {info.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Resume */}
            <Card className="bg-gradient-card border-portfolio-accent/20 shadow-card">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-portfolio-text-primary">
                    Resume / CV
                  </h4>
                  <p className="text-portfolio-text-secondary text-sm">
                    Download my resume for more details.
                  </p>
                </div>
                <Button asChild className="bg-gradient-primary flex gap-2">
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
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card border-portfolio-accent/20 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-portfolio-text-primary mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  name="user_name"
                  placeholder="Your Name"
                  value={formData.user_name}
                  onChange={handleInputChange}
                  required
                />

                <Input
                  name="user_email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.user_email}
                  onChange={handleInputChange}
                  required
                />

                <Input
                  name="title"
                  placeholder="Subject"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />

                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />

                <Button
                  type="submit"
                  className="w-full bg-gradient-primary flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
