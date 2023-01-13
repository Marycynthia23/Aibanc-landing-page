import DownloadCont from "./DownloadCont/DownloadCont";
import FAQ from "./FAQ/FAQ";
import Footer from "./Footer/Footer";
import HeroSection from "./HeroSection/HeroSection";
import HowItWorks from "./HowItWorks/HowItWorks";
import Navbar from "./Navbar/Navbar";
import Testimonals from "./Testimonals/Testimonals";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <HowItWorks/>
      <DownloadCont/>
      <Testimonals/>
      <FAQ/>
      <Footer/>

    </div>
  );
}

export default App;
