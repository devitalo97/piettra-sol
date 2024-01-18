"use client";
import { portfolio } from "@/public/portfolio";
import clsx from "clsx";
import Image from "next/image";

function processArray<T>(items: T[]): [[T[], T[]], [T[], T[]]] {
  // Divida o array original em duas partes (metade do comprimento)
  const middleIndex = Math.floor(items.length / 2);
  const firstHalf = items.slice(0, middleIndex);
  const secondHalf = items.slice(middleIndex);

  // Divida cada metade em dois arrays
  const firstHalfDivided: [T[], T[]] = [
    firstHalf.slice(0, Math.floor(firstHalf.length / 2)),
    firstHalf.slice(Math.floor(firstHalf.length / 2)),
  ];

  const secondHalfDivided: [T[], T[]] = [
    secondHalf.slice(0, Math.floor(secondHalf.length / 2)),
    secondHalf.slice(Math.floor(secondHalf.length / 2)),
  ];

  // Retorne o resultado como um array de duas posições, cada uma contendo um array
  return [firstHalfDivided, secondHalfDivided];
}

export default function Portfolio() {
  const testimonials = processArray(
    portfolio.map((image) => ({
      name: "Piettra Sol",
      handle: "piettrasol",
      imageUrl: image,
    }))
  );
  return (
    <div className="relative isolate pb-32 pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-piettra-highlight">
            Portifólio
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Esses são alguns dos meus trabalhos
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={clsx(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1",
                    "space-y-8"
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.handle}
                      className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5"
                    >
                      <div className="flex-shrink-0 flex-grow ">
                        <Image
                          loading="lazy"
                          src={testimonial.imageUrl}
                          alt="thumb"
                          className="shadow rounded-2xl"
                        />
                      </div>
                      <figcaption className="flex items-center gap-x-4 p-6">
                        <div>
                          <div className="font-semibold">
                            {testimonial.name}
                          </div>
                          <div className="text-gray-600">{`@${testimonial.handle}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
