import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import Gallery from "./sections/Gallery";
import Footer from "./sections/Footer";
import { useState, useEffect } from "react";

function App() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  //check if the layout is for mobile or desktop
  useEffect(() => {
    const getWidth = () => {
      setWidth(window.innerWidth);
    };

    if (width >= 832) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }

    window.addEventListener("resize", getWidth);

    return () => window.removeEventListener("resize", getWidth);
  }, [width]);

  return (
    <main>
      <Header />
      <Hero />
      <Services isDesktop={isDesktop} />
      <Testimonials />
      <Gallery isDesktop={isDesktop} />
      <Footer />
    </main>
  );
}

export default App;
