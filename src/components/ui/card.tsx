import React from "react";

interface CardProps{
    title:string,
    description: string,
    imgSrc: string
}

const Card: React.FC<CardProps> = ({ title, description, imgSrc }) => {
    return (
        <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
            <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default Card;