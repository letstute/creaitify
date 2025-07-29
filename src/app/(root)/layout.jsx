import Header from "@/components/Header";
// import HeroSection from "@/components/HeroSection";
import OurServices from "@/components/OurServices";
import NumberSectionComponent from "@/components/NumberSectionComponent";
import TestimonialSectionComponent from "@/components/TestimonialSectionComponent";
import BrandsNow from "@/components/BrandsNow";
import WhyChooseUs from "@/components/WhyChooseUs";
// import VisionariesSectionComponent from "@/components/VisionariesSectionComponent";
// import OurTeam from "@/components/OurTeam";
import FAQComponent from "@/components/FAQItem";
import ContactUs from "@/components/ContactUs";
import CallToActionSectionComponent from "@/components/CallToActionSectionComponent";
import NewOurTeam from "@/components/NewOurTeam";
import FooterComponent from "@/components/Footer";
import NewHero from "@/components/NewHero";
import OurProcessVideo from "@/components/OurProcessVideo";
import CollaborationSection from "@/components/Collaboration";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <NewHero />
      {/* <HeroSection /> */}
      <BrandsNow />
      <WhyChooseUs />
      <OurServices />
      <OurProcessVideo />
      <CollaborationSection />
      <NumberSectionComponent />
      <NewOurTeam />
      {/* <VisionariesSectionComponent /> */}
      <CallToActionSectionComponent />
      {/* <OurTeam /> */}
      <FAQComponent />
      <ContactUs />
      <FooterComponent />
    </>
  );
}
