import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Brain, Workflow, Database, Cloud, ChevronRight, Quote, Sparkles, TrendingUp, Clock, Users, Landmark, ShoppingCart, HeartPulse, GraduationCap, Factory, Truck, Plus, Minus, CalendarDays, BookOpen, ArrowUpRight } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'

const services = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Custom LLM development, computer vision systems, predictive analytics, and intelligent automation agents tailored to your industry.',
    link: '/services',
  },
  {
    icon: Workflow,
    title: 'Business Process Automation',
    description: 'End-to-end RPA implementation, workflow optimization, and intelligent document processing that reduces manual effort by 80%+.',
    link: '/services',
  },
  {
    icon: Database,
    title: 'Data Engineering & Analytics',
    description: 'Real-time data pipelines, data lake architecture, BI dashboards, and advanced analytics platforms for data-driven decisions.',
    link: '/services',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps Solutions',
    description: 'Cloud migration, microservices architecture, CI/CD pipelines, and infrastructure as code for scalable, reliable systems.',
    link: '/services',
  },
  {
    icon: TrendingUp,
    title: 'Digital Transformation',
    description: 'Legacy system modernization, API integration, and digital platform development to accelerate your digital journey.',
    link: '/services',
  },
  {
    icon: Users,
    title: 'Mobile & Web Applications',
    description: 'Responsive web apps, native mobile development, PWA solutions, and progressive enhancement for optimal user experience.',
    link: '/services',
  },
  {
    icon: Clock,
    title: 'IT Consulting & Strategy',
    description: 'Technology roadmap planning, architecture reviews, team augmentation, and strategic guidance for technology investments.',
    link: '/services',
  },
  {
    icon: ArrowRight,
    title: 'API Development & Integration',
    description: 'RESTful APIs, GraphQL services, third-party integrations, and seamless connectivity between your systems and partners.',
    link: '/services',
  },
]

const clients = [
  'TechFlow', 'DataPrime', 'CloudNine', 'NextGen AI', 'ScaleUp', 'InnovateLabs'
]

const caseStudies = [
  {
    title: 'Conversational AI Support Platform for FinTech SaaS',
    category: 'AI Development',
    metric: '73%',
    metricLabel: 'Reduction in L1 Support Volume',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  },
  {
    title: 'Real-Time Event Analytics Infrastructure',
    category: 'Data Engineering',
    metric: '10M+',
    metricLabel: 'Events Processed Per Day',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    title: 'Enterprise Intelligent Workflow Automation',
    category: 'Automation',
    metric: '120 hrs',
    metricLabel: 'Operational Hours Recovered Monthly',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
]

const testimonials = [
  {
    quote: "X24 Technologies delivered an AI support agent that genuinely understands customer context and intent. Within 30 days of go-live, our L1 ticket volume dropped by over 70%. The engineering quality and post-deployment support were exceptional.",
    author: "Sarah Chen",
    role: "CTO, TechFlow Inc.",
    avatar: "SC"
  },
  {
    quote: "The data engineering team architected a pipeline that ingests and processes millions of events daily at 99.99% uptime. They didn't just build what we asked for — they challenged our assumptions and delivered something far superior.",
    author: "Rahul Mehta",
    role: "VP Engineering, DataPrime",
    avatar: "RM"
  },
  {
    quote: "X24 automated our entire reporting and approval workflow end-to-end. We recovered over 100 hours of manual effort per month, and the ROI was measurable within the first billing cycle. Truly outcome-driven partners.",
    author: "Emily Rodriguez",
    role: "Director of Operations, CloudNine",
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
  { name: 'C# .NET', category: 'Backend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Data' },
  { name: 'SQL Server', category: 'Data' },
  { name: 'Apache Kafka', category: 'Data' },
  { name: 'Databricks', category: 'Data' },
  { name: 'Snowflake', category: 'Data' },
  { name: 'Azure', category: 'Cloud' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Azure Synapse Analytics', category: 'Cloud' },
  { name: 'Microsoft Fabric', category: 'Cloud' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Kubernetes', category: 'DevOps' },
]

const industries = [
  {
    icon: Landmark,
    name: 'Financial Services & FinTech',
    description: 'Fraud detection pipelines, automated compliance workflows, AI-powered advisory tools, and core banking integrations built to meet stringent regulatory standards.',
    tags: ['Risk Analytics', 'RegTech', 'Payment Systems'],
  },
  {
    icon: HeartPulse,
    name: 'Healthcare & Life Sciences',
    description: 'HIPAA-compliant data platforms, clinical NLP models, patient triage automation, and interoperability solutions across EHR and lab systems.',
    tags: ['HL7/FHIR', 'Clinical AI', 'Telehealth'],
  },
  {
    icon: ShoppingCart,
    name: 'E-Commerce & Retail',
    description: 'Personalisation engines, demand forecasting models, real-time inventory intelligence, and omnichannel data infrastructure that drives conversion and retention.',
    tags: ['Recommendation AI', 'Supply Chain', 'Analytics'],
  },
  {
    icon: GraduationCap,
    name: 'EdTech & Learning Platforms',
    description: 'Adaptive learning systems, AI tutoring agents, learner analytics dashboards, and LMS integrations that improve engagement and learning outcomes at scale.',
    tags: ['Adaptive Learning', 'LMS', 'Content AI'],
  },
  {
    icon: Factory,
    name: 'Manufacturing & Industry 4.0',
    description: 'Predictive maintenance systems, IoT data pipelines, quality inspection vision models, and shop-floor automation solutions that reduce downtime and defect rates.',
    tags: ['Predictive Maintenance', 'IoT', 'Computer Vision'],
  },
  {
    icon: Truck,
    name: 'Logistics & Supply Chain',
    description: 'Route optimisation engines, real-time shipment tracking platforms, warehouse automation systems, and end-to-end supply chain visibility dashboards.',
    tags: ['Route Optimisation', 'WMS', 'Tracking'],
  },
]

const faqs = [
  {
    question: 'What types of organisations does X24 Technologies typically work with?',
    answer: 'We partner with growth-stage startups scaling their engineering capacity, mid-market companies modernising legacy infrastructure, and enterprise teams building net-new AI or data products. Our engagements typically begin at $20K and scale to multi-year retainers for larger programmes.',
  },
  {
    question: 'How does your engagement model work — fixed price or time & materials?',
    answer: 'We offer both. Clearly scoped projects (MVP builds, specific integrations, defined automations) are priced as fixed-scope engagements with milestone-based payments. Ongoing product development, AI research, and evolving programmes are structured as monthly retainers with a dedicated team pod.',
  },
  {
    question: 'Do you work with our existing in-house engineering team or replace them?',
    answer: 'We augment, never replace. Most of our clients have internal engineers. We embed as a specialist extension — owning specific workstreams like AI development, data infrastructure, or cloud architecture — while maintaining clean handoff documentation so your team retains full ownership.',
  },
  {
    question: 'How do you handle IP, source code ownership, and confidentiality?',
    answer: 'All intellectual property, source code, models, and documentation produced during an engagement are fully transferred to the client upon project completion. We sign mutual NDAs at project initiation and operate under strict data handling policies aligned with GDPR and SOC 2 principles.',
  },
  {
    question: 'What does your post-deployment support look like?',
    answer: 'Every project includes a 30-day hypercare period post go-live at no additional cost. Beyond that, we offer structured SLA-backed support retainers covering bug fixes, performance monitoring, model retraining, and feature iterations — scoped to your operational needs.',
  },
  {
    question: 'How long does a typical AI or software project take to deliver?',
    answer: 'Timelines depend on scope, but as a benchmark: AI proof-of-concept builds run 4–6 weeks; production-ready automation solutions 6–10 weeks; full-scale SaaS platforms or data infrastructure programmes 3–6 months. We provide a detailed delivery roadmap during the architecture phase.',
  },
]

const blogPosts = [
  {
    category: 'AI Engineering',
    title: 'Beyond ChatGPT Wrappers: What Production-Grade LLM Applications Actually Require',
    excerpt: 'Most AI demos look impressive. Most AI products fail in production. We break down the architectural decisions — evaluation frameworks, retrieval pipelines, guardrails, and observability — that separate prototypes from reliable systems.',
    date: 'April 28, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    slug: '/blog/production-llm-architecture',
  },
  {
    category: 'Data Engineering',
    title: 'Why Most Data Pipelines Break at Scale — and How to Design Them So They Don\'t',
    excerpt: 'Ingesting 10K events per day is easy. Ingesting 10M with sub-second latency, schema evolution, and zero data loss is engineering. We cover the patterns, tooling, and trade-offs that separate toy pipelines from enterprise-grade infrastructure.',
    date: 'April 14, 2025',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    slug: '/blog/scalable-data-pipelines',
  },
  {
    category: 'Automation',
    title: 'The ROI Framework We Use to Justify Every Automation Investment to the C-Suite',
    excerpt: 'Automation without a clear business case gets killed in budget reviews. Here\'s the exact model we use with clients — mapping process costs, error rates, and cycle times to projected savings — so the numbers speak for themselves.',
    date: 'March 31, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    slug: '/blog/automation-roi-framework',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-glow">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent/20 overflow-hidden">
          {/* Floating Elements */}
          <div className="absolute inset-0">
            {/* Floating Cards */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg animate-float-slow" />
            <div className="absolute top-20 right-20 w-16 h-16 bg-accent/10 backdrop-blur-sm rounded-lg shadow-lg animate-float-slow animate-delay-1000" />
            <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-primary-400/10 backdrop-blur-sm rounded-lg shadow-lg animate-float-slow animate-delay-2000" />
            <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-purple-400/10 backdrop-blur-sm rounded-lg shadow-lg animate-float-slow animate-delay-3000" />
            
            {/* Floating Dots */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-accent/30 rounded-full animate-float-up"
                style={{
                  left: `${10 + i * 12}%`,
                  top: `${20 + (i % 3) * 20}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
            
            {/* Geometric Shapes */}
            <div className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-accent/20 rotate-45 animate-float-slow animate-delay-1500" />
            <div className="absolute bottom-1/3 right-1/4 w-6 h-6 border-2 border-primary-400/20 rotate-12 animate-float-slow animate-delay-2500" />
            <div className="absolute top-1/2 right-1/3 w-10 h-10 border-2 border-purple-400/20 animate-float-slow animate-delay-3500" />
            
            {/* Subtle Grid Lines */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-slide-right" />
              <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-400/20 to-transparent animate-slide-right animate-delay-500" />
              <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-slide-right animate-delay-1000" />
              <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-slide-right animate-delay-1500" />
            </div>
          </div>
        </div>
        
        <div className="relative px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center animate-slide-up text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/80 border border-white/20 text-accent text-xs md:text-sm font-medium mb-4 md:mb-6 backdrop-blur-sm">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                Trusted by 50+ Enterprise Clients Across 12 Industries
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-gray-900 leading-tight mb-4 md:mb-6">
                <span className="inline-block">
                  <span className="typewriter" style={{color: '#1f2937'}}>We Build</span>{' '}
                  <span className="text-gradient">AI That Works</span>{' '}
                  <span className="typewriter" style={{color: '#1f2937'}}>& Drives Results</span>
                </span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mb-6 md:mb-10 leading-relaxed">
                Enterprise AI & automation solutions that scale your business, reduce costs, and accelerate growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-8 md:mb-12">
                <Button to="/contact" variant="primary" className="bg-accent text-gray-900 hover:bg-accent-light border-0 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto">
                  Schedule a Discovery Call
                </Button>
                <Button to="/projects" variant="outline" className="border-gray-200 text-gray-900 hover:bg-gray-100 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto">
                  Explore Case Studies
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full max-w-lg md:max-w-none">
                <div className="text-center">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1">Enterprise Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">$10M+</div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1">Documented Client Revenue Impact</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">99.9%</div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1">Uptime SLA Maintained</div>
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
            title="Full-Stack Engineering Capabilities, One Accountable Partner"
            subtitle="Our Services"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
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
                  Explore service <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
            Trusted by engineering and product teams at leading organizations
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

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-primary-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary-400/10 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="section-padding max-w-7xl mx-auto relative">
          <SectionHeader 
            title="Hear From the Teams We've Partnered With"
            subtitle="Client Testimonials"
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
                  All testimonials sourced from verified client engagements
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
            title="Battle-Tested Technologies. Production-Ready at Scale."
            subtitle="Our Technology Stack"
          />
          <p className="text-center text-gray-500 text-sm max-w-xl mx-auto mb-10">
            We work exclusively with industry-standard, enterprise-proven technologies — no experimental dependencies, no vendor lock-in.
          </p>
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
            title="A Structured Engagement Model Built for Predictability"
            subtitle="How We Work"
          />
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Discovery & Assessment</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We conduct a structured technical and business discovery to define scope, identify risk, and establish clear success metrics before a single line of code is written.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Solution Architecture</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our senior architects deliver a detailed technical blueprint — stack selection, system design, integration plan, and phased delivery roadmap aligned to your timeline and budget.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Agile Development</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We execute in iterative sprints with regular demos, transparent reporting, and continuous QA — so you maintain full visibility and control throughout the build.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Deployment & Enablement</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We manage production deployment, handover documentation, team training, and ongoing SLA-backed support to ensure long-term operational success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-white">
        <div className="section-padding max-w-7xl mx-auto">
          <SectionHeader 
            title="What Sets X24 Technologies Apart"
            subtitle="Our Differentiators"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Brain className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Deep AI Specialization</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    From fine-tuned LLMs to production-grade computer vision systems, our AI engineers bring hands-on expertise across the full spectrum of machine learning disciplines.
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
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Cloud-First Architecture</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We design for resilience, scalability, and cost efficiency on AWS, Azure, and GCP — following security best practices and modern DevSecOps principles from day one.
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
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Outcome-Driven Automation</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We don't automate for automation's sake. Every workflow solution is mapped to a quantifiable business outcome — cost reduction, cycle time, or error elimination.
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
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Enterprise Data Engineering</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We build fault-tolerant data pipelines, governance-ready infrastructure, and real-time analytics systems that serve as the foundation for AI and BI initiatives.
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
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Performance at Scale</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our systems are load-tested, profiled, and optimized before go-live. We engineer for peak performance under real-world conditions, not just ideal scenarios.
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
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Dedicated Client Partnership</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Every engagement includes a dedicated project lead, structured knowledge transfer, and post-deployment support — ensuring your team owns and operates the solution confidently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent/10 to-transparent rounded-full blur-3xl" />
        <div className="section-padding max-w-7xl mx-auto relative">
          <SectionHeader
            title="Vertical Expertise Across High-Growth Industries"
            subtitle="Industries We Serve"
          />
          <p className="text-center text-gray-500 text-sm max-w-2xl mx-auto mb-12">
            We don't apply generic solutions to complex domains. Our teams carry hands-on experience in the regulatory, data, and operational realities of the industries we serve.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/60 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-accent transition-colors">{industry.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{industry.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.tags.map((tag, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-accent/20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary-400/10 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="section-padding max-w-7xl mx-auto relative">
          <SectionHeader 
            title="Transparent Pricing. No Hidden Fees."
            subtitle="Investment Plans"
          />
          <p className="text-center text-gray-500 text-sm max-w-xl mx-auto mb-12">
            Enterprise-grade AI and automation solutions with flexible pricing models designed for US businesses. All plans include dedicated support and regular updates.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* AI Development Plans */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-900 text-blue-200 text-xs font-semibold">AI Focus</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">AI Development</h3>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gray-900">$6,000</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Custom AI solutions with LLM integration</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                    </div>
                    <span className="text-sm text-gray-700">Custom LLM fine-tuning & deployment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                    </div>
                    <span className="text-sm text-gray-700">AI-powered chatbots & virtual assistants</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                    </div>
                    <span className="text-sm text-gray-700">Computer vision & ML pipelines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                    </div>
                    <span className="text-sm text-gray-700">API integration & data processing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                    </div>
                    <span className="text-sm text-gray-700">Model training & optimization</span>
                  </li>
                </ul>
                <Button to="/contact" variant="outline" className="w-full">Get Started</Button>
              </div>
            </div>

            {/* Automation Plans */}
            <div className="relative group scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary-500/20 rounded-2xl opacity-100" />
              <div className="relative bg-gradient-to-br from-accent/10 to-primary-500/10 border-2 border-accent/30 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary-500 flex items-center justify-center">
                    <Workflow className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-accent/90 text-gray-900 text-xs font-semibold">Popular</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Business Automation</h3>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gray-900">$4,000</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">End-to-end workflow automation & RPA</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <span className="text-sm text-gray-700">Robotic Process Automation (RPA)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <span className="text-sm text-gray-700">Workflow automation & optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <span className="text-sm text-gray-700">Integration with existing systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <span className="text-sm text-gray-700">Process mapping & documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <span className="text-sm text-gray-700">Performance monitoring & reporting</span>
                  </li>
                </ul>
                <Button to="/contact" variant="primary" className="w-full bg-accent text-gray-900 hover:bg-accent-light border-0">Get Started</Button>
              </div>
            </div>

            {/* Enterprise Plans */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Cloud className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold">Enterprise</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Full-Stack Development</h3>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gray-900">$7,500</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Complete SaaS & web applications</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                    </div>
                    <span className="text-sm text-gray-700">Custom SaaS application development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                    </div>
                    <span className="text-sm text-gray-700">Cloud architecture & deployment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                    </div>
                    <span className="text-sm text-gray-700">Database design & optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                    </div>
                    <span className="text-sm text-gray-700">DevOps & CI/CD pipeline setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                    </div>
                    <span className="text-sm text-gray-700">24/7 monitoring & support</span>
                  </li>
                </ul>
                <Button to="/contact" variant="outline" className="w-full">Get Started</Button>
              </div>
            </div>
          </div>

          {/* Additional Pricing Info */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Project-Based Pricing</h4>
                <p className="text-sm text-gray-600">Fixed-price projects available starting at $12,500 for AI solutions and $7,500 for automation projects.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-800 to-blue-900 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-blue-200" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Dedicated Teams</h4>
                <p className="text-sm text-gray-600">Full-time dedicated teams starting at $9,000/month for AI specialists and $6,000/month for automation engineers.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Consulting Services</h4>
                <p className="text-sm text-gray-600">Strategic consulting at $125/hour for AI strategy and $90/hour for automation process optimization.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="section-padding max-w-4xl mx-auto">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Before You Reach Out"
          />
          <p className="text-center text-gray-500 text-sm max-w-xl mx-auto mb-12">
            Answers to the questions we hear most often from engineering leaders, founders, and procurement teams evaluating X24 Technologies.
          </p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm mb-4">Don't see your question here?</p>
            <Button to="/contact" variant="primary" className="bg-accent text-gray-900 hover:bg-accent-light border-0">
              Ask Us Directly
            </Button>
          </div>
        </div>
      </section>

      {/* Blog / Insights Preview */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-primary-50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl" />
        <div className="section-padding max-w-7xl mx-auto relative">
          <SectionHeader
            title="Engineering Insights From Our Team"
            subtitle="Latest Articles"
          />
          <p className="text-center text-gray-500 text-sm max-w-xl mx-auto mb-12">
            Practical, opinionated writing on AI systems, data engineering, and software architecture — from engineers who build these things in production.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link key={index} to={post.slug} className="group block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent/90 text-gray-900 text-xs font-semibold backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1"><CalendarDays className="w-3 h-3" />{post.date}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 leading-snug mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-1 text-sm font-medium text-primary-600 group-hover:gap-2 transition-all">
                    Read article <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button to="/blog" variant="outline">View All Articles</Button>
          </div>
        </div>
      </section>

    </div>
  )
}

function FAQItem({ faq }) {
  const [open, setOpen] = React.useState(false)
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${open ? 'border-accent/40 shadow-md shadow-accent/10' : 'border-gray-200 shadow-sm'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className={`text-sm font-semibold leading-snug transition-colors ${open ? 'text-accent' : 'text-gray-900'}`}>
          {faq.question}
        </span>
        <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${open ? 'bg-accent text-gray-900 rotate-180' : 'bg-gray-100 text-gray-600'}`}>
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-64' : 'max-h-0'}`}>
        <div className="px-6 pb-5 pt-1 bg-white border-t border-gray-100">
          <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  )
}