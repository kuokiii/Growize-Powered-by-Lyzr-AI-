import { Brain, Users, BarChart3, Lightbulb, Shield, Zap } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description:
        "Advanced algorithms analyze your business context and market conditions to provide tailored insights.",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: Users,
      title: "Customer-Centric Approach",
      description: "Understand your customers better with behavioral analysis and market segmentation insights.",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: BarChart3,
      title: "Growth Metrics",
      description: "Track key performance indicators and get recommendations for sustainable growth.",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Lightbulb,
      title: "Innovation Framework",
      description: "Structured approach to innovation with proven methodologies and best practices.",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Identify potential risks and get mitigation strategies before making critical decisions.",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      icon: Zap,
      title: "Quick Implementation",
      description: "Get actionable insights that you can implement immediately to see results.",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-ivory to-sage/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 font-poppins">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-teal to-sage bg-clip-text text-transparent">Scale Smart</span>
          </h2>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
            Comprehensive tools and insights to help your business make data-driven decisions and achieve sustainable
            growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 card-shadow hover-lift">
              <div className={`w-12 h-12 ${feature.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">{feature.title}</h3>
              <p className="text-charcoal/60 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
