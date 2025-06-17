/* eslint-disable no-irregular-whitespace */
import "./App.css";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Product from "./components/sections/Product";
import Testimony from "./components/sections/Testimony";
import Button from "./components/ui/Button";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
import TestimonialSlider from "./components/ui/TestimonialSlider";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full max-w-full">
        <Hero />
        <About />
        <Product />
        <Testimony />
      </main>
      <Footer />
    </>
  );
}

export default App;
