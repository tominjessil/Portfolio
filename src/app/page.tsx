import Image from "next/image";
import Intro from "./intro/page" 
import NavBar from "../components/ui/navbar";

export default function Home() {
  return (
    <div>
    <NavBar/>
    <Intro/>
    </div>
  );
}
