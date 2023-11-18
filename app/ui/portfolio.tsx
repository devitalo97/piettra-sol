import clsx from "clsx";
import Image from "next/image";

import IMG_3400 from "@/public/portifolio/IMG_3400.jpg";
import IMG_3401 from "@/public/portifolio/IMG_3401.jpg";
import IMG_3402 from "@/public/portifolio/IMG_3402.jpg";
import IMG_3403 from "@/public/portifolio/IMG_3403.jpg";
import IMG_3404 from "@/public/portifolio/IMG_3404.jpg";
import IMG_3405 from "@/public/portifolio/IMG_3405.jpg";
import IMG_3406 from "@/public/portifolio/IMG_3406.jpg";
import IMG_3407 from "@/public/portifolio/IMG_3407.jpg";
import IMG_3408 from "@/public/portifolio/IMG_3408.jpg";
import IMG_3409 from "@/public/portifolio/IMG_3409.jpg";
import IMG_3410 from "@/public/portifolio/IMG_3410.jpg";
import IMG_3411 from "@/public/portifolio/IMG_3411.jpg";
import IMG_3412 from "@/public/portifolio/IMG_3412.jpg";
import IMG_3413 from "@/public/portifolio/IMG_3413.jpg";
import IMG_3414 from "@/public/portifolio/IMG_3414.jpg";
import IMG_3415 from "@/public/portifolio/IMG_3415.jpg";
import IMG_3416 from "@/public/portifolio/IMG_3416.jpg";
import IMG_3417 from "@/public/portifolio/IMG_3417.jpg";
import IMG_3418 from "@/public/portifolio/IMG_3418.jpg";
import IMG_3419 from "@/public/portifolio/IMG_3419.jpg";
import IMG_3420 from "@/public/portifolio/IMG_3420.jpg";
import IMG_3421 from "@/public/portifolio/IMG_3421.jpg";
import IMG_3422 from "@/public/portifolio/IMG_3422.jpg";
import IMG_3423 from "@/public/portifolio/IMG_3423.jpg";
import IMG_3424 from "@/public/portifolio/IMG_3424.jpg";
import IMG_3425 from "@/public/portifolio/IMG_3425.jpg";
import IMG_3426 from "@/public/portifolio/IMG_3426.jpg";
import IMG_3427 from "@/public/portifolio/IMG_3427.jpg";
import IMG_3428 from "@/public/portifolio/IMG_3428.jpg";
import IMG_3429 from "@/public/portifolio/IMG_3429.jpg";
import IMG_3430 from "@/public/portifolio/IMG_3430.jpg";

const portfolio = [
  IMG_3400,
  IMG_3401,
  IMG_3402,
  IMG_3403,
  IMG_3404,
  IMG_3405,
  IMG_3406,
  IMG_3407,
  IMG_3408,
  IMG_3409,
  IMG_3410,
  IMG_3411,
  IMG_3412,
  IMG_3413,
  IMG_3414,
  IMG_3415,
  IMG_3416,
  IMG_3417,
  IMG_3418,
  IMG_3419,
  IMG_3420,
  IMG_3421,
  IMG_3422,
  IMG_3423,
  IMG_3424,
  IMG_3425,
  IMG_3426,
  IMG_3427,
  IMG_3428,
  IMG_3429,
  IMG_3430,
];

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
