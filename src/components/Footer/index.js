import { FooterContainer, FooterContent, BrandSection, Copyright } from './Footer.styles';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <BrandSection>
          <h3>GLASS<span>COFFEE</span></h3>
          <p>Elevando sua experiência com café através de um design minimalista e grãos de origem única.</p>
        </BrandSection>
        
        <div style={{ display: 'flex', gap: '3rem' }}>
          <div>
            <h4 style={{ color: '#d4a373', marginBottom: '1rem' }}>Contato</h4>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>contato@glasscoffee.com</p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>(11) 9999-9999</p>
          </div>
        </div>
      </FooterContent>

      <Copyright>
        © {new Date().getFullYear()} Patric Augusto. Todos os direitos reservados.
      </Copyright>
    </FooterContainer>
  );
}