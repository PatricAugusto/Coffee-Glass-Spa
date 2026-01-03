import { CartProvider } from '@/context/CartContext';
import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyle } from './styles/GlobalStyles';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          <CartProvider>
            <GlobalStyle />
            <Navbar />
            {children}
            <Footer />
          </CartProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}