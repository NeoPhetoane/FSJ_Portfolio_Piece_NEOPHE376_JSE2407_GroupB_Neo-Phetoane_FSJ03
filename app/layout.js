import "./globals.css";
import SearchBar from "./components/SearchBar";

export const metadata = {
  title: "METO",
  description: 'Welcome to METO, where You Too can get whatever you need.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        {/* Header / Navbar */}
        <header className="bg-white shadow p-2">
          <div className="container mx-auto flex justify-between items-center">
            <a href="/" >
          <img className="w-20 h-20 md:w-24 md:h-24 object-contain" src="./Logo.png" alt="Logo" />
          </a>
            {/* Navbar Links */}
            <nav className="space-x-6">
              <a href="/" className="text-gray-700 hover:text-gray-900">
                Products
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Cart
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                About
              </a>
            </nav>
          </div>
        </header>
        <SearchBar />
        <main className="container mx-auto mt-8 p-4">{children}</main>
      </body>
    </html>
  );
}
