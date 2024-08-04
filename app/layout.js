import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./Components/Shared/Footer/Footer";
import Navigationmenu from "@/components/ui/navigation-menu";
// import Navigationmenu from "./Components/NavigationMenu/Navigationmenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Naukowa Project",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar></Navbar> */}
        {/* <Navigationmenu></Navigationmenu> */}
        <Navigationmenu></Navigationmenu>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
