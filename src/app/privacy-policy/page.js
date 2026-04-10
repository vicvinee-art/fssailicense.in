import Navbar from "../Components/Navbar";
import PrivacyPolicy from "../Components/privacypolicy";
import DisclaimerBar from "../Components/Disclaimer";
import Footer from "../Components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <PrivacyPolicy/>
      <DisclaimerBar/>
      
      <Footer />
    </>
  );
}