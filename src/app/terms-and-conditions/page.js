import Navbar from "../Components/Navbar";
import TermsConditions from "../Components/termncondition";
import DisclaimerBar from "../Components/Disclaimer";
import Footer from "../Components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <TermsConditions/>
      <DisclaimerBar/>
      
      <Footer />
    </>
  );
}