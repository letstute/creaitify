import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OurServices from "@/components/OurServices";
import NumberSectionComponent from "@/components/NumberSectionComponent";
import TestimonialSectionComponent from "@/components/TestimonialSectionComponent";
import BrandsNow from "@/components/BrandsNow";
import WhyChooseUs from "@/components/WhyChooseUs";
import VisionariesSectionComponent from "@/components/VisionariesSectionComponent";
import OurTeam from "@/components/OurTeam";
import FAQComponent from "@/components/FAQItem";
import ContactUs from "@/components/ContactUs";
import CallToActionSectionComponent from "@/components/CallToActionSectionComponent";
import FooterComponent from "@/components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <HeroSection />
      <BrandsNow />
      <WhyChooseUs />
      <OurServices />
      <NumberSectionComponent />
      <VisionariesSectionComponent />
      <CallToActionSectionComponent />
      <OurTeam />
      <FAQComponent />
      <ContactUs />
      <FooterComponent />
    </>
  );
}
