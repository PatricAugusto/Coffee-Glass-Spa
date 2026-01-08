import { ContactSection, ContactContainer, ContactInfo, ContactForm } from './Contact.styles';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };

  return (
    <ContactSection id="contato">
      <ContactContainer>
        <ContactInfo>
          <h2>Fale <span>Conosco</span></h2>
          <p>Tem alguma dúvida ou quer reservar um espaço para eventos? Mande uma mensagem para nossa equipe.</p>
          
          <div className="info-item">
            <span>📍 Av. Paulista, 1000 - São Paulo</span>
          </div>
          <div className="info-item">
            <span>📞 (11) 99999-9999</span>
          </div>
          <div className="info-item">
            <span>✉️ contato@glasscoffee.com.br</span>
          </div>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit}>
          <input type="text" placeholder="Seu Nome" required />
          <input type="email" placeholder="Seu E-mail" required />
          <input type="text" placeholder="Assunto" />
          <textarea placeholder="Sua Mensagem" required></textarea>
          <button type="submit">ENVIAR MENSAGEM</button>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
}