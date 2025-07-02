import Hero from "./components/Hero"
import Features from "./components/Features"
import CTA from "./components/CTA"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </main>
  )
}
