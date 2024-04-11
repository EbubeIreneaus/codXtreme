import type { Metadata } from "next";
import React from 'react'
import { Inter } from "next/font/google";
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'primereact/resources/themes/saga-blue/theme.css'; // Theme
import 'primereact/resources/primereact.min.css'; // Core styles
import 'primeicons/primeicons.css'; // Icons
import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';
import './globals.css'




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodXtreme Digital Solution",
  keywords: [
    "Web",
    "website",
    "developer",
    "codxtreme",
    "codextreme",
    "digital",
    "solutions",
    "agency",
    "nextjs",
    "reactjs",
    "abuja",
    "fedral capital territory",
  ],
  description:
    " Our team of experienced professionals brings together a diverserange of skills and expertise,\
   from web design and development to digital marketing and beyond. We pride ourselves on our \
   collaborative approach, working closely with each client to understand their unique goals, challenges, \
   and vision.",
  icons: {
    icon: "/img/favicon/favicon-32x32.png",
    apple: "/img/favicon/apple-touch-icon.png",
  },
  category: "technology",
  manifest: "/img/favicon/site.webmanifest",
};


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
      <html lang="en">
        <body className={`${inter.className}`}>
          <>

            {children}
          </>
        </body>
      </html>
    </PrimeReactProvider>
  );
}
