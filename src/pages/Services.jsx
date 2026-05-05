import React from 'react'
import { Brain, Workflow, Database, Cloud, Check, ArrowRight, MessageSquare, Bot, LineChart, Server, Layers, Code, Cpu, Globe } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'

const services = [
  {
    id: 'ai',
    icon: Brain,
    title: 'AI Development',
    headline: 'Intelligent Systems That Think, Learn, and Deliver',
    description: 'We build production-ready AI systems that go beyond demos. From custom LLM deployments to computer vision pipelines, our AI solutions integrate seamlessly into your existing infrastructure and deliver measurable business outcomes.',
    useCases: [
      'Customer support chatbots with 95%+ resolution accuracy',
      'Document analysis and extraction systems',
      'Predictive maintenance for manufacturing',
      'Personalized recommendation engines',
      'Code generation and review assistants',
    ],
    benefits: [
      'Reduce operational costs by up to 70%',
      '24/7 availability with human-like interactions',
      'Scalable to millions of concurrent users',
      'Full data privacy and on-premise options',
    ],
    technologies: ['OpenAI GPT-4', 'Claude', 'LangChain', 'Llama 2', 'PyTorch', 'TensorFlow', 'Hugging Face'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  },
  {
    id: 'automation',
    icon: Workflow,
    title: 'Automation Solutions',
    headline: 'Eliminate Repetition. Amplify Productivity.',
    description: 'Our automation practice combines RPA, workflow orchestration, and AI decision-making to eliminate manual processes. We identify automation opportunities, build robust bots, and create self-healing workflows that adapt to your changing business needs.',
    useCases: [
      'Invoice processing and accounts payable automation',
      'HR onboarding and document verification',
      'IT ticket routing and resolution',
      'Sales lead qualification and nurturing',
      'Compliance reporting and audit trails',
    ],
    benefits: [
      'Save 100+ hours per month on manual tasks',
      '99.5% accuracy in data processing',
      'Integrate with 500+ enterprise tools',
      'Audit-ready compliance and logging',
    ],
    technologies: ['UiPath', 'Automation Anywhere', 'Zapier', 'Make', 'Apache Airflow', 'n8n', 'Selenium'],
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
  },
  {
    id: 'data',
    icon: Database,
    title: 'Data Engineering',
    headline: 'From Raw Data to Strategic Advantage',
    description: 'We architect data platforms that turn information into insight. Our data engineering team builds real-time pipelines, data lakes, and analytics warehouses that power decision-making across your organization.',
    useCases: [
      'Real-time analytics dashboards',
      'Customer 360 data platforms',
      'ETL pipeline modernization',
      'Data mesh architecture implementation',
      'ML feature stores and data versioning',
    ],
    benefits: [
      'Sub-second query performance at scale',
      'Data quality monitoring and auto-remediation',
      'GDPR and SOC-2 compliant pipelines',
      'Cost-optimized cloud storage strategies',
    ],
    technologies: ['Apache Kafka', 'Spark', 'dbt', 'Snowflake', 'BigQuery', 'Airflow', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    id: 'saas',
    icon: Cloud,
    title: 'SaaS Development',
    headline: 'Cloud-Native Applications Built to Scale',
    description: 'We design and build SaaS products from the ground up—handling everything from architecture to deployment. Our full-stack teams deliver secure, multi-tenant applications that your customers will love.',
    useCases: [
      'B2B SaaS platforms with multi-tenancy',
      'API-first product ecosystems',
      'White-label software solutions',
      'Mobile-first consumer applications',
      'Internal tools and admin dashboards',
    ],
    benefits: [
      'Microservices architecture for infinite scale',
      'CI/CD pipelines with automated testing',
      'Enterprise SSO and role-based access',
      '99.99% uptime with auto-scaling',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Go', 'AWS', 'Docker', 'Kubernetes'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
  },
]

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-primary-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="section-padding max-w-7xl mx-auto relative text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-semibold uppercase tracking-wider mb-6">
            <Cpu className="w-4 h-4" />
            Our Services
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            End-to-End <span className="text-gradient">Technology Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From AI strategy to production deployment, we provide the technical expertise and execution muscle to bring your vision to life.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 bg-white">
        <div className="section-padding max-w-7xl mx-auto space-y-32">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold uppercase tracking-wider mb-4">
                  <service.icon className="w-4 h-4" />
                  {service.title}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.headline}</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-accent" />
                      Use Cases
                    </h4>
                    <ul className="space-y-2">
                      {service.useCases.map((useCase, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <LineChart className="w-4 h-4 text-accent" />
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4 text-accent" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-gray-100 text-sm text-gray-700 border border-gray-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Button to="/contact" variant="primary">
                  Discuss Your Project
                </Button>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-950/40 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gray-50">
        <div className="section-padding max-w-7xl mx-auto">
          <SectionHeader 
            title="How We Work"
            subtitle="Our Process"
          />
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Deep-dive into your business, data, and technical constraints.', icon: Globe },
              { step: '02', title: 'Strategy', desc: 'Architecture design and roadmap with clear milestones.', icon: Layers },
              { step: '03', title: 'Development', desc: 'Agile sprints with weekly demos and continuous feedback.', icon: Code },
              { step: '04', title: 'Deployment', desc: 'Production launch with monitoring, docs, and team training.', icon: Server },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-gray-200 absolute -top-4 -left-2">{item.step}</div>
                <div className="relative pt-8">
                  <item.icon className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 right-0 w-full h-px bg-gradient-to-r from-accent/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}