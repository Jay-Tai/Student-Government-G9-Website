import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import PlatformSection from "@/components/platform-section"
import SignupSection from "@/components/signup-section"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main style={{ backgroundColor: "#FEFAE0" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PlatformSection />
      <SignupSection />
      <Footer />
    </main>
  )
}
