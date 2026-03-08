import type { Metadata } from "next";
import "./globals.css";
import "../styles/animations.css";

export const metadata: Metadata = {
  title: "Projeto Cavalos-Marinhos RJ",
  description:
    "Pesquisa, conservação e educação para preservar os cavalos-marinhos e os ecossistemas costeiros do Rio de Janeiro.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
