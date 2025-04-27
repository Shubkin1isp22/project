import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface CruiseCardProps {
  imageSrc: string;
  title: string;
  destination: string;
  duration: string;
  departureDate: string;
  price: string;
}

const CruiseCard: React.FC<CruiseCardProps> = ({
  imageSrc,
  title,
  destination,
  duration,
  departureDate,
  price
}) => {
  return (
    <div className="card transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
      <div className="relative">
        <img src={imageSrc} alt={title} className="card-image" />
        <div className="absolute top-0 right-0 bg-sea-blue-600 text-white py-1 px-3 text-sm font-bold">
          {price} ₽
        </div>
      </div>
      <div className="card-body">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-center mb-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4 mr-1" /> {destination}
        </div>
        <div className="flex items-center mb-2 text-sm text-gray-600">
          <Clock className="w-4 h-4 mr-1" /> {duration}
        </div>
        <div className="flex items-center mb-4 text-sm text-gray-600">
          <Calendar className="w-4 h-4 mr-1" /> {departureDate}
        </div>
        <button className="btn btn-primary w-full">Забронировать</button>
      </div>
    </div>
  );
};

export default CruiseCard;