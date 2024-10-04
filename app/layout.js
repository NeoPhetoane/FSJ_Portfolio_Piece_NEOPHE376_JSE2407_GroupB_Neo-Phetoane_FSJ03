import "./globals.css";
import SearchBar from "./components/SearchBar";

export const metadata = {
  title: "METO",
  description: 'Welcome to METO, where You Too can get whatever you need.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<head>
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
<meta name="msapplication-TileColor" content="#da532c"/>
<meta name="theme-color" content="#ffffff"/>
  
</head>


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
              <a href="/Cart" className="text-gray-700 hover:text-gray-900">
                Cart
              </a>
              <a href="/About" className="text-gray-700 hover:text-gray-900">
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
