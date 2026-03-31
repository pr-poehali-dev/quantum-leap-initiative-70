export default function FooterSection() {
  return (
    <footer className="bg-black py-16 px-8 md:px-16 border-t border-white/10">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="text-white/40 text-xs uppercase tracking-widest mb-4 font-light">Контакт</p>
            <a
              href="tel:+79505406612"
              className="text-white text-lg font-light hover:text-white/70 transition-colors block mb-1"
            >
              8 950 540-66-12
            </a>
            <p className="text-white/40 text-sm font-light">Елена</p>
            <a
              href="https://wa.me/79505406612"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center text-white/50 hover:text-white text-sm transition-colors gap-2"
            >
              <span className="h-px w-4 bg-current" />
              WhatsApp
            </a>
          </div>

          <div>
            <p className="text-white/40 text-xs uppercase tracking-widest mb-4 font-light">Адрес</p>
            <p className="text-white font-light leading-relaxed">
              п. Большой Ут,<br />
              ул. Октября, д. 37, кв. 3
            </p>
          </div>

          <div>
            <p className="text-white/40 text-xs uppercase tracking-widest mb-4 font-light">Режим работы</p>
            <p className="text-white font-light">Без выходных</p>
            <p className="text-white text-lg font-light">10:00 — 20:00</p>
            <p className="text-white/40 text-sm font-light mt-1">Без перерывов</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-white/20 text-sm font-light">Печать фотографий и документов</p>
          <p className="text-white/20 text-sm font-light">п. Большой Ут</p>
        </div>
      </div>
    </footer>
  );
}
