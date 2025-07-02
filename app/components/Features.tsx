"use client"

import { Brain, Target, TrendingUp, Lightbulb, BarChart3, Users } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Strategic Insights",
    description: "Get personalized growth strategies based on your business context",
    color: "text-coral",
  },
  {
    icon: Target,
    title: "Pivot Suggestions",
    description: "Discover new opportunities and strategic pivots for growth",
    color: "text-peach",
  },
  {
    icon: TrendingUp,
    title: "Decision Frameworks",
    description: "Make informed decisions with AI-powered frameworks",
    color: "text-mint",
  },
  {
    icon: Lightbulb,
    title: "Innovation Insights",
    description: "Unlock creative solutions for business challenges",
    color: "text-coral",
  },
  {
    icon: BarChart3,
    title: "Growth Analytics",
    description: "Track and measure your business growth metrics",
    color: "text-peach",
  },
  {
    icon: Users,
    title: "Market Analysis",
    description: "Understand your market and competitive landscape",
    color: "text-mint",
  },
]

export default function Features() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to <span className="text-warm">Scale Smart</span>
          </h2>
          <p className="text-xl text-slate/70 max-w-2xl mx-auto">
            Comprehensive <span className="text-coral font-semibold">AI-powered tools</span> and insights to help your
            business make <span className="text-warm font-semibold">data-driven decisions</span> and achieve sustainable
            growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-r from-white/20 to-white/10 flex items-center justify-center mb-6`}
              >
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate">{feature.title}</h3>
              <p className="text-slate/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
