'use client';



import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import SolutionsSection from '@/components/SolutionsSection';
import UsageFeatures from '@/components/UsageFeatures';
import FeaturesGrid from '@/components/FeaturesGrid';
import WhyChooseUs from '@/components/WhyChooseUs';
import CustomizationSection from '@/components/CustomizationSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <Hero />
      <ProductShowcase />
      <SolutionsSection />
      <UsageFeatures />
      <FeaturesGrid />
      <WhyChooseUs />
      <CustomizationSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
