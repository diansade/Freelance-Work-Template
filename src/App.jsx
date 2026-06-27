import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Specials from "./components/Specials.jsx";
import About from "./components/About.jsx";
import Menu from "./components/Menu.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import PopularDishes from "./components/PopularDishes.jsx";
import Gallery from "./components/Gallery.jsx";
import Reviews from "./components/Reviews.jsx";
import Reservation from "./components/Reservation.jsx";
import Location from "./components/Location.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import FloatingActions from "./components/FloatingActions.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 850);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Specials />
        <About />
        <Menu />
        <WhyChooseUs />
        <PopularDishes />
        <Gallery />
        <Reviews />
        <Reservation />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}

export default App;
