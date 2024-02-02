import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Thumb from "@/public/features-1.svg";
import { biosecurity } from "@/app/ui/icons";
import Image from "next/image";

export default function Features() {
  const features = [
    {
      name: "Esterilização e Descartáveis",
      description:
        "Compromisso total com a segurança, usando esterilização rigorosa e materiais descartáveis.",
      icon: biosecurity.disposable,
    },
    {
      name: "Higiene Pessoal",
      description: "Mantemos tudo bem limpinho para uma experiência tranquila.",
      icon: biosecurity.hygiene,
    },
    {
      name: "Limpeza e Desinfecção",
      description:
        "O estúdio é sempre limpo e seguro para tornar sua arte corporal única.",
      icon: biosecurity.clean,
    },
    {
      name: "Tintas de Qualidade",
      description:
        "Usamos tintas tops para que sua tatuagem seja única e dure bastante.",
      icon: biosecurity.color,
    },
    {
      name: "Cuidado e Acompanhamento",
      description:
        "Vamos além da tatuagem, cuidando de você durante todo o processo.",
      icon: biosecurity.care,
    },
  ];

  return (
    <div className="overflow-hidden pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="flex-shrink-0 flex-grow row-start-2 lg:row-start-[unset]">
            <Image
              priority
              src={Thumb}
              alt="thumb"
              className="shadow-xl rounded-lg"
            />
          </div>
          <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-piettra-highlight">
                Protocolos
              </h2>
              <p className="mt-6 text-lg leading-8 text-white">
                Aqui estão alguns dos protocólos e medidas que adotamos para
                proteger sua saúde:
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold">
                      <feature.icon
                        className="absolute left-1 top-1 h-6 w-6 stroke-piettra-highlight text-piettra-highlight fill-piettra-highlight"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
