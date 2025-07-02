import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import { Check, Star } from "lucide-react"

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for early-stage startups",
      features: [
        "Basic growth insights",
        "3 pivot suggestions per month",
        "Email support",
        "Basic decision frameworks",
      ],
      color: "border-mint/30",
      buttonColor: "bg-mint hover:bg-mint/90 text-white",
    },
    {
      name: "Growth",
      price: "$79",
      period: "/month",
      description: "Ideal for scaling businesses",
      features: [
        "Advanced AI insights",
        "Unlimited pivot suggestions",
        "Priority support",
        "All decision frameworks",
        "Custom recommendations",
        "Team collaboration",
      ],
      color: "border-coral ring-2 ring-coral/20",
      buttonColor: "bg-coral hover:bg-coral/90 text-white",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For established companies",
      features: [
        "Everything in Growth",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced analytics",
        "White-label options",
        "24/7 phone support",
      ],
      color: "border-peach/30",
      buttonColor: "bg-peach hover:bg-peach/90 text-white",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-coral to-peach bg-clip-text text-transparent">Growth Plan</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select the perfect plan to accelerate your business growth with AI-powered insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 ${plan.color} relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-coral text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1 shadow-lg">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-coral flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full ${plan.buttonColor} py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border-2 border-transparent`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 mb-4">Need a custom solution?</p>
            <button className="text-coral hover:text-coral/80 font-semibold bg-coral/10 hover:bg-coral/20 px-6 py-3 rounded-lg transition-all duration-300">
              Contact our sales team
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
