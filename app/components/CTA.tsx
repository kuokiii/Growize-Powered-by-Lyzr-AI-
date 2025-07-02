import Link from "next/link"
import { ArrowRight, Sparkles, Zap } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-coral/10 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-peach/10 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-mint/5 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-coral via-peach to-mint rounded-3xl blur-xl opacity-20"></div>
          <div className="relative bg-gradient-to-r from-coral via-peach to-mint rounded-3xl p-12 md:p-16 text-white shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
                <Zap className="w-5 h-5 text-white animate-pulse" />
                <span className="text-sm font-bold text-white">Powered by Lyzr AI</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins leading-tight">
              Ready to{" "}
              <span className="relative">
                <span className="text-white">Accelerate Your Growth</span>
                <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-yellow-300 animate-pulse" />
              </span>
              ?
            </h2>

            <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed max-w-3xl mx-auto">
              Join <span className="font-bold text-yellow-300">thousands of startups</span> using{" "}
              <span className="font-bold bg-white/20 px-3 py-1 rounded-lg backdrop-blur-sm">AI-powered insights</span>{" "}
              to make smarter business decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/dashboard"
                className="group inline-flex items-center space-x-3 bg-white text-coral px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 border-2 border-white"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/pricing"
                className="group inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/30 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border-2 border-white/30"
              >
                <span>View Pricing</span>
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
