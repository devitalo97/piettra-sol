import "./ui/globals.css";
import type { Metadata } from "next";
import { signika } from "./ui/fonts";
import Navbar from "./ui/navbar";

export const metadata: Metadata = {
  title: "Piettra Sol Studio",
  description:
    "piettrasoltattoo.com é o site da artista Pietra Sol, residente em São Mateus - Guriri, Espírito Santo, Brasil. Acompanhe o portifolio de tatuagens de piettra.",
  authors: [
    { name: "Italo de Souza", url: "https://www.instagram.com/dev.italo/" },
    { name: "Bruna Almeida", url: "https://www.instagram.com/bru_uiux/" },
  ],
  creator: "Beinus & Bold Design",
  applicationName: "Piettra Sol Tattoo",
  category: "tattoo",
  classification: "professional tattoo artist",
  generator: "Next.js",
  keywords: [
    "tattoo",
    "piettra",
    "piettra sol",
    "piettra sol tattoo",
    "tatuagem",
    "artist",
    "artista",
  ],

  publisher: "Vercel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${signika.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
