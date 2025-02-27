import PCard from "@/components/ui/pcard";
import { FaJava, FaPython, FaReact, FaSwift } from "react-icons/fa";
import { RiSvelteFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";


const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Chaps Challenge",
            description:
                "This was a group project where the retro game 'Chips Challenge' was recreated (with permission) with our own touches.",
            imgSrc: "/image1.png",
            icons: [FaJava],
        },
        {
            id: 2,
            title: "ML with IGP",
            description:
                "Growth rate classifiction for a marine species using Interval Genetic Programming.",
            imgSrc: "/image2.png",
            icons: [FaPython],
        },
        {
            id: 3,
            title: "Course Visualiser",
            description:
                "Designed to assist course advisors at Victoria University. Done as part of a group project.",
            imgSrc: "/image3.png",
            icons: [RiSvelteFill, SiTypescript],
        },
        {
            id: 4,
            title: "Wordle Clone",
            description:
                "A clone of the beloved Wordle game. Done as part of a group project.",
            imgSrc: "/image4.png",
            icons: [FaReact],
        }
    ];

    return (
        <section id="projects" className="flex flex-col items-center mt-16">
        <h1 className="text-center text-4xl font-semibold text-black mb-10">
            Here are some things I have worked on
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