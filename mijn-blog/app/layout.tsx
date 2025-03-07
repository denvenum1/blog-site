import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import 'easymde/dist/easymde.min.css'

export const metadata: Metadata = {
  title: "Ali Ayoub Soujaa",
  description: "my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="mx-auto lg:max-w-[80%]">
      <body className="m-10">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
