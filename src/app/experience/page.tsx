import React from "react";

const Experiences = () => {
    return (
        <section id = "experience" className="mt-20">
            <h1 className="text-center text-4xl font-bold">Here is some background</h1>
            <div className="grid grid-cols-1 gap-6 text-center px-10 mt-10">
                <div id = "education" className="bg-green-300">
                    <h1 className="text-center text-4xl font-bold">Education</h1>
                    <p>Bachelor of Engineering with Honours</p>
                    <p>AWS Certified Cloud Practictionar</p>
                </div>
                <div id = "work" className="bg-red-400">
                    <h1 className="text-center text-4xl font-bold">Work</h1>
                    <p>Team Member at Bunnings</p>
                </div>
            </div>
        </section>
    );
}


export default Experiences;