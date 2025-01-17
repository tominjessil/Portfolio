import PCard from "@/components/ui/pcard";
import { FaReact, FaNodeJs, FaDatabase, FaJava } from "react-icons/fa";
import { DiSwift } from "react-icons/di";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Chaps Challenge",
            description:
                "This was a group project where the retro game 'Chips Challenge' was recreated (with permission) with our own touches.",
            imgSrc: "/image1.jpeg",
            icons: [FaJava],
        },
        {
            id: 2,
            title: "Flight Tracker (WiP)",
            description:
                "A simple app that displays flight data such as departure and gate.",
            imgSrc: "/image2.jpeg",
            icons: [DiSwift],
        },
        {
            id: 3,
            title: "Project Three",
            description: "Description for project three.",
            imgSrc: "/image3.jpeg",
            icons: [FaReact, FaNodeJs, FaDatabase],
        },
    ];

    return (
        <section id="projects" className="flex flex-col items-center bg-black py-10">
        <h1 className="text-center text-3xl font-extrabold text-white mb-8">
            Here are some of my works
        </h1>
        {/* Modified grid setup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 w-full max-w-4xl mx-auto justify-items-center align-middle">
        {projects.map((project) => (
                <PCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgSrc={project.imgSrc}
                    icons={project.icons}
                />
            ))}
        </div>
    </section>
    );
};

export default Projects;