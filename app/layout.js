import './globals.css';

export const metadata = {
  title: 'My E-commerce Store',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <header className="bg-gray-300 shadow p-4">
          <h1 className="text-2xl font-bold text-center">E-commerce Store</h1>
        </header>
        <main className="container mx-auto mt-8 p-4">{children}</main>
      </body>
    </html>
  );
}
