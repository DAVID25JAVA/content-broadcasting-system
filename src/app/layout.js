import "./globals.css" 
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "Content Broadcasting System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <main className="flex-1">
          <AuthProvider>{children}</AuthProvider>
        </main>
      </body>
    </html>
  );
}
