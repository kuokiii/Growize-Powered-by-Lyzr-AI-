"use client"

import { useEffect, useState } from "react"
import Navigation from "../../components/Navigation"
import AIInsights from "./components/AIInsights"
import { Sparkles, TrendingUp, Brain, Zap, Star, Crown, Gem, Award, Compass, Layers } from "lucide-react"

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

export default function Results() {
  const [growizeData, setGrowizeData] = useState<GrowizeData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const data = localStorage.getItem("growizeData")
    if (data) {
      setGrowizeData(JSON.parse(data))
    }
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-coral/20 to-peach/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-mint/15 to-coral/15 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-peach/10 to-mint/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <Star className="absolute top-32 left-1/4 w-6 h-6 text-coral/30 animate-pulse" />
          <Crown className="absolute top-48 right-1/3 w-8 h-8 text-peach/30 animate-bounce" />
          <Sparkles className="absolute bottom-40 left-1/5 w-5 h-5 text-mint/30 animate-pulse" />
          <Gem className="absolute top-60 right-1/4 w-6 h-6 text-coral/30 animate-float" />
          <Award className="absolute bottom-32 right-1/6 w-5 h-5 text-peach/30 animate-pulse" />
          <Compass className="absolute top-80 left-1/6 w-4 h-4 text-mint/30 animate-bounce" />
          <Layers className="absolute bottom-60 right-1/3 w-5 h-5 text-coral/30 animate-float" />
        </div>

        <div className="relative z-10 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-16 border border-gray-200/50 shadow-2xl">
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-coral via-peach to-mint rounded-full flex items-center justify-center mx-auto shadow-xl animate-pulse">
                <Brain className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-spin">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-bounce"></div>
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-coral to-peach bg-clip-text text-transparent mb-4">
              Loading Your Insights
            </h3>
            <p className="text-xl text-gray-600">Preparing your personalized AI analysis...</p>
            <div className="mt-6 flex justify-center space-x-2">
              <div className="w-3 h-3 bg-coral rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-peach rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
              <div className="w-3 h-3 bg-mint rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Enhanced Multi-layer Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-coral/15 to-peach/15 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-mint/10 to-coral/10 rounded-full blur-3xl animate-float"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Star className="absolute top-32 left-1/4 w-6 h-6 text-coral/25 animate-pulse" />
        <Crown className="absolute top-48 right-1/3 w-8 h-8 text-peach/25 animate-bounce" />
        <Gem className="absolute bottom-40 left-1/5 w-5 h-5 text-mint/25 animate-pulse" />
        <Award className="absolute top-60 right-1/4 w-7 h-7 text-coral/25 animate-float" />
        <Compass className="absolute bottom-32 left-1/6 w-6 h-6 text-peach/25 animate-pulse" />
        <Layers className="absolute top-80 right-1/6 w-5 h-5 text-mint/25 animate-bounce" />
      </div>

      {/* Navigation with enhanced styling */}
      <div className="relative z-50">
        <Navigation />
      </div>

      {/* Enhanced Header Section */}
      <div className="relative z-10 pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-4 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full mb-6 border border-coral/20 shadow-lg">
              <TrendingUp className="w-6 h-6 text-coral animate-pulse" />
              <span className="text-lg font-bold bg-gradient-to-r from-coral to-peach bg-clip-text text-transparent">
                Real-time AI analysis completed
              </span>
              <Sparkles className="w-6 h-6 text-peach animate-spin" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-poppins">
              AI-powered recommendations for{" "}
              <span className="bg-gradient-to-r from-coral to-peach bg-clip-text text-transparent">
                {growizeData?.businessContext?.industry || "your business"}
              </span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover actionable insights, strategic pivots, and growth frameworks designed specifically for your
              business stage and unique challenges.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {growizeData ? (
          <AIInsights growizeData={growizeData} />
        ) : (
          <div className="text-center py-20">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 border border-gray-200/50 max-w-lg mx-auto shadow-2xl">
              <div className="relative mb-8">
                <Sparkles className="w-16 h-16 text-coral mx-auto animate-pulse" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce"></div>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-coral to-peach bg-clip-text text-transparent mb-4">
                No Analysis Available
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Please fill out the business context form to generate personalized AI insights.
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
