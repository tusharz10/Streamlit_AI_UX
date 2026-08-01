import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, CheckCircle2 } from 'lucide-react';
import Tilt3DCard from './3d/Tilt3DCard';

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
    <section className="section-padding theme-bg-primary theme-text-primary" id="contact">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="section-badge-master">
            <span>Corporate Contact</span>
          </div>
          <h2 className="section-title-master theme-text-primary">
            Start Your <span className="text-[var(--accent-lime)] bg-[var(--bg-secondary)] border theme-border px-2 py-0.5 rounded">Enterprise Engagement</span>
          </h2>
          <p className="section-subtitle-master theme-text-secondary">
            Connect directly with our engineering leadership to discuss software modernization, pipeline architecture, or Power BI reporting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Cards */}
          <div className="lg:col-span-5 space-y-6">
            <Tilt3DCard className="master-card p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl theme-bg-secondary border theme-border text-[var(--accent-lime)] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold theme-text-primary">Corporate Headquarters</h4>
                <p className="theme-text-secondary text-sm">BITA CLOUD INFO TECH Services</p>
              </div>
            </Tilt3DCard>

            <Tilt3DCard className="master-card p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl theme-bg-secondary border theme-border text-[var(--accent-lime)] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold theme-text-primary">Direct WhatsApp / Phone</h4>
                <a href="https://wa.me/918982296014" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-lime)] font-mono text-sm hover:underline font-bold">
                  +91 89822 96014
                </a>
              </div>
            </Tilt3DCard>

            <Tilt3DCard className="master-card p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl theme-bg-secondary border theme-border text-[var(--accent-lime)] flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold theme-text-primary">Email Consultation</h4>
                <a href="mailto:tushar.kashyap.bita@gmail.com" className="text-[var(--accent-lime)] font-mono text-sm hover:underline font-bold">
                  tushar.kashyap.bita@gmail.com
                </a>
              </div>
            </Tilt3DCard>
          </div>

          {/* Form */}
          <Tilt3DCard className="lg:col-span-7 master-card p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-mono theme-text-primary font-bold">Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[var(--bg-input)] border theme-border theme-text-primary rounded-md p-3 text-sm focus:border-[var(--accent-lime)] outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono theme-text-primary font-bold">Email Address *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="john@enterprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[var(--bg-input)] border theme-border theme-text-primary rounded-md p-3 text-sm focus:border-[var(--accent-lime)] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono theme-text-primary font-bold">Service Required</label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[var(--bg-input)] border theme-border theme-text-primary rounded-md p-3 text-sm focus:border-[var(--accent-lime)] outline-none transition-colors font-mono text-xs"
                >
                  <option value="Data Analytics & Power BI">Data Analytics & Power BI</option>
                  <option value="Azure Data Factory & Pipeline ETL">Azure Data Factory & Pipeline ETL</option>
                  <option value="Microsoft Fabric Lakehouse Integration">Microsoft Fabric Lakehouse Integration</option>
                  <option value="Cloud Infrastructure & Migration">Cloud Infrastructure & Migration</option>
                  <option value="Custom Software Development">Custom Software Development</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono theme-text-primary font-bold">Project Details / Message *</label>
                <textarea 
                  required 
                  rows={4}
                  placeholder="Tell us about your pipeline requirements or data goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[var(--bg-input)] border theme-border theme-text-primary rounded-md p-3 text-sm focus:border-[var(--accent-lime)] outline-none transition-colors"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="btn-whatsapp-master w-full justify-center py-4 text-xs font-bold uppercase tracking-widest"
              >
                {submitted ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Connecting to WhatsApp...</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Submit & Open WhatsApp Direct</span>
                  </span>
                )}
              </button>
            </form>
          </Tilt3DCard>
        </div>
      </div>
    </section>
  );
}
