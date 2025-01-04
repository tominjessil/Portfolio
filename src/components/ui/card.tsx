import { IconType } from "react-icons";

interface CardProps {
    title: string;
    description: string;
    imgSrc: string;
    reversed?: boolean; 
    icons?: IconType[]
}

const Card: React.FC<CardProps> = ({ title, description, imgSrc, reversed = false, icons = []}) => {
    return (
        <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} rounded-2xl overflow-hidden shadow-lg bg-white p-4`}>
            <div className="w-full md:w-1/3 bg-white p-2">
                <img src={imgSrc} alt={title} className="w-full h-48 md:h-full object-cover rounded-md" />
            </div>
            <div className={`w-full md:w-2/3 p-4 ${reversed ? 'text-left' : 'text-right'} flex flex-col justify-between`}>
                <div>
                    <h2 className="text-3xl font-bold mb-2">{title}</h2>
                    <p className="text-gray-600 text-base">{description}</p>
                </div>
                <div className={`mt-4 self-center ${reversed ? 'md:self-start' : 'md:self-end'}`}>
                    {icons.length > 0 && (
                        <div className = "flex space-x-4">
                            {icons.map((Icon, index) => (
                                <Icon key={index} size={32}/>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;


