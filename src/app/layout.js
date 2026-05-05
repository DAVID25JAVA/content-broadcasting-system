import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Content Broadcasting System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <header>
          <Navbar />
        </header>
        <main className="flex-1">{children}</main>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
