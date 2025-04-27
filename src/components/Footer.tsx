import React from 'react';
import { Youtube, Twitter, Facebook, Instagram} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#203559] text-white pt-12 pb-6">
      <div className="container-custom">
        {/* Награды */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <div className="flex flex-col items-center">
            <img src="/images/award1.png" alt="Лучший сервис" className="w-20 h-20 aspect-[3.5/1] object-contain mb-2" />
          </div>

          <div className="flex flex-col items-center">
            <img src="/images/award2.png" alt="Лучший флот" className="w-20 h-20 aspect-[3.5/1] object-contain mb-2" />
          </div>

          <div className="flex flex-col items-center">
            <img src="/images/award3.png" alt="Выбор путешественников" className="w-20 h-20 aspect-[3.5/1] object-contain mb-2" />
          </div>
        </div>

        {/* Разделитель с названием компании */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-px bg-gray-700 flex-grow"></div>
          <div className="px-4 font-serif text-xl text-white">Royal Port Group</div>
          <div className="h-px bg-gray-700 flex-grow"></div>
        </div>

        {/* Социальные сети */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Youtube size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Instagram size={24} />
          </a>
        </div>

        {/* Копирайт */}
        <div className="text-center text-gray-500 text-sm">
          © 2025 Port International
        </div>
      </div>
    </footer>
  );
};

export default Footer;