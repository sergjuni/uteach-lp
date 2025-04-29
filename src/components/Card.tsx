interface CardProps {
  title: string;
  description: string;
  icon?: string;
  image?: string;
  className?: string;
}

const Card = ({ title, description, icon, image, className = '' }: CardProps) => {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-lg ${className}`}>
      {icon && <img src={icon} alt="" className="w-12 h-12 mb-4" />}
      {image && <img src={image} alt="" className="w-full h-48 object-cover rounded-lg mb-4" />}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card; 