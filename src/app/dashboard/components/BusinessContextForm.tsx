"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Building2, Users, Target, DollarSign, Calendar, ArrowRight } from "lucide-react"

export default function BusinessContextForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    stage: "",
    teamSize: "",
    revenue: "",
    mainChallenge: "",
    goals: "",
    timeline: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Store form data in localStorage for now (will be replaced with API call)
    localStorage.setItem("businessContext", JSON.stringify(formData))
    router.push("/dashboard/results")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="bg-white rounded-3xl p-8 card-shadow">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center space-x-2 text-charcoal font-medium mb-3">
              <Building2 className="w-5 h-5 text-teal" />
              <span>Company Name</span>
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-sage/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
              placeholder="Enter your company name"
              required
            />
          </div>

          <div>
            <label className="flex items-center space-x-2 text-charcoal font-medium mb-3">
              <Target className="w-5 h-5 text-teal" />
              <span>Industry</span>
            </label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-sage/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
              required
            >
              <option value="">Select your industry</option>
              <option value="technology">Technology</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="ecommerce">E-commerce</option>
              <option value="education">Education</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="flex items-center space-x-2 text-charcoal font-medium mb-3">
              <Calendar className="w-5 h-5 text-teal" />
              <span>Business Stage</span>
            </label>
            <select
              name="stage"
              value={formData.stage}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-sage/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
              required
            >
              <option value="">Select your stage</option>
              <option value="idea">Idea Stage</option>
              <option value="mvp">MVP/Prototype</option>
              <option value="early">Early Stage</option>
              <option value="growth">Growth Stage</option>
              <option value="scale">Scale Stage</option>
            </select>
          </div>

          <div>
            <label className="flex items-center space-x-2 text-charcoal font-medium mb-3">
              <Users className="w-5 h-5 text-teal" />
              <span>Team Size</span>
            </label>
            <select
              name="teamSize"
              value={formData.teamSize}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-sage/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
              required
            >
              <option value="">Select team size</option>
              <option value="1">Just me</option>
              <option value="2-5">2-5 people</option>
              <option value="6-10">6-10 people</option>
              <option value="11-25">11-25 people</option>
              <option value="25+">25+ people</option>
            </select>
          </div>
        </div>

        <div>
          <label className="flex items-center space-x-2 text-charcoal font-medium mb-3">
            <DollarSign className="w-5 h-5 text-teal" />
            <span>Monthly Revenue Range</span>
          </label>
          <select
            name="revenue"
            value={formData.revenue}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-sage/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
            required
          >
            <option value="">Select revenue range</option>
            <option value="0">Pre-revenue</option>
            <option value="1-1k">$1 - $1,000</option>
            <option value="1k-10k">$1,000 - $10,000</option>
            <option value="10k-50k">$10,000 - $50,000</option>
            <option value="50k-100k">$50,000 - $100,000</option>
            <option value="100k+">$100,000+</option>
          </select>
        </div>

        <div>
          <label className="block text-charcoal font-medium mb-3">What's your main growth challenge?</label>
          <textarea
            name="mainChallenge"
            value={formData.mainChallenge}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-sage/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
            placeholder="Describe your biggest challenge in growing your business..."
            required
          />
        </div>

        <div>
          <label className="block text-charcoal font-medium mb-3">
            What are your growth goals for the next 6 months?
          </label>
          <textarea
            name="goals"
            value={formData.goals}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-sage/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal"
            placeholder="Share your specific goals and what success looks like..."
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-teal text-white py-4 rounded-xl font-semibold hover:bg-teal/90 transition-all hover-lift flex items-center justify-center space-x-2"
        >
          <span>Generate Growth Insights</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </form>
    </div>
  )
}
