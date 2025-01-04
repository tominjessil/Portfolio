import Card from "@/components/ui/card";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

const Projects = () => {
    const projects = [
        { id: 1, title: "Project One", description: "Description for project one.", imgSrc: "/image1.jpeg", reversed: false },
        { id: 2, title: "Project Two", description: "Description for project two.", imgSrc: "/image2.jpeg", reversed: true },
        { id: 3, title: "Project Three", description: "Description for project three.", imgSrc: "/image3.jpeg", reversed: false, icons: [FaReact, FaNodeJs, FaDatabase] },
    ];

    return (
        <section id="projects" className="mt-20 px-4 sm:px-6 lg:px-20">
            <h1 className="text-center mt-10 text-4xl font-extrabold">
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
