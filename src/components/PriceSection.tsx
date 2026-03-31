const prices = [
  {
    title: 'Фото 10×15',
    price: '10',
    description: 'Яркая цветная печать на фотобумаге',
  },
  {
    title: 'Документ А4',
    price: '7',
    description: 'Чёткая печать текстов и таблиц',
  },
];

export default function PriceSection() {
  return (
    <section className="bg-black py-24 px-8 md:px-16">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-1 w-12 bg-white" />
          <span className="text-white/60 text-sm uppercase tracking-widest font-light">Прайс-лист</span>
        </div>

        <h2 className="text-4xl font-light text-white mb-12 md:text-5xl">
          Цены на печать
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
          {prices.map((item) => (
            <div
              key={item.title}
              className="bg-black p-10 flex flex-col gap-4 hover:bg-white/5 transition-colors"
            >
              <p className="text-white/50 text-sm uppercase tracking-widest font-light">{item.title}</p>
              <p className="text-6xl font-light text-white">
                {item.price} <span className="text-2xl text-white/60">руб.</span>
              </p>
              <p className="text-white/50 text-sm font-light">{item.description}</p>
              <a
                href="tel:+79505406612"
                className="mt-4 inline-flex items-center text-white/70 hover:text-white text-sm uppercase tracking-wider transition-colors gap-2"
              >
                <span className="h-px w-6 bg-current" />
                Заказать
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-white/30 text-sm font-light">
          Звоните Елене: <a href="tel:+79505406612" className="text-white/50 hover:text-white transition-colors">8 950 540-66-12</a>
        </p>
      </div>
    </section>
  );
}
