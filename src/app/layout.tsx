import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Header} from "@/components/common/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juiher Nature",
  description: "Juiher Nature intervient dans tous les domaines d’entretien des espaces verts et travaux forestiers." +
      "Fort de nos expertises, Juiher Nature est dotée d’une large capacité d’intervention au sein de ses domaines d’activité : " +
      "Création d’espaces verts, " +
      "Entretien des espaces verts, " +
      "Pose de clôtures, " +
      "Abattage, débardage, " +
      "Élagage avec corde, à terre ou nacelle " +
      "Entretien et restauration de rivières… ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className + "flex flex-col"}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
