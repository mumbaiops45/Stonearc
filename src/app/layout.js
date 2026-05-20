import { Poppins } from "next/font/google";
import Navbar from "./component/Navbar";
import "./globals.css";
import Footer from "./component/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({children}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body suppressHydrationWarning>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
