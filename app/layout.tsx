import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BygAI - AI-assistent til håndværkere",
  description:
    "Få din egen AI-assistent der tager telefonen, når du ikke kan. BygAI svarer på dansk, kvalificerer kunder og sender dig kun det vigtige via SMS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  );
}
