import type { Metadata } from "next";
import "./globals.css";
import SearchBar from "@/components/SearchBar";

export const metadata: Metadata = {
  title: "Tokopakedi",
  description: "Toko Laptop Pak Edi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-50 flex h-20 items-center justify-center bg-darkblue-700 px-6 py-4 shadow-high">
          <SearchBar />
        </header>
        <main className="container mx-auto gap-2 px-4 py-5 max-md:space-y-3 md:grid md:grid-cols-2 lg:grid-cols-3">
          {children}
        </main>
      </body>
    </html>
  );
}
