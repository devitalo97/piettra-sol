import Thumb from "@/public/features-0.svg";
import Image from "next/image";

export default function Features() {
  return (
    <div id="biosecurity" className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="px-6 md:px-0 lg:pr-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-piettra-highlight">
                Protocolos
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Bio Segurança
              </p>
              <p className="mt-6 text-lg leading-8 text-white">
                A segurança dos nossos clientes é nossa prioridade máxima.
                Levamos a biossegurança muito a sério para garantir um ambiente
                limpo e livre de riscos.
              </p>
              <p className="mt-6 text-lg leading-8 text-white">
                Estamos comprometidos em proporcionar a você uma experiência
                segura e confortável durante todo o processo de tatuagem.
              </p>
              <p className="mt-6 text-lg leading-8 text-white">
                Sua saúde e bem-estar são fundamentais para nós, e nos
                esforçamos para cumprir os mais altos padrões de biossegurança.
                Estamos à disposição para responder a quaisquer perguntas
                adicionais que você possa ter sobre nossas práticas de
                biossegurança.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 flex-grow">
            <Image
              priority
              src={Thumb}
              alt="thumb"
              className="shadow-xl rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
