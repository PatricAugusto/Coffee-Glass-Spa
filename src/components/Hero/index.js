import { HeroContainer, GlassBox, Title, Subtitle } from './Hero.styles';

export default function Hero() {
  return (
    <HeroContainer>
      <GlassBox>
        <Title>O Café Perfeito em Cada Detalhe</Title>
        <Subtitle>
          Descubra a harmonia entre grãos selecionados e um ambiente 
          minimalista feito para você relaxar.
        </Subtitle>
        <button style={{
          padding: '15px 40px',
          fontSize: '1rem',
          borderRadius: '50px',
          border: 'none',
          background: '#d4a373',
          color: '#1e1e1e',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}>
          Explorar Menu
        </button>
      </GlassBox>
    </HeroContainer>
  );
}