import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Contact from "./contact/page";
import About from "./about/page";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <br />
      <About />
      <br />
      <Contact />
      
      <Footer />
    </div>
  );
}
