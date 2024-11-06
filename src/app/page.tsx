import Footer from "./components/footer";
import Hero from "./components/hero";
import Hero1, { Hero2, Hero3, Hero4 } from "./components/hero1";
import Navbar from "./components/navbar";
import Next,{ Next2, Next3, Next4, Next5, Next6 } from "./components/next";
import Pricing from "./components/pricing";

export default function Home() {
  return (
  <div>
    <Navbar/>
    <Hero/>
    <Hero1/>
    <Hero2/>
    <Hero3/>
    <Hero4/>
    <Pricing/>
    <Next/>
    <Next2/>
    <Next3/>
    <Next4/>
    <Next5/>
    <Next6/>
    <Footer/>
  </div>
  );
}
