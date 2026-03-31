const steps = [
  {
    number: '01',
    title: 'Позвоните или напишите',
    description: 'Свяжитесь с Еленой по телефону или WhatsApp — обсудим вашу задачу.',
  },
  {
    number: '02',
    title: 'Пришлите файл',
    description: 'Отправьте фото или документ в любом удобном формате — JPG, PDF, Word.',
  },
  {
    number: '03',
    title: 'Заберите готовое',
    description: 'Приходите и забирайте чёткую, качественную печать. Быстро и без лишних хлопот.',
  },
];

export default function HowToOrderSection() {
  return (
    <section className="bg-white py-24 px-8 md:px-16">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-1 w-12 bg-black" />
          <span className="text-black/40 text-sm uppercase tracking-widest font-light">Как заказать</span>
        </div>

        <h2 className="text-4xl font-light text-black mb-16 md:text-5xl">
          Три простых шага
        </h2>

        <div className="flex flex-col gap-0 divide-y divide-black/10">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-10 py-10 group">
              <span className="text-5xl font-light text-black/15 group-hover:text-black/30 transition-colors shrink-0 w-16">
                {step.number}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-light text-black">{step.title}</h3>
                <p className="text-black/50 font-light leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+79505406612"
            className="inline-flex items-center justify-center px-8 py-3 bg-black text-white font-medium text-sm uppercase tracking-wider hover:bg-black/80 transition-colors"
          >
            Позвонить Елене
          </a>
          <a
            href="https://wa.me/79505406612"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-black/20 text-black font-light text-sm uppercase tracking-wider hover:border-black/60 transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
