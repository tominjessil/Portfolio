import React from "react";

interface ExpCardProps {
  title: string;
  description: string;
  date: string;
  link?: { url: string; text: string };
}

const ExpCard: React.FC<ExpCardProps> = ({ title, description, date, link }) => {
  return (
    <div className="flex flex-col mb-6">
      <div className="flex flex-col sm:flex-row justify-between">
      <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-blue-500 font-bold">{date}</p>
      </div>
      <p className="text-base mt-2">{description}</p>
      {link && (
          <a
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500"
          >
            {link.text}
          </a>
      )}
    </div>
  );
};

export default ExpCard;
