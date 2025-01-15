import Card from "@/components/ui/card";
import { FaReact, FaNodeJs, FaDatabase, FaJava } from "react-icons/fa";
import { DiSwift } from "react-icons/di";

const Projects = () => {
    const projects = [
        { id: 1, title: "Chaps Challenge", description: "This was a group project where the retro game 'Chips Challenge' was recreated (with premission) with our own touches.", imgSrc: "/image1.jpeg", reversed: false, icons: [FaJava] },
        { id: 2, title: "Flight Tracker (WiP)", description: "A simple app that displays flight data such as departure and gate.", imgSrc: "/image2.jpeg", reversed: true, icons: [DiSwift]},
        { id: 3, title: "Project Three", description: "Description for project three.", imgSrc: "/image3.jpeg", reversed: false, icons: [FaReact, FaNodeJs, FaDatabase]},
    ];

    return (
        <section id="projects" className="mt-14 px-4 sm:px-6 lg:px-20 text-black">
            <h1 className="text-center text-4xl font-extrabold">
                Here are some of my works
            </h1>
            <div className="mt-10 grid grid-cols-1 gap-6">
                {projects.map((project) => (
                    <Card
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgSrc={project.imgSrc}
                        reversed={project.reversed}
                        icons={project.icons}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
