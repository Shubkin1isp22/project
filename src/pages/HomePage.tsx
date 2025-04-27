import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CruiseCard from '../components/CruiseCard';
import { useForm, FieldValues } from 'react-hook-form';
import FormInput from '../components/FormInput';
const HomePage: React.FC = () => {
  const cruiseOffers = [
    {
      id: 1,
      imageSrc: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg',
      title: 'Средиземноморское путешествие',
      destination: 'Италия, Греция, Испания',
      duration: '7 дней',
      departureDate: '15 июня 2025',
      price: '89 900',
    },
    {
      id: 2,
      imageSrc: '/images/card1.png',
      title: 'Скандинавские фьорды',
      destination: 'Норвегия, Швеция, Дания',
      duration: '10 дней',
      departureDate: '22 июля 2025',
      price: '125 000',
    },
    {
      id: 3,
      imageSrc: '/images/card2.png',
      title: 'Карибское приключение',
      destination: 'Багамы, Ямайка, Куба',
      duration: '12 дней',
      departureDate: '5 августа 2025',
      price: '145 000',
    },
  ];
  const { register, handleSubmit, formState: { errors, isSubmitting }  } = useForm<FieldValues>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero секция */}
      <section className="  bg-cruise-ship bg-cover bg-center text-white relative" style={{ backgroundImage: "url('/images/cruise-bg.jpg')" }} >
        
        <div className="container-custom relative z-10 flex flex-col items-center justify-center min-h-[60vh]">
          <h1 className="text-4xl md:text-6xl font-serif text-center text-white  ">
            Наслаждайтесь в круизах Port.
          </h1>
        </div>
        {/* Предложения */}
        <section id="offers" className="section bg-white bg-opacity-20 bg-cover bg-center relative">
          <div className="absolute inset-0"></div>
          <div className="container-custom relative z-10">
            <h2 className="text-3xl mt-12 font-serif mb-12 text-center text-white">
              Наши лучшие предложения
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cruiseOffers.map((cruise) => (
                <CruiseCard
                  key={cruise.id}
                  imageSrc={cruise.imageSrc}
                  title={cruise.title}
                  destination={cruise.destination}
                  duration={cruise.duration}
                  departureDate={cruise.departureDate}
                  price={cruise.price}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* О нас */}
        <section className="section bg-gray-600 bg-opacity-40 bg-cover bg-center relative">
          <div className="absolute inset-0  "></div>
          <div className="container-custom relative z-10">
            <div className="p-8 md:p-12  rounded-lg max-w-4xl mx-auto">
                <h2 className="text-4xl font-serif mb-6 text-center text-white">
                  Мы — лучшие в круизах.
                </h2>
              <p className="text-lg text-white mb-4">
                Port исследует моря более 300 лет. То, что началось с одного корабля, переросло в великолепный флот.
              </p>
              <p className="text-lg text-white mb-6">
                На протяжении веков семья Борджиа посвятила себя плаванию в океанах и в 1970 году основала Средиземноморское пароходство, которое сейчас является вторым по величине контейнеровозом в мире. Обладая таким богатым наследием в мореплавании и любовью к морю, Port Cruises открылась в 1988 году и стала одной из самых быстрорастущих круизных компаний в мире, имея в своем распоряжении флот из 5 судов.
              </p>
              <div className="flex justify-center">
                <a href="/about" className="btn btn-primary">
                  Узнать больше о нас
                </a>
              </div>
            </div>
          </div>
        </section>

      </section>
      
      
      
      {/* Секция "Острые ощущения" */}
      <section className="mt-0 bg-[#2F4454] py-16">
          {/* Заголовки */}
          <div className="ml-8 md:ml-28 mb-4 flex flex-col">
            <h2 className="text-3xl md:text-5xl text-white mt-12 font-bold">
              Аврора это <br />
              Запредельно
            </h2>
            <h2 className="text-3xl md:text-5xl font-bold text-red-500">
              Острые ощущения
            </h2>
          </div>

          {/* Абзац текста с ограниченной шириной */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="text-container ml-8 md:ml-28 mr-8 max-w-[100%] md:max-w-[40%]">
              <p className="text-lg text-gray-200 mb-8">
                Только самые смелые готовы к настоящим приключениям! На борту «Авроры» их ждут захватывающие эмоции на новом уровне. От головокружительных водных горок до аттракциона, парящего над океанскими волнами, — здесь каждый найдет способ проверить свою отвагу! И это лишь часть величия Авроры!
              </p>
            </div>

            {/* Карточки с изображениями - скрыты на мобильных устройствах */}
            <div className="flex gap-6 flex-wrap justify-start mb-12 mr-10 hidden md:flex">
              <div className="rounded-lg overflow-hidden shadow-md w-[90%] sm:w-[30%] md:w-[30%] h-auto">
                <img 
                  src="/images/pict1.png" 
                  alt="Активный отдых"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md w-[90%] sm:w-[30%] md:w-[30%] h-auto">
                <img 
                  src="/images/pict2.jpg" 
                  alt="Приключения"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md w-[90%] sm:w-[30%] md:w-[30%] h-auto">
                <img 
                  src="/images/pict3.jpg"  
                  alt="Экстрим"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      
        {/* Подписка */}
        <section className="section bg-cruise-ship bg-cover bg-center relative" style={{ backgroundImage: 'url("/images/big.png")', height: 'auto' }}>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="container-custom relative z-10">
            <div className="bg-white bg-opacity-90 p-8 rounded-lg max-w-2xl mx-auto">
              <h2 className="text-5xl text-center font-federant text-black mb-4">
                Port
              </h2>
              <p className="text-center mb-6">
                Получайте информацию о скидках и эксклюзивных круизах первыми
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4">
                <FormInput
                  label="Email"
                  name="email"
                  type="email"
                  register={register}
                  errors={errors}
                  validationRules={{
                    required: 'Email обязателен',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Неверный формат email'
                    }
                  }}
                />
                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                  >
                    {isSubmitting ? 'Отправляем...' : 'Получать извещения'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      
      <Footer />
    </div>
  );
};

export default HomePage;