import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./components/menu/Menu"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dragon8 Responsive Navigation",
  description: " by Dragon_AZ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Menu />
          <div className="children-container">{children}</div>
        </div>
      </body>
    </html>
  );
}
