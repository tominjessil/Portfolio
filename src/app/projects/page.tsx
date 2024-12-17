import Card from "@/components/ui/card";

const Projects = () => {
    const projects = [
        { id: 1, title: "Project One", description: "Description for project one.", imgSrc: "/image1.jpeg" },
        { id: 2, title: "Project Two", description: "Description for project two.", imgSrc: "/image2.jpeg" },
        { id: 3, title: "Project Three", description: "Description for project three.", imgSrc: "/image3.jpeg" },
    ];

    return (
        <div>
            <h1 className="text-center mt-10 text-4xl font-extrabold">
                Here are some of my works
            </h1>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
                {projects.map((project) => (
                    <Card key={project.id} title={project.title} description={project.description} imgSrc={project.imgSrc} />
                ))}
            </div>
        </div>
    );
};

export default Projects;