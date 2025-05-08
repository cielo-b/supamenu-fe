import { LandingCardProps } from "../interfaces/interfaces";

const LandingCard = ({ icon, title, desc }: LandingCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col items-center text-center">
        <div className="icon text-4xl text-amber-500 mb-4">{icon}</div>
        <h2 className="title font-extrabold text-xl text-gray-800 mb-2">{title}</h2>
        <p className="description text-gray-600">{desc}</p>
      </div>
    </div>
  );
};

export default LandingCard;
