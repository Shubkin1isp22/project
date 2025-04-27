import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SchedulePage: React.FC = () => {
  const scheduleData = [
    {
      id: 1,
      cruise: 'Средиземноморское путешествие',
      ship: 'Port Majesty',
      departure: 'Барселона',
      destination: 'Рим',
      departureDate: '15.06.2025',
      arrivalDate: '22.06.2025',
      status: 'Бронирование открыто',
    },
    {
      id: 2,
      cruise: 'Скандинавские фьорды',
      ship: 'Port Discovery II',
      departure: 'Санкт-Петербург',
      destination: 'Осло',
      departureDate: '22.07.2025',
      arrivalDate: '01.08.2025',
      status: 'Бронирование открыто',
    },
    {
      id: 3,
      cruise: 'Карибское приключение',
      ship: 'Port Elegance',
      departure: 'Майами',
      destination: 'Нассау',
      departureDate: '05.08.2025',
      arrivalDate: '17.08.2025',
      status: 'Бронирование открыто',
    },
    {
      id: 4,
      cruise: 'Азиатский вояж',
      ship: 'Port Majesty',
      departure: 'Сингапур',
      destination: 'Гонконг',
      departureDate: '12.09.2025',
      arrivalDate: '24.09.2025',
      status: 'Скоро в продаже',
    },
    {
      id: 5,
      cruise: 'Путешествие в Грецию',
      ship: 'Port Elegance',
      departure: 'Венеция',
      destination: 'Афины',
      departureDate: '03.10.2025',
      arrivalDate: '10.10.2025',
      status: 'Скоро в продаже',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <section className="py-12 bg-ocean-view bg-cover bg-center text-white relative">
          <div className="absolute inset-0 bg-black bg-opacity-0"></div>
          <div className="container-custom relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Расписание круизов</h1>
          </div>
        </section>
        
        <section className="section bg-white">
          <div className="container-custom">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-600 text-white">
                    <th className="py-3 px-4 text-left">Круиз</th>
                    <th className="py-3 px-4 text-left">Лайнер</th>
                    <th className="py-3 px-4 text-left">Отправление</th>
                    <th className="py-3 px-4 text-left">Прибытие</th>
                    <th className="py-3 px-4 text-left">Дата отправления</th>
                    <th className="py-3 px-4 text-left">Дата прибытия</th>
                    <th className="py-3 px-4 text-left">Статус</th>
                    <th className="py-3 px-4 text-left">Действие</th>
                  </tr>
                </thead>
                <tbody>
                  {scheduleData.map((item, index) => (
                    <tr 
                      key={item.id} 
                      className={`border-b hover:bg-gray-50 transition-colors ${
                        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                      }`}
                    >
                      <td className="py-4 px-4 font-medium">{item.cruise}</td>
                      <td className="py-4 px-4">{item.ship}</td>
                      <td className="py-4 px-4">{item.departure}</td>
                      <td className="py-4 px-4">{item.destination}</td>
                      <td className="py-4 px-4">{item.departureDate}</td>
                      <td className="py-4 px-4">{item.arrivalDate}</td>
                      <td className="py-4 px-4">
                        <span 
                          className={`inline-block py-1 px-2 rounded text-sm ${
                            item.status === 'Бронирование открыто' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <button 
                          className={`btn ${
                            item.status === 'Бронирование открыто' 
                              ? 'btn-primary text-sm py-1' 
                              : 'bg-gray-200 text-gray-500 cursor-not-allowed text-sm py-1 px-4 rounded'
                          }`}
                          disabled={item.status !== 'Бронирование открыто'}
                        >
                          Забронировать
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-12 bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Информация о расписании</h2>
              <p className="mb-4">
                Все круизы отправляются по расписанию. Рекомендуем прибыть в порт отправления за 2-3 часа до указанного времени.
              </p>
              <p className="mb-4">
                Расписание может меняться в зависимости от погодных условий и других факторов. Всегда проверяйте актуальную 
                информацию перед поездкой.
              </p>
              <p>
                Для получения дополнительной информации о конкретном круизе, пожалуйста, свяжитесь с нашим центром поддержки клиентов.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SchedulePage;