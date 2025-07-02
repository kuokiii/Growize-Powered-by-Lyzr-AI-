import { TrendingUp, Users, DollarSign, AlertCircle, CheckCircle } from "lucide-react"

interface BusinessContext {
  companyName: string
  industry: string
  stage: string
  teamSize: string
  revenue: string
  mainChallenge: string
  goals: string
}

export default function GrowthInsights({ businessContext }: { businessContext: BusinessContext }) {
  // Mock insights based on business context
  const insights = [
    {
      type: "opportunity",
      icon: TrendingUp,
      title: "Market Expansion Opportunity",
      description: `Based on your ${businessContext.industry} focus and ${businessContext.stage} stage, there's a 73% growth opportunity in adjacent markets.`,
      priority: "high",
      timeframe: "3-6 months",
    },
    {
      type: "optimization",
      icon: Users,
      title: "Customer Acquisition Optimization",
      description:
        "Your current customer acquisition cost could be reduced by 35% through targeted digital marketing strategies.",
      priority: "medium",
      timeframe: "1-3 months",
    },
    {
      type: "revenue",
      icon: DollarSign,
      title: "Revenue Stream Diversification",
      description: "Adding a subscription model could increase your monthly recurring revenue by 45% within 6 months.",
      priority: "high",
      timeframe: "4-6 months",
    },
    {
      type: "risk",
      icon: AlertCircle,
      title: "Competitive Risk Assessment",
      description: "Monitor emerging competitors in your space. Consider strengthening your unique value proposition.",
      priority: "medium",
      timeframe: "Ongoing",
    },
  ]

  const metrics = [
    { label: "Growth Potential", value: "73%", trend: "up" },
    { label: "Market Readiness", value: "8.2/10", trend: "up" },
    { label: "Competitive Advantage", value: "6.7/10", trend: "stable" },
    { label: "Scalability Score", value: "7.9/10", trend: "up" },
  ]

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-sage/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-charcoal/60">{metric.label}</span>
              <div
                className={`w-2 h-2 rounded-full ${
                  metric.trend === "up" ? "bg-teal" : metric.trend === "down" ? "bg-red-400" : "bg-yellow-400"
                }`}
              />
            </div>
            <div className="text-2xl font-bold text-charcoal">{metric.value}</div>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-charcoal">Key Growth Insights</h3>
        {insights.map((insight, index) => (
          <div key={index} className="border border-sage/20 rounded-xl p-6 hover-lift">
            <div className="flex items-start space-x-4">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  insight.priority === "high" ? "bg-teal/10" : "bg-lavender/20"
                }`}
              >
                <insight.icon className={`w-6 h-6 ${insight.priority === "high" ? "text-teal" : "text-charcoal/60"}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h4 className="text-lg font-semibold text-charcoal">{insight.title}</h4>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      insight.priority === "high" ? "bg-teal/10 text-teal" : "bg-lavender/30 text-charcoal/70"
                    }`}
                  >
                    {insight.priority} priority
                  </span>
                </div>
                <p className="text-charcoal/70 mb-3">{insight.description}</p>
                <div className="flex items-center space-x-4 text-sm text-charcoal/60">
                  <span>⏱️ {insight.timeframe}</span>
                  <CheckCircle className="w-4 h-4 text-teal" />
                  <span>Actionable</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
