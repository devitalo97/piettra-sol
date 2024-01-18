/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

export default function About() {
  return (
    <div id="about" className="overflow-hidden w-full relative">
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:pb-0">
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-lg font-semibold text-piettra-highlight">
              Tatuadora
            </h2>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl">
              Piettra de Melo Guido
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <div className="aspect-h-7 aspect-w-12 lg:aspect-none lg:flex lg:justify-end relative">
                  <img src={"/about-0.svg"} alt="thumb" className="z-20" />
                  <div className="absolute inset-0 z-10 flex">
                    <div className="w-[50%] h-[50%] bg-piettra-tw-900 bg-opacity-50 rounded-full blur-[80px] absolute left-0" />
                    <div className="w-[50%] h-[50%] bg-piettra-tw-900 bg-opacity-50 rounded-full blur-[80px] absolute right-0" />
                    <div className="w-[50%] h-[50%] bg-piettra-tw-900 bg-opacity-50 rounded-full blur-[80px] absolute bottom-0" />
                    <div className="w-[50%] h-[50%] bg-piettra-tw-900 bg-opacity-50 rounded-full blur-[80px] absolute bottom-0 left-0 right-0" />
                  </div>
                </div>
                {/* <figcaption className="mt-3 flex text-sm text-white">
                  <span>Piettra Sol</span>
                </figcaption> */}
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-lg text-white">
                Como uma artista apaixonada e especialista em tatuagem colorida,
                Piettra leva sua criatividade para outro nível, transformando a
                pele em uma tela de pintura.
              </p>
            </div>
            <div className="prose prose-indigo mx-auto mt-5 text-white lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p>
                Com um olhar aguçado para detalhes e uma paleta de cores
                exuberantes, Piettra utiliza seu talento artístico para criar
                tatuagens que contam histórias, expressam emoções e se tornam
                verdadeiras obras de arte.
              </p>
              <p>
                Cada traço é cuidadosamente planejado e executado com precisão,
                garantindo que a tatuagem seja uma representação fiel da visão
                do cliente. Piettra é uma profissional capaz de criar uma
                variedade de estilos, desde os detalhados até os mais lúdicos e
                ilustrativos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
