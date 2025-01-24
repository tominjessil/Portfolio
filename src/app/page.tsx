import Intro from "./intro/page";
import NavBar from "../components/ui/navbar";
import Projects from "./projects/page";
import Experiences from "./experience/page";
import Contact from "./contact/page";
import { Toaster } from "sonner";
import Resume from "@/components/ui/resume";

export default function Home() {
  return (
    <div className="bg-bg-custom">
      <NavBar />
      <Intro />
      <Projects />
      <Experiences />
      <Resume/>
      <Contact />
      <Toaster position="bottom-right" />
    </div>
  );
}
