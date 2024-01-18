import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function Care() {
  return (
    <div id="care" className="relative bg-white w-full">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div
            className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0"
            style={{
              background:
                "linear-gradient(176deg, rgba(53, 2, 0, 0.50) 11.17%, rgba(229, 166, 47, 0.50) 141.76%)",
            }}
          >
            <div
              className="absoulte inset-0 h-full"
              style={{
                backgroundImage: `url(care.svg)`,
                backgroundRepeat: "repeat",
              }}
            ></div>
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-piettra-highlight">
              Atenção!
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Cuidados Após uma Tatuagem
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              Após realizar uma tatuagem, é essencial seguir cuidados
              específicos para garantir uma cicatrização adequada. Evite
              complicações seguindo as orientações abaixo:
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                Durante os primeiros dias, a área tatuada pode apresentar
                sensibilidade e inchaço. Para promover a cicatrização, siga as
                seguintes recomendações:
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    className="mt-1 h-5 w-5 flex-none text-piettra-highlight"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Mantenha a área limpa.
                    </strong>{" "}
                    Lave suavemente com água morna e sabão neutro, evitando
                    esfregar. Seque com uma toalha limpa dando leves batidinhas.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    className="mt-1 h-5 w-5 flex-none text-piettra-highlight"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Evite exposição ao sol.
                    </strong>{" "}
                    Proteja a tatuagem do sol direto e use protetor solar após a
                    cicatrização para evitar desbotamento.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-piettra-highlight"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Hidrate a pele.
                    </strong>{" "}
                    Use uma pomada ou creme recomendado pelo seu tatuador para
                    manter a área hidratada e evitar ressecamento.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Além disso, evite coçar a tatuagem e não aplique produtos que
                não foram recomendados pelo profissional. Caso observe sinais de
                infecção, como vermelhidão intensa ou pus, consulte um médico
                imediatamente.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Uma lista mais detalhada de cuidados:
              </h2>
              <ul role="list" className="mt-8 space-y-4 text-gray-600">
                <li>
                  Lavar regularmente com água durante 3 dias o excesso de tinta
                  que a pele naturalmente expele.
                </li>
                <li>Não ingerir alimentos remosos.</li>
                <li>
                  Caso a pele esquente, faça compressa com água ou soro
                  fisiológico.
                </li>
                <li>Evite locais com poeira, sujeira e areia.</li>
                <li>
                  Após 4 dias passar hidratante nivea todos os dias 3 vezes ao
                  dia.
                </li>
                <li>
                  Não arranque e nem coce as casquinhas pois a tatuagem ficará
                  falhada.
                </li>
                <li>Não passar nenhum produto nos 3 primeiros dias.</li>
                <li>
                  Você sentirá coceira no local. Para acalmar, coloque o
                  hidratante na geladeira e use-o gelado.
                </li>
                <li>Evitar o sol ou mormaço por no mínimo 14 dias.</li>
                <li>Protetor solar após 15 dias.</li>
                <li>
                  Não usar roupas apertadas que possam gerar atrito com a pele
                  no local da tatuagem.
                </li>
                <li>
                  Não ingerir bebidas alcoólicas ou substâncias ilicitas por no
                  mínimo 2 semanas.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
