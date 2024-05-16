import { Inter } from "next/font/google";
import "./globals.css";
import Logo from "./logo.png";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Privacy Wars",
  description: "Are you ready",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className=" w-full p-2 fixed h-20">
          <Image height={70} width={70} src={Logo} alt="Privacy Wars" />
        </nav>
        {children}
      </body>
    </html>
  );
}
