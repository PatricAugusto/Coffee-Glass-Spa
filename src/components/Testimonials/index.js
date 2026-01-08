import { 
  TestimonialsSection, 
  TitleContainer, 
  TestimonialsGrid, 
  TestimonialCard 
} from './Testimonials.styles';

const testimonials = [
  {
    id: 1,
    name: "Ana Silveira",
    role: "Sommelier de Cafés",
    text: "A experiência na GlassCoffee é única. O grão selecionado e o ambiente minimalista criam o refúgio perfeito no meio da cidade.",
    image: "https://i.pravatar.cc/150?u=ana"
  },
  {
    id: 2,
    name: "Ricardo Mendes",
    role: "Arquiteto",
    text: "Como arquiteto, o design glassmorphism do espaço me encanta tanto quanto o Espresso Intenso. Simplesmente impecável.",
    image: "https://i.pravatar.cc/150?u=ricardo"
  },
  {
    id: 3,
    name: "Juliana Costa",
    role: "Freelancer",
    text: "Meu escritório favorito. O Wi-fi é ótimo, mas o Latte Macchiato é o que realmente me faz voltar todos os dias.",
    image: "https://i.pravatar.cc/150?u=juliana"
  }
];

export default function Testimonials() {
  return (
    <TestimonialsSection id="depoimentos">
      <TitleContainer>
        <h2>O que dizem nossos <span>Clientes</span></h2>
        <div className="line" />
      </TitleContainer>

      <TestimonialsGrid>
        {testimonials.map((item) => (
          <TestimonialCard key={item.id}>
            <span className="quote">“</span>
            <p>{item.text}</p>
            <div className="user-info">
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </div>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </TestimonialsSection>
  );
}