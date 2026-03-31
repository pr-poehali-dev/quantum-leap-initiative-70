import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/projects/5698e695-db70-4a83-9be0-405fdfb0df59/files/3902b9da-3e7d-43ca-8e64-02043f9b606f.jpg',
  'https://cdn.poehali.dev/projects/5698e695-db70-4a83-9be0-405fdfb0df59/files/54734794-9c1f-4643-bac9-058083866353.jpg',
  'https://cdn.poehali.dev/projects/5698e695-db70-4a83-9be0-405fdfb0df59/files/e18d4ee0-d66f-4274-abd3-1d78ad6d2af0.jpg',
  'https://cdn.poehali.dev/projects/5698e695-db70-4a83-9be0-405fdfb0df59/files/9506c17c-69bc-4ec5-85df-1a5d631e9c6e.jpg',
];

const services = ['Печать фотографий', 'Печать документов', 'Быстро и качественно'];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [serviceIndex, setServiceIndex] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const serviceInterval = setInterval(() => {
      setServiceIndex((prev) => (prev + 1) % services.length);
    }, 2500);
    return () => clearInterval(serviceInterval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-10">

            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-12 bg-white" />
                <span className="text-white/60 text-sm uppercase tracking-widest font-light">Печатный сервис · Елена · <a href="tel:+79505406612" className="hover:text-white transition-colors">8 950 540-66-12</a></span>
              </div>
              <h1 className="text-5xl font-light text-white md:text-6xl lg:text-7xl leading-tight">
                Печатаем<br />
                <span className="font-normal">всё что нужно</span>
              </h1>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-200 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="h-12 overflow-hidden">
                {services.map((service, index) => (
                  <p
                    key={service}
                    className={cn(
                      'text-xl font-light text-white/80 md:text-2xl transition-all duration-500',
                      serviceIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full absolute'
                    )}
                  >
                    {service}
                  </p>
                ))}
              </div>
              <p className="mt-4 text-white/60 text-base md:text-lg font-light max-w-md">
                Фотографии, документы, справки — для любого человека из любой сферы. Быстро, чётко, с заботой о качестве.
              </p>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-400 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+79505406612"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-black font-medium text-sm uppercase tracking-wider hover:bg-white/90 transition-colors"
                >
                  Заказать печать
                </a>
                <a
                  href="https://wa.me/79505406612"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 border border-white/40 text-white font-light text-sm uppercase tracking-wider hover:border-white/80 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-600 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="flex gap-8 pt-2">
                <div>
                  <p className="text-2xl font-light text-white">Быстро</p>
                  <p className="text-white/50 text-sm">Готово за час</p>
                </div>
                <div className="w-px bg-white/20" />
                <div>
                  <p className="text-2xl font-light text-white">Качество</p>
                  <p className="text-white/50 text-sm">Чёткий результат</p>
                </div>
                <div className="w-px bg-white/20" />
                <div>
                  <p className="text-2xl font-light text-white">Для всех</p>
                  <p className="text-white/50 text-sm">Любая задача</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}