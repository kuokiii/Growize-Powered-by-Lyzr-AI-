import BusinessContextForm from "./components/BusinessContextForm"
import Navigation from "../components/Navigation"

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      <div className="pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
              Tell Us About Your Business
            </h1>
            <p className="text-xl text-gray-600">
              Share your business context and growth challenges to get personalized AI-powered insights.
            </p>
          </div>
          <BusinessContextForm />
        </div>
      </div>
    </main>
  )
}
