import AboutSection from "@/components/shared/home/about";
import Hero from "@/components/shared/home/hero";
import HowItWorks from "@/components/shared/home/how-it-works";
import JobSearchSection from "@/components/shared/home/stats";
import Target from "@/components/shared/home/target";
import TestimonialsSection from "@/components/shared/home/testimonials";
import WhyChooseTalenxify from "@/components/shared/home/why-choose";

export default function Home() {
  return (
    <div>
      <Hero />
      <JobSearchSection />
      <AboutSection />
      <Target />
      <HowItWorks />
      <WhyChooseTalenxify />
      <TestimonialsSection />
    </div>
  );
}
