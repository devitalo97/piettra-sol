import Hero from "./ui/hero";
import Features0 from "./ui/features-0";
import Features1 from "./ui/features-1";
import Divider from "./ui/divider";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Divider />
      <Features0 />
      <Features1 />
      <Divider />
      <div className="h-[100vh]" />
      <div className="h-[100vh]" />
      <div className="h-[100vh]" />
      <div className="h-[100vh]" />
    </main>
  );
}
