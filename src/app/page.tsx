import Intro from "./intro/page";
import NavBar from "../components/ui/navbar";
import Projects from "./projects/page";
import Experiences from "./experience/page";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Intro />
      <Projects />
      <Experiences />
    </div>
  );
}
