"use client";
import { useState } from 'react';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="smooth-content min-h-screen flex items-center justify-center relative px-4 py-20">
      <div className="max-w-4xl mx-auto z-10 w-full">
        <h2 className="text-4xl md:text-5xl text-white mb-12 text-center font-['Inter']" style={{ fontWeight: 300 }}>
          Let's Work Together
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl text-white mb-6 font-['Inter']" style={{ fontWeight: 300 }}>
              Get In Touch
            </h3>
            <p className="text-blue-100 mb-8 leading-relaxed font-['Inter']" style={{ fontWeight: 300 }}>
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question, want to collaborate, or just want to say hello,
              I'd love to hear from you.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                  <FaEnvelope className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-blue-200 font-['Inter']" style={{ fontWeight: 300 }}>Enquiries</p>
                  <p className="text-white font-['Inter']" style={{ fontWeight: 400 }}><i>Please contact through form</i></p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                  <FaMapMarkerAlt className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-blue-200 font-['Inter']" style={{ fontWeight: 300 }}>Location</p>
                  <p className="text-white font-['Inter']" style={{ fontWeight: 400 }}>Jakarta, Indonesia</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex space-x-4">
              <a href="https://linkedin.com/in/raxel-adam-kamisik" title="Linkedin Profile" className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center border border-blue-500/30 hover:border-blue-400/50 transition-colors">
                <FaLinkedin className="w-6 h-6 text-blue-400" />
              </a>
              <a href="https://github.com/axelration" title="Github Profile" className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center border border-blue-500/30 hover:border-blue-400/50 transition-colors">
                <FaGithub className="w-6 h-6 text-blue-400" />
              </a>
            </div>
          </div>

          <div>
            {/* <form onSubmit={handleSubmit} className="space-y-6"> */}
            <form action="https://formsubmit.co/2a370301fa85343ae1029e09bf51d07a" method='POST' className="space-y-6">
              <input type="hidden" name="_captcha" value="true" />
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/30 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/50 font-['Inter']"
                  style={{ fontWeight: 300 }}
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/30 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/50 font-['Inter']"
                  style={{ fontWeight: 300 }}
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/30 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/50 resize-none font-['Inter']"
                  style={{ fontWeight: 300 }}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors font-['Inter']"
                style={{ fontWeight: 400 }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}