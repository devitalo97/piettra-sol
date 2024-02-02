"use client";
import { portfolio } from "@/public/portfolio";
import Image from "next/image";
import useWindowDimensions from "../hook/useWindowDimensions";
import Link from "next/link";
import clsx from "clsx";

export default function Portfolio() {
  const { isMobile } = useWindowDimensions();
  const _portfolio = isMobile ? portfolio.slice(0, 12) : portfolio.slice(0, 20);
  return (
    <div id="portfolio" className="relative isolate pb-32 pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-piettra-highlight">
            Portifólio
          </h2>
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/gallery"
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-piettra-500 shadow-sm hover:bg-piettra-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white text-center"
          >
            Ver portfólio completo
          </Link>
        </div>
        <div
          className={clsx(
            "mx-auto mt-16 max-w-2xl columns-4 gap-2 xl:gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:columns-6 xl:mx-0 xl:max-w-none xl:columns-8"
          )}
        >
          {_portfolio.map((photo, idx) => (
            <div key={idx} className="mb-4">
              <Image
                loading="lazy"
                src={photo}
                alt="thumb"
                className="shadow rounded-2xl w-full "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
