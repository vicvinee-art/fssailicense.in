import Navbar from "../Components/Navbar";
import RefundPolicy from "../Components/refundpolicy";
import DisclaimerBar from "../Components/Disclaimer";
import Footer from "../Components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <RefundPolicy/>
      <DisclaimerBar/>
      
      <Footer />
    </>
  );
}