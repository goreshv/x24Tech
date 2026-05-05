import React from 'react'
import { ArrowUpRight, Calendar, Users, TrendingUp, CheckCircle } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'

const projects = [
  {
    title: 'AI Customer Support Agent for FinTech SaaS',
    client: 'PayFlow Technologies',
    industry: 'FinTech',
    duration: '8 weeks',
    team: '4 engineers',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    problem: 'PayFlow was drowning in 15,000+ monthly support tickets. Their 12-person support team was overwhelmed, response times exceeded 24 hours, and customer satisfaction was dropping.',
    solution: 'We built a custom LLM-powered support agent trained on PayFlow\'s documentation, past tickets, and product knowledge base. The system handles complex multi-turn conversations, escalates intelligently to humans, and integrates with their existing Zendesk workflow.',
    tech: ['OpenAI GPT-4', 'LangChain', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'React'],
    results: [
      { metric: '73%', label: 'Reduction in ticket volume' },
      { metric: '<2min', label: 'Average response time' },
      { metric: '4.8/5', label: 'Customer satisfaction score' },
      { metric: '$420K', label: 'Annual cost savings' },
    ],
  },
  {
    title: 'Real-Time Data Pipeline for Analytics Startup',
    client: 'InsightIQ',
    industry: 'Data Analytics',
    duration: '12 weeks',
    team: '3 engineers',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    problem: 'InsightIQ needed to process 10M+ daily events from 200+ data sources in real-time. Their legacy batch processing system had 6-hour delays, causing stale dashboards and missed business opportunities.',
    solution: 'We architected a streaming data platform using Kafka and Spark Streaming. The pipeline ingests, transforms, and loads data into Snowflake within 30 seconds. We built a custom monitoring suite and auto-scaling infrastructure on AWS.',
    tech: ['Apache Kafka', 'Spark', 'Snowflake', 'dbt', 'Airflow', 'AWS', 'Grafana'],
    results: [
      { metric: '10M+', label: 'Events processed daily' },
      { metric: '<30s', label: 'Data latency' },
      { metric: '99.99%', label: 'Pipeline uptime' },
      { metric: '60%', label: 'Infrastructure cost reduction' },
    ],
  },
  {
    title: 'Enterprise Workflow Automation System',
    client: 'LogiChain Solutions',
    industry: 'Supply Chain',
    duration: '10 weeks',
    team: '3 engineers',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    problem: 'LogiChain\'s operations team spent 120+ hours monthly on manual data entry across 8 different systems—inventory updates, shipment tracking, invoice matching, and vendor communications.',
    solution: 'We implemented an end-to-end automation platform using UiPath and custom APIs. The system now automatically syncs data across SAP, Salesforce, and custom warehouse software. Exception handling routes edge cases to the right team member.',
    tech: ['UiPath', 'Automation Anywhere', 'Python', 'REST APIs', 'SQL Server', 'Power BI'],
    results: [
      { metric: '120hrs', label: 'Saved per month' },
      { metric: '99.5%', label: 'Processing accuracy' },
      { metric: '3x', label: 'Faster order fulfillment' },
      { metric: '$180K', label: 'Annual savings' },
    ],
  },
  {
    title: 'AI-Powered SaaS Platform for Legal Tech',
    client: 'LexiDocs',
    industry: 'Legal Tech',
    duration: '16 weeks',
    team: '5 engineers',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
    problem: 'LexiDocs wanted to launch an AI contract analysis tool but lacked the technical team to build a production-grade SaaS platform with multi-tenancy, enterprise security, and real-time collaboration.',
    solution: 'We delivered a full-stack SaaS application with React frontend, Node.js microservices, and AI document processing pipeline. Features include contract upload, clause extraction, risk scoring, and team collaboration with role-based access.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS ECS', 'Stripe'],
    results: [
      { metric: '3mo', label: 'Time to market' },
      { metric: '500+', label: 'Beta users onboarded' },
      { metric: '$50K', label: 'MRR within 2 months' },
      { metric: 'SOC 2', label: 'Compliance achieved' },
    ],
  },
]

export default function Projects() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-primary-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="section-padding max-w-7xl mx-auto relative text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-semibold uppercase tracking-wider mb-6">
            <TrendingUp className="w-4 h-4" />
            Case Studies
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Results That <span className="text-gradient">Speak for Themselves</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real projects. Real metrics. See how we've helped companies transform their operations with AI and automation.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 bg-white">
        <div className="section-padding max-w-7xl mx-auto space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-12">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative rounded-2xl overflow-hidden mb-6 group">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div>
                      <div className="text-white font-semibold">{project.client}</div>
                      <div className="text-gray-300 text-sm">{project.industry}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-accent" />
                    {project.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-accent" />
                    {project.team}
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">{project.title}</h2>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-red-500 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      The Challenge
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-500 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      Our Solution
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold mb-3">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-primary-50 text-primary-700 text-sm border border-primary-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {project.results.map((result, i) => (
                    <div key={i} className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-center">
                      <div className="text-2xl font-bold text-accent mb-1">{result.metric}</div>
                      <div className="text-xs text-gray-600">{result.label}</div>
                    </div>
                  ))}
                </div>

                <Button to="/contact" variant="outline">
                  Start a Similar Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-950 to-black text-center">
        <div className="section-padding max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-400 mb-8">
            Let's discuss how we can deliver similar results for your business.
          </p>
          <Button to="/contact" variant="primary" className="bg-accent text-dark-bg hover:bg-accent-light border-0">
            Book a Free Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}