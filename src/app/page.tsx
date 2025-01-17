import Intro from "./intro/page";
import NavBar from "../components/ui/navbar";
import Projects from "./projects/page";
import Experiences from "./experience/page";
import Contact from "./contact/page";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <div className="bg-white">
      <NavBar />
      <Intro />
      <Projects />
      <Experiences />
      <Contact />
      <Toaster position="bottom-right" />
    </div>
  );
}
