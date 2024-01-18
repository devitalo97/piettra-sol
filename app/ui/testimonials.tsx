import { testimonial } from "@/public/testimonial";
import Image from "next/image";

const testimonials = [
  {
    body: "Tatuar com Pie me trouxe uma autoestima que eu não fazia ideia que existia, desde que comecei a tatuar com ela, nunca mais quis outro tatuador, confio de olhos fechados. Ela sempre me surpreende fazendo um trampo melhor do que eu poderia imaginar, principalmente nas tattoos de cartoon coloridas que são meu xodos e ninguém faz como ela.",
    author: {
      name: "Amiga",
      handle: "amiga",
      imageUrl: testimonial.testimonial1,
    },
  },
  {
    body: "Uma artista excelente no que faz!! Traços limpos, delicados e com ótima fixação. Executa seu trabalho com muita destreza e segurança. Atendimento perfeito desde o orçamento, criação da arte e na execução final.",
    author: {
      name: "Mão de Piettra",
      handle: "maedepiettra",
      imageUrl: testimonial.testimonial4,
    },
  },
  {
    body: "Eu amei a experiência que tive com a Piettra! Além de super simpática e atenciosa, ela é muito cuidadosa com a biossegurança do local, tudo muito bem higienizado. Indico para todos que desejam uma boa troca entre profissional e cliente, já planejamos 8 tatuagens juntas, de fato, virou uma amiga!",
    author: {
      name: "Nathalia Caran",
      handle: "nathaliacaran",
      imageUrl: testimonial.testimonial2,
    },
  },
  {
    body: "Piettra é um profissional extremamente habilidosa e cuidadosa. Amo o trabalho dela e principalmente a atenção que ela dá à biossegurança, além claro da sua arte ser linda e bem pigmentada!",
    author: {
      name: "Aline Rangel",
      handle: "alinerangel",
      imageUrl: testimonial.testimonial3,
    },
  },
  {
    body: "Excelente profissional, muito atenciosa desde o atendimento inicial até o pós tattoo. O trabalho superou todas as expectativas, ficou muito lindo, a profissional realmente possui domínio sobre a técnica e sabe usar muito bem as cores.",
    author: {
      name: "Warlles Botazini",
      handle: "warllesbotazini",
      imageUrl: testimonial.testimonial0,
    },
  },
  {
    body: "Trabalho impecável em tudo, desde a biossegurança até o resultado final, artista incrível entrega tudo que promete e passa muita segurança ao cliente, faz artes únicas de acordo com o que o cliente quer, eu confio de olhos fechados 💖",
    author: {
      name: "Camila Guido",
      handle: "camilaguido",
      imageUrl: testimonial.testimonial5,
    },
  },
];

export default function Testimonials() {
  return (
    <div id="testimonials" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-piettra-highlight">
            Depoimentos
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Veja o que os clientes dizem
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.handle}
                className="pt-8 sm:inline-block sm:w-full sm:px-4 shadow-lg"
              >
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Image
                      className="h-10 w-10 rounded-full bg-gray-50 object-cover"
                      src={testimonial.author.imageUrl}
                      alt=""
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author.name}
                      </div>
                      <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
