import React from 'react'
import { Target, Rocket, Shield, Zap, Users, Award, Clock, Heart } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const values = [
  {
    icon: Rocket,
    title: 'Innovation First',
    description: 'We don\'t follow trends—we set them. Every solution pushes the boundary of what\'s technically possible.',
  },
  {
    icon: Clock,
    title: 'Speed to Value',
    description: 'Rapid prototyping and agile delivery mean you see ROI in weeks, not quarters.',
  },
  {
    icon: Shield,
    title: 'Reliable Delivery',
    description: 'Enterprise-grade reliability with 99.9% uptime SLAs and rigorous testing protocols.',
  },
  {
    icon: Heart,
    title: 'Client Partnership',
    description: 'We embed ourselves in your team. Your success metrics are our success metrics.',
  },
]

const team = [
  {
    name: 'Arjun Sharma',
    role: 'Founder & CEO',
    bio: 'Former Principal Engineer at Google. 15+ years building AI systems at scale.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Priya Nair',
    role: 'Head of AI Engineering',
    bio: 'PhD in Machine Learning from IIT Bombay. Led LLM research teams at Meta.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  },
  {
    name: 'Vikram Patel',
    role: 'Lead Data Engineer',
    bio: 'Built petabyte-scale pipelines for Fortune 500 companies. Kafka and Spark expert.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    name: 'Ananya Reddy',
    role: 'Senior Full-Stack Developer',
    bio: 'React and Node.js specialist. Architected SaaS platforms serving 1M+ users.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  },
]

const differentiators = [
  'Deep AI expertise with production-grade LLM deployments',
  'End-to-end ownership from strategy to deployment',
  'India-based team with global delivery standards',
  'Fixed-price and dedicated team engagement models',
  '24/7 support with dedicated account managers',
  'IP protection and enterprise security compliance',
]

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-primary-950 to-black relative overflow-hidden">
                <div className="section-padding max-w-7xl mx-auto relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-semibold uppercase tracking-wider mb-6">
              <Users className="w-4 h-4" />
              About Us
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Engineering the Future of <span className="text-gradient">Intelligent Business</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Founded in 2020, X24 Technologies began with a simple belief: every business deserves access to world-class AI and automation. Today, we're a team of 40+ engineers, data scientists, and product strategists helping companies across the globe turn data into decisions and code into competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 rounded-2xl bg-primary-50 border border-primary-100">
              <Target className="w-10 h-10 text-primary-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To democratize enterprise AI by building systems that are powerful yet practical. We bridge the gap between cutting-edge research and real-world business impact—delivering solutions that work on day one and scale on day one thousand.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <Zap className="w-10 h-10 text-primary-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A world where every business, regardless of size, operates with the intelligence and efficiency of a tech giant. We're building the infrastructure that makes autonomous, AI-driven enterprises the standard—not the exception.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader 
                title="Why Teams Choose X24"
                subtitle="Differentiators"
                centered={false}
              />
              <ul className="space-y-4">
                {differentiators.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Award className="w-3 h-3 text-primary-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white border border-gray-200 text-center">
                <div className="text-3xl font-bold text-accent mb-1">40+</div>
                <div className="text-sm text-gray-600">Engineers</div>
              </div>
              <div className="p-6 rounded-2xl bg-white  border border-gray-200  text-center mt-8">
                <div className="text-3xl font-bold text-accent mb-1">50+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-gray-200 text-center">
                <div className="text-3xl font-bold text-accent mb-1">4</div>
                <div className="text-sm text-gray-600">Continents</div>
              </div>
              <div className="p-6 rounded-2xl bg-white  border border-gray-200  text-center mt-8">
                <div className="text-3xl font-bold text-accent mb-1">98%</div>
                <div className="text-sm text-gray-600">Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="section-padding max-w-7xl mx-auto">
          <SectionHeader 
            title="The Principles That Drive Us"
            subtitle="Our Values"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 card-hover">
                <value.icon className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}