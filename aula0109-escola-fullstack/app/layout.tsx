
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portal Escolar | Gestão de Alunos e Notas",
  description:
    "Plataforma de gestão escolar do SESI Mirandópolis para organizar cadastros de estudantes, registrar avaliações e consultar informações acadêmicas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
