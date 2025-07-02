import { Zap, Sparkles, Brain, CheckCircle2, BookOpen, Shield } from "lucide-react"

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

export default function AIInsights({ growizeData }: { growizeData: GrowizeData }) {
  // If we have real AI insights, display the complete response
  if (growizeData.aiInsights) {
    const aiResponse =
      typeof growizeData.aiInsights.response === "string"
        ? growizeData.aiInsights.response
        : JSON.stringify(growizeData.aiInsights, null, 2)

    return (
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Enhanced Multi-layer Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-coral/20 to-peach/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-mint/15 to-coral/15 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-peach/15 to-mint/15 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="relative z-10 space-y-12 p-8">
          {/* Hero Header with Enhanced Design */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-4 bg-white/95 backdrop-blur-sm px-10 py-6 rounded-full mb-8 border border-coral/20 shadow-2xl">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-coral via-peach to-mint rounded-full flex items-center justify-center shadow-xl animate-pulse">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-ping">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-coral to-peach bg-clip-text text-transparent mb-2">
                  AI Analysis Complete
                </h1>
                <p className="text-lg text-gray-600 font-medium">
                  Personalized insights for {growizeData.businessContext.companyName}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-green-600">Verified</p>
                  <p className="text-xs text-gray-500">AI Analysis</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main AI Response Card with Enhanced Design */}
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 border border-gray-200 shadow-2xl relative overflow-hidden">
                {/* Enhanced Header */}
                <div className="flex items-center justify-between mb-10 relative z-10">
                  <div className="flex items-center space-x-6">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-coral via-peach to-mint rounded-2xl flex items-center justify-center shadow-xl">
                        <Zap className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold bg-gradient-to-r from-coral to-peach bg-clip-text text-transparent mb-3">
                        Your Growth Strategy
                      </h2>
                      <p className="text-xl text-gray-600 font-medium">
                        AI-powered insights tailored for your business success
                      </p>
                    </div>
                  </div>
                </div>

                {/* AI Response Content with Enhanced Styling */}
                <div className="relative z-10 mb-10">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-10 border border-gray-200 shadow-inner">
                    <div className="flex items-center space-x-3 mb-6">
                      <BookOpen className="w-6 h-6 text-coral" />
                      <h3 className="text-2xl font-bold text-gray-900">Detailed Analysis</h3>
                    </div>
                    <div className="prose prose-xl max-w-none text-gray-800 leading-relaxed">
                      <div className="whitespace-pre-line font-medium text-lg leading-9 text-gray-800">
                        {aiResponse}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Footer Info */}
          {growizeData.timestamp && (
            <div className="text-center">
              <div className="inline-flex items-center space-x-4 bg-white/95 backdrop-blur-sm px-10 py-5 rounded-full border border-coral/20 shadow-xl">
                <div className="w-10 h-10 bg-gradient-to-br from-coral to-peach rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white animate-spin" />
                </div>
                <span className="font-semibold text-gray-800 text-lg">
                  Analysis generated on {new Date(growizeData.timestamp).toLocaleString()}
                </span>
                <Shield className="w-6 h-6 text-coral" />
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  // Enhanced empty state with beautiful design
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-coral/20 to-peach/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-mint/15 to-coral/15 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="relative z-10 text-center">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-16 border border-gray-200 shadow-2xl max-w-lg mx-auto">
          <div className="relative mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-coral via-peach to-mint rounded-full flex items-center justify-center mx-auto shadow-xl">
              <Brain className="w-16 h-16 text-white" />
            </div>
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-bounce"></div>
          </div>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-coral to-peach bg-clip-text text-transparent mb-6">
            No Analysis Available
          </h3>
          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            Ready to unlock your business potential? Fill out the business context form to generate personalized AI
            insights tailored to your industry and goals.
          </p>
        </div>
      </div>
    </div>
  )
}
