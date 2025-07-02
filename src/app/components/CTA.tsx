import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="gradient-bg rounded-3xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Ready to Accelerate Your Growth?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of startups using AI-powered insights to make smarter business decisions.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center space-x-2 bg-white text-teal px-8 py-4 rounded-full font-semibold hover:bg-ivory transition-all hover-lift"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
