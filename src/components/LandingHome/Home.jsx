import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import Accordion from "./Accordion";
import { Hero } from "./Hero";
import { LatestArticles } from "./LatestArticles";
import { PcosSolution } from "./PcosSolution";
import { SecondSection } from "./SecondSection";

export const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <div>
        <Hero />
        <SecondSection />
        <PcosSolution />
        <LatestArticles />
        <Accordion />
        <Footer />
      </div>
    </div>
  );
};
