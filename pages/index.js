import { Header } from "@/components/Header";
import { About } from "@/components/about";
import { ContactMe } from "@/components/contact-me";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Work } from "@/components/work";
import longText from "@/components/longText"


export default function Home() {
  return (
    <main className="mx-20">
      <Header />
      <Hero /> 
      <About info={{picture: "/images/Pic.svg", title: "About me"}}/>
      <Skills/>
      <Experience/>
      <Work/>
      <ContactMe/>
      <Footer/> 
    </main>
  );
}
