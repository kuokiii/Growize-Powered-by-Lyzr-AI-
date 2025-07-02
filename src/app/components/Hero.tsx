"use client"

import Link from "next/link"
import { ArrowRight, Sparkles, Target, TrendingUp } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-lavender/30 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-teal" />
              <span className="text-sm font-medium text-charcoal">AI-Powered Growth Insights</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6 font-poppins">
            Transform Your{" "}
            <span className="bg-gradient-to-r from-teal to-sage bg-clip-text text-transparent">Startup Journey</span>
          </h1>

          <p className="text-xl text-charcoal/70 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get strategic insights, pivot suggestions, and decision-making frameworks tailored to your business. Let AI
            guide your growth with data-driven recommendations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/dashboard"
              className="bg-teal text-white px-8 py-4 rounded-full font-semibold hover:bg-teal/90 transition-all hover-lift flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Strategic Insights</h3>
              <p className="text-charcoal/60 text-sm">
                Get personalized growth strategies based on your business context
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Pivot Suggestions</h3>
              <p className="text-charcoal/60 text-sm">Discover new opportunities and strategic pivots for growth</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Decision Frameworks</h3>
              <p className="text-charcoal/60 text-sm">Make informed decisions with AI-powered frameworks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
