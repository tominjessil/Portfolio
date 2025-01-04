interface ExpCardProps {
    title: string;
    description: string;
    date: string;
}

const ExpCard: React.FC<ExpCardProps> = ({ title, description, date }) => {
    return (
        <div className={`flex flex-col rounded-2xl overflow-hidden mt-8 mx-auto`}>
            <div className="flex justify-between w-full">
                <h2 className="text-3xl font-bold">{title}</h2>
                <p className="text-blue-400 font-bold text-base">{date}</p>
            </div>
            <div className="py-4">
                <p className=" text-base">{description}</p>
            </div>
        </div>
    );
};

export default ExpCard;


