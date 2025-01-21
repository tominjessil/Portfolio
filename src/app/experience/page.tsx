import React from "react";
import ExpCard from "@/components/ui/expCard";

const experiences = [
  { id: 1, title: "Bachelor of Engineering (Honours)", description: "Majored in Software Engineering and concentrated in AI.", date: "2021-2024" },
];
const work = [
  { id: 2, title: "Team Member at Bunnings", description: "Retail and customer service", date: "Since November 2020",},
];
const certifications = [
  { id: 3, title: "AWS Certified Cloud Practitioner", description: "", date: "Recieved on June 2024" , link: { url: "https://www.credly.com/badges/658b4dca-b7af-4f4c-997b-80ba0cda2dbb/public_url", text: "View on Credly 🔗" } },
  { id: 4, title: "AWS Academy Cloud Foundations", description: "", date: "Recieved on September 2024" , link: { url: "https://www.credly.com/badges/487dc950-b404-48b7-bde3-65d592d086fc/public_url", text: "View on Credly 🔗" } },
];

const Experiences = () => {
  return (
    <section id="experience" className="mt-16 px-6 md:px-16 lg:px-48 text-black">
      <h1 className="text-4xl font-semibold text-center mb-10">My Experiences</h1>
      <div className="space-y-12">
        <div id="education">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="space-y-4">
            {experiences.map((exp) => (
              <ExpCard key={exp.id} title={exp.title} description={exp.description} date={exp.date} />
            ))}
          </div>
        </div>

        <div id="certifications">
          <h2 className="text-3xl font-bold mb-4">Certifications</h2>
          <div className="space-y-4">
            {certifications.map((cert) => (
              <ExpCard key={cert.id} title={cert.title} description={cert.description} date={cert.date} link={cert.link} />
            ))}
          </div>
        </div>

        <div id="work">
          <h2 className="text-3xl font-bold mb-4">Work</h2>
          <div className="space-y-4">
            {work.map((job) => (
              <ExpCard key={job.id} title={job.title} description={job.description} date={job.date} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
