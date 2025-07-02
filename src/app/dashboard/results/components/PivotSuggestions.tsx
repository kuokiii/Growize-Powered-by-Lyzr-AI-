import { Lightbulb, ArrowRight, Star, Clock } from "lucide-react"

interface BusinessContext {
  companyName: string
  industry: string
  stage: string
  teamSize: string
  revenue: string
  mainChallenge: string
  goals: string
}

export default function PivotSuggestions({ businessContext }: { businessContext: BusinessContext }) {
  const pivotSuggestions = [
    {
      title: "Adjacent Market Expansion",
      description: `Leverage your ${businessContext.industry} expertise to enter complementary markets with similar customer needs.`,
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
        return "bg-teal text-white"
      case "High":
        return "bg-teal/20 text-teal"
      case "Medium":
        return "bg-lavender/30 text-charcoal"
      default:
        return "bg-sage/20 text-charcoal"
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
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-charcoal mb-2">Strategic Pivot Opportunities</h3>
        <p className="text-charcoal/60">Based on your business context, here are the most promising pivot directions</p>
      </div>

      <div className="space-y-6">
        {pivotSuggestions.map((pivot, index) => (
          <div key={index} className="border border-sage/20 rounded-2xl p-8 hover-lift">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-teal" />
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
                <div className="text-sm text-charcoal/60 mb-1">Impact</div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getImpactColor(pivot.impact)}`}>
                  {pivot.impact}
                </span>
              </div>
              <div className="text-center">
                <div className="text-sm text-charcoal/60 mb-1">Effort</div>
                <span className={`text-sm font-medium ${getEffortColor(pivot.effort)}`}>{pivot.effort}</span>
              </div>
              <div className="text-center">
                <div className="text-sm text-charcoal/60 mb-1">Timeline</div>
                <div className="flex items-center justify-center space-x-1">
                  <Clock className="w-4 h-4 text-charcoal/60" />
                  <span className="text-sm font-medium text-charcoal">{pivot.timeline}</span>
                </div>
              </div>
            </div>

            <div className="bg-sage/5 rounded-xl p-6">
              <h5 className="font-semibold text-charcoal mb-4">Key Implementation Steps</h5>
              <div className="space-y-3">
                {pivot.keySteps.map((step, stepIndex) => (
                  <div key={stepIndex} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-teal/20 rounded-full flex items-center justify-center text-xs font-medium text-teal">
                      {stepIndex + 1}
                    </div>
                    <span className="text-charcoal/70">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="flex items-center space-x-2 text-teal hover:text-teal/80 font-medium">
                <span>Explore This Pivot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
