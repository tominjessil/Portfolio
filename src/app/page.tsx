import Image from "next/image";
import Intro from "./intro/page";
import NavBar from "../components/ui/navbar";
import Projects from "./projects/page";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Intro />
      <Projects />
    </div>
  );
}
