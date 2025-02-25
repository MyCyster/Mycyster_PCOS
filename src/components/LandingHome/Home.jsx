import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { Hero } from "./Hero";
import { LatestArticles } from "./LatestArticles";
import { PcosSolution } from "./PcosSolution";
import { SecondSection } from "./SecondSection";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SecondSection />
      <PcosSolution />
      <LatestArticles />
      <Footer />
    </div>
  );
};
