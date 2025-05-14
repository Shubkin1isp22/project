import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Anchor, Ship, Users, Trophy, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero секция */}
        <section className="py-12  bg-cover bg-center text-white relative">
          <div className="absolute inset-0 bg-black bg-opacity-0"></div>
          <div className="container-custom relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">О компании Port</h1>
          </div>
        </section>
        
        {/* История компании */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-sea-blue-800">
                История компании
              </h2>
              <div className="space-y-6 text-lg">
                <p>
                  Port исследует моря более 300 лет. 
                  То, что началось с одного корабля, переросло в великолепный флот.
                </p>
                <p>
                  На протяжении веков семья Борджиа посвятила себя плаванию в океанах
                   и в 1970 году основала Средиземноморское пароходство, которое сейчас является вторым по величине контейнеровозом в мире.
                </p>
                <p>
                  Обладая таким богатым наследием в мореплавании и любовью к морю,
                  Port Cruises открылась в 1988 году и стала одной из самых быстрорастущих круизных компаний в мире, 
                  имея в своем распоряжении флот из 5 судов.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Наши ценности */}
        <section className="section bg-gray-100">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center text-sea-blue-800">
              Наши ценности
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <Ship className="w-12 h-12 text-sea-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Безопасность</h3>
                <p>Безопасность пассажиров — наш главный приоритет во всех аспектах морских путешествий</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <Trophy className="w-12 h-12 text-sea-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Качество</h3>
                <p>Мы стремимся к совершенству в каждой детали, от обслуживания до организации маршрутов</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <Users className="w-12 h-12 text-sea-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Комфорт</h3>
                <p>Создаем атмосферу домашнего уюта и роскоши на каждом нашем круизном лайнере</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <Globe className="w-12 h-12 text-sea-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Инновации</h3>
                <p>Постоянно внедряем новые технологии и подходы для улучшения вашего отдыха</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Наш флот */}
        <section className="section bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8 text-center text-sea-blue-800">
              Наш флот
            </h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12">
              Современные круизные лайнеры Port International — это плавучие города, 
              оснащенные всем необходимым для незабываемого отдыха
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card">
                <img 
                  src="http://localhost:8000/media/messages/aurora.png" 
                  alt="Port Majesty" 
                  className="card-image"
                />
                <div className="card-body">
                  <h3 className="text-xl font-bold mb-2">Port Majesty</h3>
                  <p className="mb-4">Флагман нашего флота — круизный лайнер класса люкс с просторными каютами и 5 ресторанами</p>
                  <div className="text-sm text-gray-600">
                    <div className="mb-1">Вместимость: 3,500 пассажиров</div>
                    <div className="mb-1">Длина: 330 метров</div>
                    <div>Год постройки: 2020</div>
                  </div>
                </div>
              </div>
              <div className="card">
                <img 
                  src="http://localhost:8000/media/messages/pexel.jpeg" 
                  alt="Port Discovery II" 
                  className="card-image"
                />
                <div className="card-body">
                  <h3 className="text-xl font-bold mb-2">Port Discovery II</h3>
                  <p className="mb-4">Современный лайнер среднего размера с акцентом на комфорт и уникальные маршруты</p>
                  <div className="text-sm text-gray-600">
                    <div className="mb-1">Вместимость: 2,100 пассажиров</div>
                    <div className="mb-1">Длина: 290 метров</div>
                    <div>Год постройки: 2018</div>
                  </div>
                </div>
              </div>
              <div className="card">
                <img 
                  src="http://localhost:8000/media/messages/pexel2.jpeg" 
                  alt="Port Elegance" 
                  className="card-image"
                />
                <div className="card-body">
                  <h3 className="text-xl font-bold mb-2">Port Elegance</h3>
                  <p className="mb-4">Лайнер премиум-класса с просторным SPA-центром и панорамными ресторанами</p>
                  <div className="text-sm text-gray-600">
                    <div className="mb-1">Вместимость: 2,800 пассажиров</div>
                    <div className="mb-1">Длина: 310 метров</div>
                    <div>Год постройки: 2022</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;