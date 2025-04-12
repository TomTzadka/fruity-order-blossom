
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PhoneCall, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-cream py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-foreground/80">
              We'd love to hear from you. Reach out with any questions, feedback, or special requests.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below, and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-gold/30 focus:ring-gold"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-gold/30 focus:ring-gold"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-gold/30 focus:ring-gold"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-gold/30 focus:ring-gold"
                    rows={5}
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gold hover:bg-gold-dark text-white rounded-full px-8 py-6"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                If you prefer, you can reach us directly using the contact information below.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-gold/10 rounded-full p-3 mr-4">
                    <PhoneCall className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Monday to Friday, 9am to 6pm EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold/10 rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@lafruta.com</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      We aim to respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gold/10 rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      123 Orchard Street<br />
                      Fruit Valley, CA 90210<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-cream p-6 rounded-lg">
                <h3 className="font-medium mb-2">Business Hours</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
