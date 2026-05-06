import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PopularCategories from "@/components/PopularCategories";

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection />
      <Features />
      <PopularCategories />
      <Footer/>
    </>
  );
}
