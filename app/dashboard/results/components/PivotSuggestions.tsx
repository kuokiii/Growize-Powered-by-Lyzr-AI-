import { Lightbulb, ArrowRight, Star, Clock, Zap, Sparkles } from "lucide-react"

interface BusinessContext {
  companyName: string
  industry: string
  stage: string
  teamSize: string
  revenue: string
  mainChallenge: string
  goals: string
}

interface GrowizeData {
  businessContext: BusinessContext
  aiInsights?: any
  sessionId?: string
  timestamp?: string
}

export default function PivotSuggestions({ growizeData }: { growizeData: GrowizeData }) {
  // If we have real AI insights, we could parse pivot suggestions from them
  if (growizeData.aiInsights) {
    const aiResponse =
      typeof growizeData.aiInsights.response === "string"
        ? growizeData.aiInsights.response
        : JSON.stringify(growizeData.aiInsights, null, 2)

    // Parse pivot suggestions from the AI response
    const parsePivotSuggestions = (response: string) => {
      const pivotMatch = response.match(/\*\*Pivot Suggestions with Implementation Steps:\*\*(.*?)(?=\*\*|$)/s)
      return pivotMatch ? pivotMatch[1].trim() : ""
    }

    const pivotContent = parsePivotSuggestions(aiResponse)

    return (
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-teal/10 to-purple-500/10 rounded-2xl p-6 border border-teal/20">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-charcoal">AI-Generated Pivot Suggestions</h3>
              <p className="text-sm text-charcoal/60">Strategic pivots recommended by Lyzr AI</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="prose prose-sm max-w-none">
              <div className="whitespace-pre-line text-charcoal/80 leading-relaxed">{pivotContent || aiResponse}</div>
            </div>
          </div>

          {growizeData.timestamp && (
            <div className="mt-4 text-xs text-charcoal/50">
              Generated on {new Date(growizeData.timestamp).toLocaleString()}
            </div>
          )}
        </div>
      </div>
    )
  }

  // Fallback to mock pivot suggestions
  const pivotSuggestions = [
    {
      title: "Adjacent Market Expansion",
      description: `Leverage your ${growizeData.businessContext.industry} expertise to enter complementary markets with similar customer needs.`,
      impact: "High",
      effort: "Medium",
      timeline: "4-6 months",
      confidence: 85,
      keySteps: [
        "Conduct market research in adjacent sectors",
        "Identify transferable capabilities",
        "Develop minimum viable product for new market",
        "Test with pilot customers",
      ],
    },
    {
      title: "Business Model Transformation",
      description:
        "Shift from transactional to subscription-based revenue model to increase predictability and customer lifetime value.",
      impact: "High",
      effort: "High",
      timeline: "6-9 months",
      confidence: 78,
      keySteps: [
        "Analyze current customer usage patterns",
        "Design tiered subscription offerings",
        "Implement billing and customer management systems",
        "Migrate existing customers gradually",
      ],
    },
    {
      title: "Platform Strategy",
      description:
        "Transform from service provider to platform enabler, allowing third parties to build on your infrastructure.",
      impact: "Very High",
      effort: "High",
      timeline: "9-12 months",
      confidence: 72,
      keySteps: [
        "Identify core platform capabilities",
        "Develop API and developer tools",
        "Create partner ecosystem strategy",
        "Launch with select partners",
      ],
    },
  ]

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "Very High":
        return "bg-gradient-to-r from-teal to-teal/80 text-white"
      case "High":
        return "bg-teal/20 text-teal border border-teal/30"
      case "Medium":
        return "bg-purple-100 text-purple-700 border border-purple-200"
      default:
        return "bg-sage/20 text-charcoal border border-sage/30"
    }
  }

  const getEffortColor = (effort: string) => {
    switch (effort) {
      case "High":
        return "text-red-600"
      case "Medium":
        return "text-yellow-600"
      default:
        return "text-teal"
    }
  }

  return (
    <div className="space-y-8">
      <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
        <div className="flex items-center space-x-3 mb-2">
          <Sparkles className="w-5 h-5 text-yellow-600" />
          <span className="font-semibold text-yellow-800">Demo Mode</span>
        </div>
        <p className="text-yellow-700 text-sm">
          These are sample pivot suggestions. The form will connect to Lyzr AI for personalized recommendations.
        </p>
      </div>

      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-charcoal mb-2">Strategic Pivot Opportunities</h3>
        <p className="text-charcoal/60">Based on your business context, here are the most promising pivot directions</p>
      </div>

      <div className="space-y-6">
        {pivotSuggestions.map((pivot, index) => (
          <div key={index} className="glass-effect rounded-2xl p-8 hover-lift border border-white/20">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-charcoal mb-2">{pivot.title}</h4>
                  <p className="text-charcoal/70 leading-relaxed">{pivot.description}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium text-charcoal">{pivot.confidence}% confidence</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-sm text-charcoal/60 mb-2">Impact</div>
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${getImpactColor(pivot.impact)}`}>
                  {pivot.impact}
                </span>
              </div>
              <div className="text-center">
                <div className="text-sm text-charcoal/60 mb-2">Effort</div>
                <span className={`text-sm font-medium ${getEffortColor(pivot.effort)}`}>{pivot.effort}</span>
              </div>
              <div className="text-center">
                <div className="text-sm text-charcoal/60 mb-2">Timeline</div>
                <div className="flex items-center justify-center space-x-1">
                  <Clock className="w-4 h-4 text-charcoal/60" />
                  <span className="text-sm font-medium text-charcoal">{pivot.timeline}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-sage/10 to-teal/10 rounded-xl p-6 border border-sage/20">
              <h5 className="font-semibold text-charcoal mb-4 flex items-center space-x-2">
                <Zap className="w-4 h-4 text-teal" />
                <span>Key Implementation Steps</span>
              </h5>
              <div className="space-y-3">
                {pivot.keySteps.map((step, stepIndex) => (
                  <div key={stepIndex} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-teal to-teal/80 rounded-full flex items-center justify-center text-xs font-medium text-white shadow-sm">
                      {stepIndex + 1}
                    </div>
                    <span className="text-charcoal/70">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="group flex items-center space-x-2 text-teal hover:text-teal/80 font-medium transition-colors">
                <span>Explore This Pivot</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
