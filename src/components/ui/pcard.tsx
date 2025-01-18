import { IconType } from "react-icons";

interface PCardProps {
    title: string;
    description: string;
    imgSrc: string;
    reversed?: boolean;
    icons?: IconType[];
}

const PCard: React.FC<PCardProps> = ({ title, description, imgSrc, icons = [] }) => {
    return (
        <div className="rounded-2xl flex flex-col bg-white shadow hover:shadow-lg w-full">
            {/* Image Section */}
            <div className="w-full">
                <img
                    src={imgSrc}
                    alt={title}
                    className="w-full h-36 object-cover rounded-t-lg"
                />
            </div>
            {/* Text Content */}
            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">{title}</h2>
                <p className="text-gray-600 mt-2 text-base">{description}</p>
                {icons.length > 0 && (
                    <div className="flex mt-3 space-x-2">
                        {icons.map((Icon, index) => (
                            <Icon
                                key={index}
                                size={25}
                                className="text-gray-500 hover:text-blue-500 transition"
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};


export default PCard;
