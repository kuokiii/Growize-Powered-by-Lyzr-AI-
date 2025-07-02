"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, TrendingUp, Zap } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-coral to-coral/80 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-80 animate-pulse"></div>
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900 font-poppins group-hover:text-coral transition-colors">
                Growize
              </span>
              <div className="flex items-center space-x-1 -mt-1">
                <Zap className="w-3 h-3 text-coral" />
                <span className="text-xs font-semibold text-coral">AI</span>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-gray-700 hover:text-coral transition-colors font-medium relative group"
            >
              Features
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-coral transition-colors font-medium relative group"
            >
              Pricing
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link
              href="/dashboard"
              className="bg-coral hover:bg-coral/90 text-white px-8 py-3 rounded-2xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105 border-2 border-coral"
            >
              <span className="flex items-center space-x-2">
                <span>Get Started</span>
                <Zap className="w-4 h-4" />
              </span>
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-xl bg-gray-100 border border-gray-200 hover:bg-gray-200 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 rounded-b-2xl shadow-lg">
              <Link
                href="#features"
                className="block px-4 py-3 text-gray-700 hover:text-coral hover:bg-gray-50 rounded-xl transition-colors font-medium"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="block px-4 py-3 text-gray-700 hover:text-coral hover:bg-gray-50 rounded-xl transition-colors font-medium"
              >
                Pricing
              </Link>
              <Link
                href="/dashboard"
                className="block px-4 py-3 bg-coral hover:bg-coral/90 text-white rounded-xl text-center font-semibold shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
