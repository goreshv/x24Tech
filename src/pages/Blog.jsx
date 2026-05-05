import React from 'react'
import { Calendar, Clock, ArrowRight, User, Tag } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const posts = [
  {
    title: 'How AI is Transforming SaaS in 2026',
    excerpt: 'From autonomous agents to predictive user experiences, explore the AI trends reshaping software-as-a-service and what it means for product teams.',
    author: 'Arjun Sharma',
    date: 'Jan 15, 2026',
    readTime: '8 min read',
    category: 'AI Strategy',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    featured: true,
  },
  {
    title: 'Top Automation Tools for Startups in 2026',
    excerpt: 'A comprehensive comparison of the best RPA and workflow automation platforms for early-stage companies looking to do more with less.',
    author: 'Priya Nair',
    date: 'Jan 10, 2026',
    readTime: '6 min read',
    category: 'Automation',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
    featured: false,
  },
  {
    title: 'Building Scalable Data Pipelines: A Practical Guide',
    excerpt: 'Lessons from processing 10M+ events daily. Architecture patterns, tool selection, and common pitfalls to avoid in modern data engineering.',
    author: 'Vikram Patel',
    date: 'Jan 5, 2026',
    readTime: '12 min read',
    category: 'Data Engineering',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    featured: false,
  },
  {
    title: 'LLM Fine-Tuning vs. RAG: When to Use What',
    excerpt: 'A decision framework for choosing between fine-tuning large language models and retrieval-augmented generation for enterprise applications.',
    author: 'Priya Nair',
    date: 'Dec 28, 2025',
    readTime: '10 min read',
    category: 'AI Engineering',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
    featured: false,
  },
  {
    title: 'The True Cost of Technical Debt in AI Projects',
    excerpt: 'Why cutting corners in AI infrastructure leads to exponential costs later—and how to build systems that age gracefully.',
    author: 'Arjun Sharma',
    date: 'Dec 20, 2025',
    readTime: '7 min read',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80',
    featured: false,
  },
]

export default function Blog() {
  const featuredPost = posts.find(p => p.featured)
  const regularPosts = posts.filter(p => !p.featured)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-primary-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="section-padding max-w-7xl mx-auto relative text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-semibold uppercase tracking-wider mb-6">
            <Tag className="w-4 h-4" />
            Insights
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Engineering <span className="text-gradient">Insights</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Deep dives into AI, automation, data engineering, and SaaS architecture from the team building the future.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="section-padding max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 rounded-2xl overflow-hidden bg-gray-50 border border-gray-200">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold uppercase tracking-wider mb-4 w-fit">
                  Featured
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-accent transition-colors cursor-pointer">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <button className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <article key={index} className="group bg-white rounded-2xl overflow-hidden border border-gray-200 card-hover">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 text-xs font-semibold text-primary-600 backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-white">
        <div className="section-padding max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Ahead of the Curve</h2>
          <p className="text-gray-600 mb-8">
            Get weekly insights on AI, automation, and engineering delivered to your inbox. No spam, just signal.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-accent transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}