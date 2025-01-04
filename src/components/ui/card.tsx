import { IconType } from "react-icons";

interface CardProps {
    title: string;
    description: string;
    imgSrc: string;
    reversed?: boolean;
    icons?: IconType[];
}

const Card: React.FC<CardProps> = ({ title, description, imgSrc, reversed = false, icons = [] }) => {
    return (
        <div
            className={`flex flex-col md:flex-row ${
                reversed ? "md:flex-row-reverse" : ""
            } rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-300 bg-white mx-auto w-full max-w-[900px] p-2 sm:p-4`}
        >
            {/* Image Section */}
            <div className="w-full">
                <img
                    src={imgSrc}
                    alt={title}
                    className="w-full h-auto object-cover sm:h-48 md:h-56 lg:h-64"
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-between p-4 w-full">
                {/* Title and Description */}
                <div className="text-center">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-2">{title}</h2>
                    <p className="text-gray-600 text-sm lg:text-base">{description}</p>
                </div>

                {/* Icons Section */}
                {icons.length > 0 && (
                    <div className="mt-4 flex justify-center space-x-4">
                        {icons.map((Icon, index) => (
                            <Icon key={index} size={32} className="text-gray-500 hover:text-blue-500 transition" />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
