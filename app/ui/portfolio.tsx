import clsx from "clsx";
import Image from "next/image";
import { portfolio } from "@/public/portfolio";

const size = Math.ceil(portfolio.length / 4);

const firstQuarter = portfolio.splice(0, size);
const secondQuarter = portfolio.splice(0, size);
const thirdQuarter = portfolio.splice(0, size);
const fourthQuarter = portfolio;

const testimonials = [
  [
    firstQuarter.map((image) => ({
      body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
      author: {
        name: "Leslie Alexander",
        handle: "lesliealexander",
        imageUrl: image,
      },
    })),
    secondQuarter.map((image) => ({
      body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
      author: {
        name: "Leslie Alexander",
        handle: "lesliealexander",
        imageUrl: image,
      },
    })),
  ],
  [
    thirdQuarter.map((image) => ({
      body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
      author: {
        name: "Leslie Alexander",
        handle: "lesliealexander",
        imageUrl: image,
      },
    })),
    fourthQuarter.map((image) => ({
      body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
      author: {
        name: "Leslie Alexander",
        handle: "lesliealexander",
        imageUrl: image,
      },
    })),
  ],
];

export default function Portfolio() {
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
                      key={testimonial.author.handle}
                      className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5"
                    >
                      <div className="flex-shrink-0 flex-grow ">
                        <Image
                          loading="lazy"
                          src={testimonial.author.imageUrl}
                          alt="thumb"
                          className="shadow rounded-2xl"
                        />
                      </div>
                      <figcaption className="flex items-center gap-x-4 p-6">
                        <div>
                          <div className="font-semibold">
                            {testimonial.author.name}
                          </div>
                          <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
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
