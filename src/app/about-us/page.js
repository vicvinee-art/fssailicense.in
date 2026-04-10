import Navbar from "../Components/Navbar";
import AboutUs from "../Components/Aboutus";
import AboutExpertise from "../Components/ourexpertise";
import FssaiProcessSection from "../Components/processaboutus";
import WhyChooseUs from "../Components/whychooseus";
import DisclaimerBar from "../Components/Disclaimer";
import Footer from "../Components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <AboutUs/>
      <AboutExpertise/>
      <FssaiProcessSection/>
      <WhyChooseUs/>
      <DisclaimerBar/>
      
      <Footer />
    </>
  );
}

