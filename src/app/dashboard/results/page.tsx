"use client"

import { useEffect, useState } from "react"
import Navigation from "../../components/Navigation"
import PivotSuggestions from "./components/PivotSuggestions"
import DecisionFrameworks from "./components/DecisionFrameworks"
import GrowthInsights from "./components/GrowthInsights"
import { Lightbulb, Target, TrendingUp } from "lucide-react"

interface BusinessContext {
  companyName: string
  industry: string
  stage: string
  teamSize: string
  revenue: string
  mainChallenge: string
  goals: string
}

export default function Results() {
  const [businessContext, setBusinessContext] = useState<BusinessContext | null>(null)
  const [activeTab, setActiveTab] = useState("insights")

  useEffect(() => {
    const stored = localStorage.getItem("businessContext")
    if (stored) {
      setBusinessContext(JSON.parse(stored))
    }
  }, [])

  if (!businessContext) {
    return (
      <main className="min-h-screen bg-ivory">
        <Navigation />
        <div className="pt-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-charcoal">Loading your business insights...</p>
          </div>
        </div>
      </main>
    )
  }

  const tabs = [
    { id: "insights", label: "Growth Insights", icon: TrendingUp },
    { id: "pivots", label: "Pivot Suggestions", icon: Lightbulb },
    { id: "frameworks", label: "Decision Frameworks", icon: Target },
  ]

  return (
    <main className="min-h-screen bg-ivory">
      <Navigation />
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 font-poppins">
              Growth Insights for{" "}
              <span className="bg-gradient-to-r from-teal to-sage bg-clip-text text-transparent">
                {businessContext.companyName}
              </span>
            </h1>
            <p className="text-xl text-charcoal/70">
              AI-powered recommendations tailored to your {businessContext.industry} business
            </p>
          </div>

          <div className="bg-white rounded-2xl card-shadow mb-8">
            <div className="flex flex-wrap border-b border-sage/20">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors ${
                    activeTab === tab.id ? "text-teal border-b-2 border-teal" : "text-charcoal/60 hover:text-charcoal"
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="p-8">
              {activeTab === "insights" && <GrowthInsights businessContext={businessContext} />}
              {activeTab === "pivots" && <PivotSuggestions businessContext={businessContext} />}
              {activeTab === "frameworks" && <DecisionFrameworks businessContext={businessContext} />}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
