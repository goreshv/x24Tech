import React from 'react'
import { Link } from 'react-router-dom'
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  Services: [
    { name: 'AI Development', path: '/services' },
    { name: 'Automation', path: '/services' },
    { name: 'Data Engineering', path: '/services' },
    { name: 'SaaS Development', path: '/services' },
  ],
  Company: [
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="section-padding max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">X24 Technologies</span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-sm leading-relaxed">
              Building AI-powered systems that scale businesses. We transform complex challenges into elegant, intelligent solutions.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-900">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-600 hover:text-accent transition-colors text-sm flex items-center gap-1 group">
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Mail className="w-4 h-4 text-accent" />
            support@x24tech.com
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Phone className="w-4 h-4 text-accent" />
            +91 70663 86938
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-accent" />
            Bangalore, India
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 X24 Technologies. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Designed with precision. Built for scale.
          </p>
        </div>
      </div>
    </footer>
  )
}