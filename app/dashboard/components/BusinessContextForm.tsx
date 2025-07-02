"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  Building2,
  Users,
  Target,
  DollarSign,
  Calendar,
  ArrowRight,
  Sparkles,
  Zap,
  Loader2,
  Bot,
  Wand2,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

export default function BusinessContextForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [isGroqLoading, setIsGroqLoading] = useState(false)
  const [groqStatus, setGroqStatus] = useState<"idle" | "success" | "error">("idle")
  const [businessDescription, setBusinessDescription] = useState("")
  const [showGroqHelper, setShowGroqHelper] = useState(false)
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    customIndustry: "",
    stage: "",
    customStage: "",
    teamSize: "",
    customTeamSize: "",
    revenue: "",
    customRevenue: "",
    mainChallenge: "",
    goals: "",
    timeline: "",
  })

  const handleGroqAssist = async () => {
    if (!businessDescription.trim()) return

    setIsGroqLoading(true)
    setGroqStatus("idle")

    try {
      const response = await fetch("/api/groq-assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          businessDescription: businessDescription,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get AI assistance")
      }

      const aiData = await response.json()

      // Auto-fill the form with AI suggestions
      setFormData((prev) => ({
        ...prev,
        companyName: aiData.companyName || prev.companyName,
        industry: aiData.industry || prev.industry,
        stage: aiData.stage || prev.stage,
        teamSize: aiData.teamSize || prev.teamSize,
        revenue: aiData.revenue || prev.revenue,
        mainChallenge: aiData.mainChallenge || prev.mainChallenge,
        goals: aiData.goals || prev.goals,
      }))

      setGroqStatus("success")

      // Auto-close the helper after successful fill
      setTimeout(() => {
        setShowGroqHelper(false)
        setGroqStatus("idle")
      }, 2000)
    } catch (error) {
      console.error("Error with Groq assistance:", error)
      setGroqStatus("error")
    } finally {
      setIsGroqLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Use custom text if provided, otherwise use selected options
      const finalData = {
        companyName: formData.companyName,
        industry: formData.customIndustry || formData.industry,
        stage: formData.customStage || formData.stage,
        teamSize: formData.customTeamSize || formData.teamSize,
        revenue: formData.customRevenue || formData.revenue,
        mainChallenge: formData.mainChallenge,
        goals: formData.goals,
      }

      // Create a comprehensive message for the AI agent
      const businessContext = `
        Company: ${finalData.companyName}
        Industry: ${finalData.industry}
        Business Stage: ${finalData.stage}
        Team Size: ${finalData.teamSize}
        Monthly Revenue: ${finalData.revenue}
        Main Challenge: ${finalData.mainChallenge}
        Growth Goals: ${finalData.goals}
        
        Please provide comprehensive business growth insights including:
        1. Strategic growth recommendations
        2. Pivot suggestions with implementation steps
        3. Decision-making frameworks suitable for this business
        4. Risk assessment and mitigation strategies
        5. Key metrics to track
        6. Actionable next steps
      `

      // Generate unique session ID
      const sessionId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

      // Call Lyzr AI agent
      const response = await fetch("/api/lyzr-agent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: businessContext,
          sessionId: sessionId,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get AI insights")
      }

      const aiResponse = await response.json()

      // Store both form data and AI response
      const dataToStore = {
        businessContext: finalData,
        aiInsights: aiResponse,
        sessionId: sessionId,
        timestamp: new Date().toISOString(),
      }

      localStorage.setItem("growizeData", JSON.stringify(dataToStore))
      router.push("/dashboard/results")
    } catch (error) {
      console.error("Error getting AI insights:", error)
      // Fallback to mock data if AI fails
      localStorage.setItem("businessContext", JSON.stringify(formData))
      router.push("/dashboard/results")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-coral/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-peach/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-coral text-white px-6 py-3 rounded-full mb-4 shadow-lg">
            <Zap className="w-5 h-5 animate-pulse" />
            <span className="text-sm font-bold">Powered by Lyzr AI</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Let's <span className="bg-gradient-to-r from-coral to-peach bg-clip-text text-transparent">Analyze</span>{" "}
            Your Business
          </h2>
          <p className="text-gray-600">Share your details to get personalized AI insights</p>
        </div>

        {/* Groq AI Assistant */}
        <div className="mb-8">
          <button
            type="button"
            onClick={() => setShowGroqHelper(!showGroqHelper)}
            className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl p-4 hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg"
          >
            <Bot className="w-5 h-5" />
            <span className="font-semibold">Need help filling this out? Try our AI Assistant</span>
            <Wand2 className="w-5 h-5" />
          </button>

          {showGroqHelper && (
            <div className="mt-4 p-6 bg-white rounded-2xl border border-purple-200 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                <Bot className="w-5 h-5 text-purple-600" />
                <span>Describe your business and I'll help fill the form</span>
              </h3>
              <textarea
                value={businessDescription}
                onChange={(e) => setBusinessDescription(e.target.value)}
                placeholder="Example: I run a small tech startup that builds AI-powered marketing tools. We're a team of 5 people, just launched our MVP, and struggling with customer acquisition..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white resize-none"
              />
              <div className="flex items-center justify-between mt-3">
                <button
                  type="button"
                  onClick={handleGroqAssist}
                  disabled={isGroqLoading || !businessDescription.trim()}
                  className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {isGroqLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>AI is analyzing...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Auto-fill with AI</span>
                    </>
                  )}
                </button>

                {groqStatus === "success" && (
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Form filled successfully!</span>
                  </div>
                )}

                {groqStatus === "error" && (
                  <div className="flex items-center space-x-2 text-red-600">
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Error occurred, using fallback data</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <label className="flex items-center space-x-2 text-gray-900 font-semibold mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-coral to-peach rounded-lg flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-white" />
                </div>
                <span>Company Name</span>
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full px-6 py-4 border-2 border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-coral focus:border-coral transition-all duration-300 bg-white hover:border-coral/50 disabled:opacity-50"
                placeholder="Enter your company name"
                required
              />
            </div>

            <div className="group">
              <label className="flex items-center space-x-2 text-gray-900 font-semibold mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <span>Industry</span>
              </label>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full px-6 py-4 border-2 border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-coral focus:border-coral transition-all duration-300 bg-white hover:border-coral/50 disabled:opacity-50 mb-3"
                required={!formData.customIndustry}
              >
                <option value="">Select your industry</option>
                <option value="technology">🚀 Technology</option>
                <option value="healthcare">🏥 Healthcare</option>
                <option value="finance">💰 Finance</option>
                <option value="ecommerce">🛒 E-commerce</option>
                <option value="education">📚 Education</option>
                <option value="manufacturing">🏭 Manufacturing</option>
                <option value="other">✨ Other</option>
              </select>
              <input
                type="text"
                name="customIndustry"
                value={formData.customIndustry}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full px-6 py-4 border-2 border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-coral focus:border-coral transition-all duration-300 bg-white hover:border-coral/50 disabled:opacity-50"
                placeholder="Or type your specific industry..."
              />
            </div>

            <div className="group">
              <label className="flex items-center space-x-2 text-gray-900 font-semibold mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <span>Business Stage</span>
              </label>
              <select
                name="stage"
                value={formData.stage}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full px-6 py-4 border-2 border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-coral focus:border-coral transition-all duration-300 bg-white hover:border-coral/50 disabled:opacity-50 mb-3"
                required={!formData.customStage}
              >
                <option value="">Select your stage</option>
                <option value="idea">💡 Idea Stage</option>
                <option value="mvp">🔧 MVP/Prototype</option>
                <option value="early">🌱 Early Stage</option>
                <option value="growth">📈 Growth Stage</option>
                <option value="scale">🚀 Scale Stage</option>
              </select>
              <input
                type="text"
                name="customStage"
                value={formData.customStage}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full px-6 py-4 border-2 border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-coral focus:border-coral transition-all duration-300 bg-white hover:border-coral/50 disabled:opacity-50"
                placeholder="Or describe your current stage..."
              />
            </div>

            <div className="group">
              <label className="flex items-center space-x-2 text-gray-900 font-semibold mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <span>Team Size</span>
              </label>
              <select
                name="teamSize"
                value={formData.teamSize}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full px-6 py-4 border-2 border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-coral focus:border-coral transition-all duration-300 bg-white hover:border-coral/50 disabled:opacity-50 mb-3"
                required={!formData.customTeamSize}
              >
                <option value="">Select team size</option>
                <option value="1">👤 Just me</option>
                <option value="2-5">👥 2-5 people</option>
                <option value="6-10">👨‍👩‍👧‍👦 6-10 people</option>
                <option value="11-25">👥👥 11-25 people</option>
                <option value="25+">🏢 25+ people</option>
              </select>
              <input
                type="text"
                name="customTeamSize"
                value={formData.customTeamSize}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full px-6 py-4 border-2 border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-coral focus:border-coral transition-all duration-300 bg-white hover:border-coral/50 disabled:opacity-50"
                placeholder="Or specify your team size..."
              />
            </div>
          </div>

          <div className="group">
            <label className="flex items-center space-x-2 text-gray-900 font-semibold mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-white" />
              </div>
              <span>Monthly Revenue Range</span>
            </label>
            <select
              name="revenue"
              value={formData.revenue}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full px-6 py-4 border-2 border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-coral focus:border-coral transition-all duration-300 bg-white hover:border-coral/50 disabled:opacity-50 mb-3"
              required={!formData.customRevenue}
            >
              <option value="">Select revenue range</option>
              <option value="0">🌱 Pre-revenue</option>
              <option value="1-1k">💵 $1 - $1,000</option>
              <option value="1k-10k">💰 $1,000 - $10,000</option>
              <option value="10k-50k">💎 $10,000 - $50,000</option>
              <option value="50k-100k">🏆 $50,000 - $100,000</option>
              <option value="100k+">🚀 $100,000+</option>
            </select>
            <input
              type="text"
              name="customRevenue"
              value={formData.customRevenue}
              onChange={handleChange}
              disabled={isLoading}
              className="w-full px-6 py-4 border-2 border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-coral focus:border-coral transition-all duration-300 bg-white hover:border-coral/50 disabled:opacity-50"
              placeholder="Or specify your revenue range..."
            />
          </div>

          <div className="space-y-6">
            <div className="group">
              <label className="block text-gray-900 font-semibold mb-3">
                <span className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-coral" />
                  <span>What's your main growth challenge?</span>
                </span>
              </label>
              <textarea
                name="mainChallenge"
                value={formData.mainChallenge}
                onChange={handleChange}
                disabled={isLoading}
                rows={4}
                className="w-full px-6 py-4 border-2 border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-coral focus:border-coral transition-all duration-300 bg-white hover:border-coral/50 resize-none disabled:opacity-50"
                placeholder="Describe your biggest challenge in growing your business..."
                required
              />
            </div>

            <div className="group">
              <label className="block text-gray-900 font-semibold mb-3">
                <span className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-purple-600" />
                  <span>What are your growth goals for the next 6 months?</span>
                </span>
              </label>
              <textarea
                name="goals"
                value={formData.goals}
                onChange={handleChange}
                disabled={isLoading}
                rows={4}
                className="w-full px-6 py-4 border-2 border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-coral focus:border-coral transition-all duration-300 bg-white hover:border-coral/50 resize-none disabled:opacity-50"
                placeholder="Share your specific goals and what success looks like..."
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="group w-full bg-gradient-to-r from-coral to-peach text-white py-6 rounded-2xl font-bold text-lg hover:from-coral/90 hover:to-peach/90 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3 shadow-2xl relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            {isLoading ? (
              <>
                <Loader2 className="w-6 h-6 animate-spin relative z-10" />
                <span className="relative z-10">Analyzing with Lyzr AI...</span>
              </>
            ) : (
              <>
                <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform relative z-10" />
                <span className="relative z-10">Generate AI Insights</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
              </>
            )}
          </button>

          {isLoading && (
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 text-coral">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span className="text-sm font-medium">Lyzr AI is analyzing your business context...</span>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
