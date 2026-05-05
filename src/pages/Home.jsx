import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Brain, Workflow, Database, Cloud, ChevronRight, Quote, Sparkles, TrendingUp, Clock, Users } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'

const services = [
  {
    icon: Brain,
    title: 'AI Development',
    description: 'Custom LLMs, intelligent chatbots, and machine learning models tailored to your business logic.',
    link: '/services',
  },
  {
    icon: Workflow,
    title: 'Automation Solutions',
    description: 'End-to-end workflow automation and RPA that eliminates repetitive tasks and reduces operational costs.',
    link: '/services',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Scalable data pipelines, ETL processes, and real-time analytics infrastructure.',
    link: '/services',
  },
  {
    icon: Cloud,
    title: 'SaaS Development',
    description: 'Full-stack cloud-native applications built for performance, security, and rapid scaling.',
    link: '/services',
  },
]

const clients = [
  'TechFlow', 'DataPrime', 'CloudNine', 'NextGen AI', 'ScaleUp', 'InnovateLabs'
]

const caseStudies = [
  {
    title: 'AI Support Agent for FinTech SaaS',
    category: 'AI Development',
    metric: '73%',
    metricLabel: 'Reduction in Support Tickets',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  },
  {
    title: 'Real-Time Analytics Pipeline',
    category: 'Data Engineering',
    metric: '10M+',
    metricLabel: 'Events Processed Daily',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    title: 'Enterprise Workflow Automation',
    category: 'Automation',
    metric: '120hrs',
    metricLabel: 'Saved Per Month',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
]

const testimonials = [
  {
    quote: "X24 Technologies transformed our customer support with an AI agent that actually understands context. Our ticket volume dropped by 70% in the first month.",
    author: "Sarah Chen",
    role: "CTO, TechFlow Inc.",
    avatar: "SC"
  },
  {
    quote: "Their data engineering team built us a pipeline that processes millions of events daily with 99.99% uptime. Truly world-class engineering.",
    author: "Rahul Mehta",
    role: "VP Engineering, DataPrime",
    avatar: "RM"
  },
  {
    quote: "We saved over 100 hours per month on manual reporting after X24 automated our entire workflow. ROI was visible within weeks.",
    author: "Emily Rodriguez",
    role: "Operations Director, CloudNine",
    avatar: "ER"
  },
]

const techStack = [
  { name: 'Python', category: 'AI/ML' },
  { name: 'TensorFlow', category: 'AI/ML' },
  { name: 'PyTorch', category: 'AI/ML' },
  { name: 'OpenAI API', category: 'AI/ML' },
  { name: 'LangChain', category: 'AI/ML' },
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Data' },
  { name: 'Apache Kafka', category: 'Data' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Kubernetes', category: 'DevOps' },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-glow">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent/20">
          {/* Floating Orbs */}
          <div className="floating-orb top-20 left-10 w-72 h-72 bg-gradient-to-r from-accent/30 to-primary-400/30 animate-delay-100" />
          <div className="floating-orb bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-primary-400/30 to-accent/30 animate-delay-500" />
          <div className="floating-orb top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 animate-delay-700" />
          <div className="floating-orb bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 animate-delay-300" />
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dots.png')] opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10" />
        </div>
        
        <div className="relative px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-2 flex flex-col items-center justify-center animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-white/20 text-accent text-sm font-medium mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                Trusted by 50+ Enterprise Clients
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6 text-center">
                <span className="inline-block">
                  <span className="typewriter" style={{color: '#1f2937'}}>We Build</span>{' '}
                  <span className="text-gradient">AI-Powered Systems</span>{' '}
                  <span className="typewriter" style={{color: '#1f2937'}}>That Scale Your Business</span>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-none leading-relaxed text-center">
                <span className="typewriter" style={{color: '#4b5563'}}>From intelligent automation to enterprise-grade SaaS, we engineer technology that drives measurable revenue growth and operational excellence.</span>
              </p>
              <div className="flex flex-wrap gap-6 justify-center">
                <Button to="/contact" variant="primary" className="bg-accent text-gray-900 hover:bg-accent-light border-0 text-lg px-8 py-4">
                  Book a Call
                </Button>
                <Button to="/projects" variant="outline" className="border-gray-200 text-gray-900 hover:bg-gray-100 text-lg px-8 py-4">
                  View Our Work
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600 mt-1">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">$10M+</div>
                  <div className="text-sm text-gray-600 mt-1">Client Revenue Impact</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">99.9%</div>
                  <div className="text-sm text-gray-600 mt-1">Uptime Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/waves.png')] opacity-3" />
        <div className="section-padding max-w-7xl mx-auto relative">
          <SectionHeader 
            title="Engineering Excellence Across Every Layer"
            subtitle="Our Services"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link 
                key={index} 
                to={service.link}
                className={`group p-6 rounded-2xl glass-morphism card-hover shimmer animate-delay-${index * 100}`}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-accent/30">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-sm font-medium text-primary-600 group-hover:gap-2 transition-all">
                  Learn more <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="section-padding max-w-7xl mx-auto text-center">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
            Trusted by innovative teams worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {clients.map((client, index) => (
              <div key={index} className="text-xl md:text-2xl font-bold text-gray-400 hover:text-primary-600 transition-colors cursor-default">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="section-padding max-w-7xl mx-auto">
          <SectionHeader 
            title="Real Results, Real Impact"
            subtitle="Case Studies"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Link key={index} to="/projects" className="group block">
                <div className="relative rounded-2xl overflow-hidden mb-4">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold backdrop-blur-sm">
                      {study.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">{study.title}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-primary-600">{study.metric}</span>
                  <span className="text-sm text-gray-600">{study.metricLabel}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button to="/projects" variant="outline">View All Projects</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-primary-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary-400/10 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="section-padding max-w-7xl mx-auto relative">
          <SectionHeader 
            title="What Our Clients Say"
            subtitle="Testimonials"
          />
          
          <div className="relative">
            {/* Testimonial Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`relative group animate-slide-up animate-delay-${index * 200}`}
                >
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Main Card */}
                  <div className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    {/* Quote Icon */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-primary-500 to-accent rounded-full flex items-center justify-center">
                      <Quote className="w-4 h-4 text-white" />
                    </div>
                    
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-sm" />
                      ))}
                    </div>
                    
                    {/* Testimonial Text */}
                    <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                      "{testimonial.quote}"
                    </p>
                    
                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {testimonial.avatar}
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bottom Decorative Element */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-100 to-accent/20 border border-primary-200">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-primary-700">
                  All testimonials are from verified clients
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-white">
        <div className="section-padding max-w-7xl mx-auto">
          <SectionHeader 
            title="Modern Stack, Proven Performance"
            subtitle="Technology"
          />
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <div 
                key={index} 
                className="group px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all cursor-default"
              >
                <div className="text-xs text-gray-500 mb-1">{tech.category}</div>
                <div className="font-semibold text-gray-900 group-hover:text-accent transition-colors">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-3" />
        <div className="section-padding max-w-7xl mx-auto relative">
          <SectionHeader 
            title="Our Proven Process"
            subtitle="How We Work"
          />
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Discovery</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We dive deep into your business challenges and objectives to understand your unique requirements.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Strategy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our experts craft a tailored roadmap with cutting-edge solutions aligned to your business goals.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Development</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We build robust, scalable solutions using agile methodologies and best-in-class technologies.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Deployment</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We ensure seamless integration and provide ongoing support to maximize your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-white">
        <div className="section-padding max-w-7xl mx-auto">
          <SectionHeader 
            title="Why Choose X24 Technologies"
            subtitle="Our Expertise"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Brain className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">AI Expertise</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Deep expertise in machine learning, natural language processing, and computer vision with proven implementations.
                  </p>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Cloud className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Cloud Native</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Building scalable, resilient applications on AWS, Azure, and Google Cloud with modern DevOps practices.
                  </p>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Workflow className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Automation</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Streamlining business processes with intelligent automation and workflow optimization solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Database className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Data Engineering</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Building robust data pipelines and analytics infrastructure for real-time insights and decision-making.
                  </p>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Performance</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Optimizing applications for maximum performance, scalability, and user experience across all platforms.
                  </p>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Team Support</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Dedicated support and training to ensure your team maximizes the value of our solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  )}