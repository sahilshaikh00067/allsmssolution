import CTASection from "./CTASection";
import FAQ from "./FAQ";
import Hero from "./Hero";
import MoreServices from "./MoreServices";
import Products from "./Products";

const Home = () => {
  return (
    <>
    <Hero />
    <Products />
    {/* <MoreServices/> */}
    <FAQ />
    <CTASection />

    </>
  );
};

export default Home;