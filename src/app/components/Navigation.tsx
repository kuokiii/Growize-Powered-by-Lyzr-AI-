"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, TrendingUp } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-ivory/95 backdrop-blur-sm z-50 border-b border-sage/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-teal rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-charcoal font-poppins">Growize</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-charcoal hover:text-teal transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-charcoal hover:text-teal transition-colors">
              How it Works
            </Link>
            <Link
              href="/dashboard"
              className="bg-teal text-white px-6 py-2 rounded-full hover:bg-teal/90 transition-colors"
            >
              Get Started
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-ivory border-t border-sage/20">
              <Link href="#features" className="block px-3 py-2 text-charcoal hover:text-teal">
                Features
              </Link>
              <Link href="#how-it-works" className="block px-3 py-2 text-charcoal hover:text-teal">
                How it Works
              </Link>
              <Link href="/dashboard" className="block px-3 py-2 bg-teal text-white rounded-lg text-center">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
