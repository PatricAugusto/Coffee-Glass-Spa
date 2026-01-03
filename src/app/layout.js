import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyle } from './styles/GlobalStyles';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Glass Coffee | Experiência Minimalista',
  description: 'A cafeteria com a melhor interface da web',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <Navbar />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}