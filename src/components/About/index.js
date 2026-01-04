import { 
  AboutSection, 
  AboutContainer, 
  AboutImageWrapper, 
  AboutContent, 
  StatsGrid 
} from './About.styles';


export default function About() {
  return (
    <AboutSection id="sobre">
      <AboutContainer>
        <AboutImageWrapper>
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" 
            alt="Nossa Cafeteria" 
          />
        </AboutImageWrapper>

        <AboutContent>
          <h2>Tradição em cada <span>Grão</span></h2>
          <p>
            Desde a nossa fundação, a GlassCoffee busca redefinir a experiência de tomar café. 
            Não é apenas sobre a bebida, é sobre a pausa, o aroma e o momento de conexão.
          </p>
          <p>
            Trabalhamos exclusivamente com produtores locais e grãos selecionados, 
            garantindo um processo ético e um sabor incomparável em cada xícara que servimos.
          </p>

          <StatsGrid>
            <div className="stat-item">
              <h3>10+</h3>
              <span>Anos de História</span>
            </div>
            <div className="stat-item">
              <h3>25+</h3>
              <span>Tipos de Grãos</span>
            </div>
            <div className="stat-item">
              <h3>50k+</h3>
              <span>Clientes Felizes</span>
            </div>
          </StatsGrid>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
}