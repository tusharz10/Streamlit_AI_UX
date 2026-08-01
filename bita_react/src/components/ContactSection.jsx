import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Data Analytics & Power BI',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedMessage = `Hello BITA Cloud Team,%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Service Required:* ${encodeURIComponent(formData.service)}%0A*Message:* ${encodeURIComponent(formData.message)}`;
    const whatsappUrl = `https://wa.me/918982296014?text=${formattedMessage}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setSubmitted(false);
    }, 600);
  };

  return (
    <section className="section-padding relative bg-slate-950/80 border-t border-slate-800/80" id="contact">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="section-badge mx-auto">
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title text-white">
            Start Your <span className="gradient-text-cyan">Cloud & Data Consultation</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Connect directly with our engineering team to discuss your software, ETL pipelines, or Power BI reporting needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 flex items-center gap-4 hover:border-cyan-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-white">Office Location</h4>
                <p className="text-slate-400 text-sm">BITA CLOUD INFO TECH Services</p>
              </div>
            </div>

            <div className="glass-panel p-6 flex items-center gap-4 hover:border-emerald-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-white">Direct WhatsApp / Phone</h4>
                <a href="https://wa.me/918982296014" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-mono text-sm hover:underline">
                  +91 89822 96014
                </a>
              </div>
            </div>

            <div className="glass-panel p-6 flex items-center gap-4 hover:border-purple-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-white">Email Support</h4>
                <a href="mailto:tushar.kashyap.bita@gmail.com" className="text-purple-400 font-mono text-sm hover:underline">
                  tushar.kashyap.bita@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-7 glass-panel p-8 border-cyan-500/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-mono text-slate-300">Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 text-white rounded-lg p-3 text-sm focus:border-cyan-400 outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono text-slate-300">Email Address *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="john@enterprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 text-white rounded-lg p-3 text-sm focus:border-cyan-400 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono text-slate-300">Service Required</label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 text-white rounded-lg p-3 text-sm focus:border-cyan-400 outline-none transition-colors"
                >
                  <option value="Data Analytics & Power BI">Data Analytics & Power BI</option>
                  <option value="Azure Data Factory & Pipeline ETL">Azure Data Factory & Pipeline ETL</option>
                  <option value="Microsoft Fabric Lakehouse Integration">Microsoft Fabric Lakehouse Integration</option>
                  <option value="Cloud Infrastructure & Migration">Cloud Infrastructure & Migration</option>
                  <option value="Custom Software Development">Custom Software Development</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono text-slate-300">Project Details / Message *</label>
                <textarea 
                  required 
                  rows={4}
                  placeholder="Tell us about your pipeline requirements or data goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 text-white rounded-lg p-3 text-sm focus:border-cyan-400 outline-none transition-colors"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="btn-whatsapp-direct w-full justify-center py-4 text-base font-bold uppercase tracking-wider"
              >
                {submitted ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Connecting to WhatsApp...</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 fill-white" />
                    <span>Submit & Open WhatsApp Direct</span>
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
