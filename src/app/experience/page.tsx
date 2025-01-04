import React from "react";
import ExpCard from "@/components/ui/expCard";

const experiences = [
        { id: 1, title: "Bachelor of Engineering (Honours)", description: "Victoira Uni for 4 years", date: "2021-2024"},
        { id: 2, title: "Project Two", description: "Description for project two.", date: "/image2.jpeg"},
        { id: 3, title: "Project Three", description: "Description for project three.", date: "/image3.jpeg"},
    ];

const Experiences = () => {
    return (
        <section id = "experience" className="mt-16 px-48">
            <h1 className="text-center text-4xl font-bold">Here is some background</h1>
            {experiences.map((exp) => (
                    <ExpCard key={exp.id} title={exp.title} description={exp.description} date={exp.date} />
            ))}
        </section>
    );
}


export default Experiences;

{/* <div className="grid grid-cols-1 gap-6 text-center px-10 mt-10">
    <div id = "education" className="bg-green-300">
        <h1 className="text-center text-4xl font-bold">Education</h1>
        <p>Bachelor of Engineering with Honours</p>
        <p>AWS Certified Cloud Practictionar</p>
    </div>
    <div id = "work" className="bg-red-400">
        <h1 className="text-center text-4xl font-bold">Work</h1>
        <p>Team Member at Bunnings</p>
    </div>
</div> */}