import "./globals.css";
import { poppins, zain } from "@/lib/font";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "LinkHive",
  description: "Everything you're looking for, in one place.",
};

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body className={`${poppins.variable}  ${zain.variable} scrollbar-one`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
