import { Target, CheckSquare, AlertTriangle, Users, DollarSign, Clock } from "lucide-react"

interface BusinessContext {
  companyName: string
  industry: string
  stage: string
  teamSize: string
  revenue: string
  mainChallenge: string
  goals: string
}

export default function DecisionFrameworks({ businessContext }: { businessContext: BusinessContext }) {
  const frameworks = [
    {
      title: "ICE Prioritization Framework",
      description: "Prioritize growth initiatives based on Impact, Confidence, and Ease of implementation.",
      icon: Target,
      color: "teal",
      criteria: [
        { name: "Impact", description: "How much will this move the needle?", weight: "40%" },
        { name: "Confidence", description: "How sure are we this will work?", weight: "30%" },
        { name: "Ease", description: "How easy is this to implement?", weight: "30%" },
      ],
      example: {
        initiative: "Implement referral program",
        scores: { impact: 8, confidence: 7, ease: 6 },
        total: 7.0,
      },
    },
    {
      title: "RICE Scoring Model",
      description: "Evaluate features and initiatives using Reach, Impact, Confidence, and Effort.",
      icon: CheckSquare,
      color: "lavender",
      criteria: [
        { name: "Reach", description: "How many customers will this affect?", weight: "25%" },
        { name: "Impact", description: "How much impact per customer?", weight: "25%" },
        { name: "Confidence", description: "How confident are we?", weight: "25%" },
        { name: "Effort", description: "How much work will this take?", weight: "25%" },
      ],
      example: {
        initiative: "Mobile app development",
        scores: { reach: 1000, impact: 3, confidence: 80, effort: 8 },
        total: 300,
      },
    },
    {
      title: "Risk-Reward Matrix",
      description: "Balance potential rewards against associated risks for strategic decisions.",
      icon: AlertTriangle,
      color: "sage",
      criteria: [
        { name: "Potential Reward", description: "Expected positive outcome", weight: "50%" },
        { name: "Risk Level", description: "Probability and impact of failure", weight: "50%" },
      ],
      example: {
        initiative: "Enter new market segment",
        scores: { reward: 9, risk: 6 },
        recommendation: "Proceed with caution",
      },
    },
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case "teal":
        return "bg-teal/10 text-teal border-teal/20"
      case "lavender":
        return "bg-lavender/20 text-charcoal border-lavender/30"
      case "sage":
        return "bg-sage/20 text-charcoal border-sage/30"
      default:
        return "bg-gray-100 text-gray-600 border-gray-200"
    }
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-charcoal mb-2">Decision-Making Frameworks</h3>
        <p className="text-charcoal/60">Structured approaches to evaluate and prioritize your growth initiatives</p>
      </div>

      <div className="space-y-8">
        {frameworks.map((framework, index) => (
          <div key={index} className="border border-sage/20 rounded-2xl p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${getColorClasses(framework.color)}`}
              >
                <framework.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-charcoal mb-2">{framework.title}</h4>
                <p className="text-charcoal/70">{framework.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h5 className="font-semibold text-charcoal mb-4">Framework Criteria</h5>
                <div className="space-y-4">
                  {framework.criteria.map((criterion, criterionIndex) => (
                    <div key={criterionIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-teal rounded-full mt-2" />
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-charcoal">{criterion.name}</span>
                          <span className="text-xs bg-sage/20 text-charcoal/60 px-2 py-1 rounded">
                            {criterion.weight}
                          </span>
                        </div>
                        <p className="text-sm text-charcoal/60">{criterion.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-sage/5 rounded-xl p-6">
                <h5 className="font-semibold text-charcoal mb-4">Example Application</h5>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-charcoal">Initiative:</span>
                    <span className="text-charcoal/70">{framework.example.initiative}</span>
                  </div>

                  {framework.title === "ICE Prioritization Framework" && (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-charcoal/60">Impact:</span>
                        <span className="text-sm font-medium">{framework.example.scores.impact}/10</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-charcoal/60">Confidence:</span>
                        <span className="text-sm font-medium">{framework.example.scores.confidence}/10</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-charcoal/60">Ease:</span>
                        <span className="text-sm font-medium">{framework.example.scores.ease}/10</span>
                      </div>
                      <div className="border-t border-sage/20 pt-3 mt-3">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-charcoal">ICE Score:</span>
                          <span className="text-lg font-bold text-teal">{framework.example.total}</span>
                        </div>
                      </div>
                    </>
                  )}

                  {framework.title === "RICE Scoring Model" && (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-charcoal/60">Reach:</span>
                        <span className="text-sm font-medium">{framework.example.scores.reach} users</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-charcoal/60">Impact:</span>
                        <span className="text-sm font-medium">{framework.example.scores.impact}/5</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-charcoal/60">Confidence:</span>
                        <span className="text-sm font-medium">{framework.example.scores.confidence}%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-charcoal/60">Effort:</span>
                        <span className="text-sm font-medium">{framework.example.scores.effort} weeks</span>
                      </div>
                      <div className="border-t border-sage/20 pt-3 mt-3">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-charcoal">RICE Score:</span>
                          <span className="text-lg font-bold text-teal">{framework.example.total}</span>
                        </div>
                      </div>
                    </>
                  )}

                  {framework.title === "Risk-Reward Matrix" && (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-charcoal/60">Reward Potential:</span>
                        <span className="text-sm font-medium">{framework.example.scores.reward}/10</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-charcoal/60">Risk Level:</span>
                        <span className="text-sm font-medium">{framework.example.scores.risk}/10</span>
                      </div>
                      <div className="border-t border-sage/20 pt-3 mt-3">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-charcoal">Recommendation:</span>
                          <span className="text-sm font-medium text-teal">{framework.example.recommendation}</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-teal/10 to-sage/10 rounded-2xl p-8">
        <h4 className="text-lg font-semibold text-charcoal mb-4">How to Apply These Frameworks</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start space-x-3">
            <Users className="w-6 h-6 text-teal mt-1" />
            <div>
              <h5 className="font-medium text-charcoal mb-2">Gather Your Team</h5>
              <p className="text-sm text-charcoal/60">Include diverse perspectives from different departments</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <DollarSign className="w-6 h-6 text-teal mt-1" />
            <div>
              <h5 className="font-medium text-charcoal mb-2">Define Success Metrics</h5>
              <p className="text-sm text-charcoal/60">Establish clear, measurable outcomes for each initiative</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Clock className="w-6 h-6 text-teal mt-1" />
            <div>
              <h5 className="font-medium text-charcoal mb-2">Regular Reviews</h5>
              <p className="text-sm text-charcoal/60">Reassess priorities as new information becomes available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
