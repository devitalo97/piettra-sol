export default function CTA() {
  return (
    <div className="w-full relative">
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative isolate">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Como faço meu orçamento?
            </h2>
            <p className="mx-auto mt-6 max-w-md text-lg leading-8 text-white">
              Os orçamentos e agendamentos são realizados via WhatsApp de terça
              a sábado, das 10h ás 18h
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-piettra-500 shadow-sm hover:bg-piettra-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white text-center"
              >
                Orçamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
