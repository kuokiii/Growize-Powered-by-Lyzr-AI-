"use client"

import Link from "next/link"
import { ArrowRight, Sparkles, Target, TrendingUp, Zap } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-coral/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-peach/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-mint/10 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-coral/20 shadow-lg">
                <Sparkles className="w-5 h-5 text-coral animate-pulse" />
                <span className="text-sm font-semibold text-gray-800">AI-Powered Growth Insights</span>
              </div>
              <div className="flex items-center space-x-2 bg-coral/10 backdrop-blur-sm px-6 py-3 rounded-full border border-coral/30">
                <Zap className="w-4 h-4 text-coral" />
                <span className="text-sm font-bold text-coral">Powered by Lyzr AI</span>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 font-poppins leading-tight">
            Transform Your{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-coral via-peach to-mint bg-clip-text text-transparent">
                Startup Journey
              </span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
            Powered by{" "}
            <span className="font-bold text-coral bg-coral/10 px-3 py-1 rounded-lg border border-coral/20 inline-flex items-center space-x-1">
              <Zap className="w-4 h-4" />
              <span>Lyzr AI</span>
            </span>
            , get strategic insights, pivot suggestions, and decision-making frameworks tailored to your business. Let
            AI guide your growth with{" "}
            <span className="font-semibold text-peach bg-peach/10 px-2 py-1 rounded-md">
              data-driven recommendations
            </span>
            .
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              href="/dashboard"
              className="group bg-coral hover:bg-coral/90 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl border-2 border-coral"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/pricing"
              className="group bg-white hover:bg-gray-50 text-coral px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl border-2 border-coral/20"
            >
              <span>View Pricing</span>
              <Target className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group text-center p-8 rounded-3xl bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200/50">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Strategic Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Get <span className="font-semibold text-purple-600">personalized growth strategies</span> based on your
                business context
              </p>
            </div>

            <div className="group text-center p-8 rounded-3xl bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200/50">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Pivot Suggestions</h3>
              <p className="text-gray-600 leading-relaxed">
                Discover <span className="font-semibold text-blue-600">new opportunities</span> and strategic pivots for
                growth
              </p>
            </div>

            <div className="group text-center p-8 rounded-3xl bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200/50">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Decision Frameworks</h3>
              <p className="text-gray-600 leading-relaxed">
                Make <span className="font-semibold text-orange-600">informed decisions</span> with AI-powered
                frameworks
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
