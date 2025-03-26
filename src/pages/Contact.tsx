import React, { useState } from 'react';
import { Mail, Send, MessageSquare, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_2eml44s",
        "template_banpq3s",
        {
          to_email: 'horizonweather2024@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          date: new Date().toLocaleString()
        },
        "CNEccoNN_qWbfclEG"
      );

      toast({
        title: "Message Sent!",
        description: "We've received your message and will respond soon.",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Email send error:', error);
      toast({
        title: "Failed to Send",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center p-3 rounded-full mb-4">
            <Mail className="h-8 w-8 text-horizon" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">
            Contact <span className="text-horizon">Our Team</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We're here to help with any questions about our services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="backdrop-blur-sm rounded-2xl p-8 border shadow-xl">
            <div className="flex items-center mb-8">
              <MessageSquare className="h-6 w-6 text-horizon mr-3" />
              <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
            </div>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              Whether you have questions about our services, feedback on your experience, 
              or suggestions for improvement, our team is ready to assist you.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Email Us</h3>
                <a 
                  href="mailto:horizonweather2024@gmail.com" 
                  className="text-horizon hover:text-horizon/80 transition flex items-center"
                >
                  <Mail className="h-5 w-5 mr-2" /> 
                  horizonweather2024@gmail.com
                </a>
              </div>
              
              <div className="bg-gray-700/30 rounded-xl p-5">
                <div className="flex items-center mb-3">
                  <AlertCircle className="h-5 w-5 text-horizon mr-2" />
                  <h3 className="text-white font-medium">Our Response Time</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  We typically respond within 24-48 hours during business days.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className=" backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Send className="h-6 w-6 text-horizon mr-3" />
              Send Us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label htmlFor="name" className="block text-gray-300 font-medium">Your Name</label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-700/50 border-gray-600/50 text-white focus:ring-2 focus:ring-horizon/50"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="space-y-1">
                <label htmlFor="email" className="block text-gray-300 font-medium">Email Address</label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-700/50 border-gray-600/50 text-white focus:ring-2 focus:ring-horizon/50"
                  placeholder="your@email.com"
                />
              </div>
              
              <div className="space-y-1">
                <label htmlFor="subject" className="block text-gray-300 font-medium">Subject</label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-gray-700/50 border-gray-600/50 text-white focus:ring-2 focus:ring-horizon/50"
                  placeholder="What's this about?"
                />
              </div>
              
              <div className="space-y-1">
                <label htmlFor="message" className="block text-gray-300 font-medium">Message</label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-gray-700/50 border-gray-600/50 text-white focus:ring-2 focus:ring-horizon/50 min-h-[150px]"
                  placeholder="Your message here..."
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-horizon hover:bg-horizon/90 text-gray-900 font-semibold py-6 text-lg transition-all"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="h-5 w-5 mr-3" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;