import Hero from "./ui/hero";
import Features0 from "./ui/features-0";
import Features1 from "./ui/features-1";
import Divider from "./ui/divider";
import About from "./ui/about";
import Portfolio from "./ui/portfolio";
import Testimonials from "./ui/testimonials";
import Care from "./ui/care";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Divider />
      <Features0 />
      <Features1 />
      <Divider />
      <About />
      <Divider />
      <Portfolio />
      <Divider />
      <Testimonials />
      <Divider />
      <Care />
    </main>
  );
}
