import type { Metadata } from "next";
import React from 'react'
import { Inter } from "next/font/google";
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'primereact/resources/themes/saga-blue/theme.css'; // Theme
import 'primereact/resources/primereact.min.css'; // Core styles
import 'primeicons/primeicons.css'; // Icons
import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';
import "../globals.css"
import AOS from 'aos';
import 'aos/dist/aos.css'
import Header from "../_components/agency/Header";
import Footer from "../_components/agency/Footer";




const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
      <html lang="en">
        <body
          className={`${inter.className} `}
        >
          
            <Header />
            {children}
            <Footer />
        
        </body>
      </html>
    </PrimeReactProvider>
  );
}
