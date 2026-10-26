import AboutSection from '@/components/about-section'
import ApproachSection from '@/components/approach-section'
import CareerSection from '@/components/career-section'
import HeroSection from '@/components/hero-section'
import PortfolioFooter from '@/components/portfolio-footer'
import PortfolioHeader from '@/components/portfolio-header'
import WorkSection from '@/components/work-section'

export default function Home() {
  return (
    <main>
      <PortfolioHeader />
      <HeroSection />
      <ApproachSection />
      <WorkSection />
      <AboutSection />
      <CareerSection />
      <PortfolioFooter />
    </main>
  )
}
