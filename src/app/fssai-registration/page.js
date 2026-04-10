import Navbar from "../Components/Navbar";
import FssaiHero from "../Components/herofssaireg";
import FssaiRegistration from "../Components/contentfssaireg";
import WhyChooseUs from "../Components/whychooseus";
import FssaiFAQreg from "../Components/faqfssaireg";
import DisclaimerBar from "../Components/Disclaimer";
import Footer from "../Components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <FssaiHero />
      <FssaiRegistration/>
      
      <WhyChooseUs/>
      <FssaiFAQreg/>
      <DisclaimerBar/>
      
      <Footer />
    </>
  );
}