import "./globals.css";

export const metadata = {
  title: "My E-commerce Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        {/* Header / Navbar */}
        <header className="bg-white shadow p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">E-commerce Store</h1>

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
        <main className="container mx-auto mt-8 p-4">{children}</main>
      </body>
    </html>
  );
}
