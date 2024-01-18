"use client";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Thumb from "@/public/hero-0.svg";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full relative">
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:gap-x-10">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            {/* <div className="flex">
              <div className="mt-12 sm:mt-32 lg:mt-16">
                <a href="#" className="inline-flex space-x-6">
                  <span className="rounded-full bg-piettra-highlight/10 px-3 py-1 text-sm font-semibold leading-6 text-piettra-highlight ring-1 ring-inset ring-piettra-highlight/20">
                    Depoimentos
                  </span>
                  <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-400">
                    <span>Veja a opinião do publico</span>
                    <ChevronRightIcon
                      className="h-5 w-5 text-gray-500"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </div>
            </div> */}
            <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Transforme sua história em arte viva!
            </h1>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md w-1/2 bg-piettra-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-piettra-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-piettra-600 text-center"
              >
                Orçamento
              </a>
              {/* <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-400"
              >
                Portifólio <span aria-hidden="true">→</span>
              </a> */}
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Solicite seu orçamento e descubra como transformar sua visão em
              arte!
            </p>
          </div>
          <div className="flex-shrink-0 flex-grow relative">
            <img src={"/hero-0.svg"} alt="thumb" className="z-20" />
            <div className="absolute inset-0 z-10 flex">
              <div className="w-[50%] h-[50%] bg-black bg-opacity-50 rounded-full blur-[80px] absolute left-0" />
              <div className="w-[50%] h-[50%] bg-black bg-opacity-50 rounded-full blur-[80px] absolute right-0" />
              <div className="w-[50%] h-[50%] bg-black bg-opacity-50 rounded-full blur-[80px] absolute bottom-0" />
              <div className="w-[50%] h-[50%] bg-black bg-opacity-50 rounded-full blur-[80px] absolute bottom-0 left-0 right-0" />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
