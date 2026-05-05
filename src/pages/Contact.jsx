import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Linkedin, Twitter, MessageSquare } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-primary-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="section-padding max-w-7xl mx-auto relative text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-semibold uppercase tracking-wider mb-6">
            <MessageSquare className="w-4 h-4" />
            Get in Touch
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's Build Something <span className="text-gradient">Smart</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? Want to explore how AI can transform your business? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Start the Conversation</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Whether you're looking to build an AI product, automate operations, or scale your data infrastructure, our team is ready to help you architect the right solution.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email Us</div>
                    <a href="mailto:hello@x24technologies.com" className="text-gray-600 hover:text-accent transition-colors">
                      hello@x24technologies.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Call Us</div>
                    <a href="tel:+919876543210" className="text-gray-600 hover:text-accent transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Visit Us</div>
                    <p className="text-gray-600">
                      42, Innovation Hub<br />
                      Koramangala, Bangalore<br />
                      Karnataka, India 560034
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Working Hours</div>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 7:00 PM IST<br />
                      Saturday: 10:00 AM - 2:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <div className="font-semibold mb-4">Follow Us</div>
                <div className="flex gap-4">
                  {[Linkedin, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200">
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-gray-600">
                      Thanks for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:border-accent transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:border-accent transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-bg border border-gray-200 dark:border-dark-border focus:outline-none focus:border-accent transition-colors"
                        placeholder="Acme Inc."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Project Details *</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:border-accent transition-colors resize-none"
                        placeholder="Tell us about your project, goals, and timeline..."
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center">
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      We respect your privacy. Your information will never be shared with third parties.
                    </p>
                  </form>
                )}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 rounded-2xl overflow-hidden h-64 bg-gray-200 border border-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-900 to-primary-950">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-accent mx-auto mb-2" />
                    <p className="text-white font-semibold">X24 Technologies</p>
                    <p className="text-gray-400 text-sm">Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Booking CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-950 to-black text-center">
        <div className="section-padding max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prefer to Talk Directly?
          </h2>
          <p className="text-gray-400 mb-8">
            Book a 30-minute discovery call with our team. We'll discuss your challenges and outline a roadmap—no commitment required.
          </p>
          <button className="btn-primary bg-accent text-dark-bg hover:bg-accent-light border-0 text-lg px-8 py-4">
            Schedule a Call
          </button>
        </div>
      </section>
    </div>
  )
}