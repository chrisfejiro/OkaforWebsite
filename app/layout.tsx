import NavBar from '../app/Component/NavBar';
import "./globals.css";
import { CartProvider } from '../app/Data/CartContext'; // Import the CartProvider

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="antialiased">
        <CartProvider> {/* Wrap everything with CartProvider */}
          <NavBar /> {/* Include the Navbar */}
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
