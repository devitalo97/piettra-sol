"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";

const navigation = [
  {
    href: "#biosecurity",
    label: "Biossegurança",
  },
  { href: "#about", label: "Sobre" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#testimonials", label: "Depoimentos" },
  { href: "#care", label: "Cuidados" },
];
const getHash = () =>
  typeof window !== "undefined"
    ? decodeURIComponent(window.location.hash.replace("#", ""))
    : undefined;

export default function NavBar() {
  const [hash, setHash] = useState<string | undefined>(undefined);
  const isOptionInCurrentPathname = useCallback(
    (href: string) => {
      return hash && href.includes(hash);
    },
    [hash]
  );

  const handleClick = (e: { preventDefault: () => void }, href: string) => {
    e.preventDefault();

    const id = href.substring(1); // Remove o '#'
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setHash(href);
  };
  useEffect(() => {
    const hash = getHash();

    if (!hash) return;

    const element = document.getElementById(hash);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setHash(hash);
  }, []);

  return (
    <Disclosure
      as="nav"
      className="bg-transparent shadow sticky top-0 z-50 backdrop-blur"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-start sm:items-stretch">
                <Link href="/" className="flex flex-shrink-0 items-center">
                  <Image
                    width={32}
                    height={32}
                    className="h-8 w-auto"
                    src={logo}
                    alt="Piettra sol studio"
                  />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {/* Current: "", Default: "border-transparent text-gray-300 hover:border-gray-300 hover:text-gray-400" */}
                {navigation.map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    onClick={(e) => handleClick(e, n.href)}
                    className={clsx(
                      "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-300 hover:border-gray-300 hover:text-gray-400",
                      isOptionInCurrentPathname(n.href) &&
                        "border-piettra-highlight text-piettra-highlight"
                    )}
                  >
                    {n.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              {navigation.map((n) => (
                <Disclosure.Button
                  as="a"
                  key={n.href}
                  href={n.href}
                  onClick={(e) => handleClick(e, n.href)}
                  className={clsx(
                    "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700",
                    isOptionInCurrentPathname(n.href) &&
                      "border-piettra-highlight text-piettra-highlight"
                  )}
                >
                  {n.label}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
