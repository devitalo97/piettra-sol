import Image from "next/image";
import Hero from "./ui/hero";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <div className="h-[100vh]" />
      <div className="h-[100vh]" />
      <div className="h-[100vh]" />
      <div className="h-[100vh]" />
    </main>
  );
}
