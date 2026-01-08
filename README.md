# ☕ GlassCoffee - Coffee Shop Experience

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)

Uma interface de cafeteria premium desenvolvida com **Next.js**, focada em uma experiência de usuário elegante através do design **Glassmorphism**. O projeto conta com um sistema de pedidos em tempo real, alta responsividade e performance otimizada.

---

## ✨ Funcionalidades

* **🛒 Carrinho Inteligente**: Gerenciamento de estado global com Context API. Permite adicionar, remover e atualizar quantidades de produtos garantindo a integridade dos itens.
* **📱 Design Responsivo**: Totalmente adaptado para dispositivos móveis, tablets e desktops, com ajustes específicos para evitar vazamentos laterais (overflow).
* **💎 Estética Glassmorphism**: Uso avançado de `backdrop-filter`, transparências controladas e bordas sutis para criar uma interface moderna e sofisticada.
* **☕ Menu Dinâmico**: Renderização eficiente de produtos a partir de dados estruturados, utilizando validação de propriedades únicas (Keys) para performance do React.
* **📝 Seções Completas**: 
    * **Hero Section**: Impacto visual imediato.
    * **Menu**: Catálogo interativo de produtos.
    * **Sobre Nós**: Narrativa da marca e métricas de sucesso.
    * **Depoimentos**: Prova social com feedback de clientes.
    * **Contato**: Formulário funcional com estilo translúcido.

---

## 🚀 Tecnologias Utilizadas

* **Next.js 14** (App Router)
* **Styled Components** (CSS-in-JS)
* **React Context API** (Gerenciamento de Estado)
* **Google Fonts** (Tipografia refinada: Syne e Inter)

---

## 🛠️ Instalação e Uso

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/coffee-glass-spa.git](https://github.com/seu-usuario/coffee-glass-spa.git)
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

4.  **Acesse no navegador:**
    `http://localhost:3000`

---

## 📁 Estrutura do Projeto

```text
src/
├── app/                # Rotas e Layouts (Next.js App Router)
├── components/         # Componentes reutilizáveis
│   ├── Cart/           # Lógica e Estilo do Carrinho
│   ├── CoffeeCard/     # Card individual de produto com validação de props
│   ├── Menu/           # Grid de produtos responsivo
│   └── ...
├── context/            # Context API para estado global (CartContext)
├── styles/             # Estilos globais e Reset CSS
```

## 🔧 Correções Implementadas (Changelog)

- **Lógica de Pedidos:** Corrigido o mapeamento de IDs que causava agrupamento incorreto de itens diferentes.
- **Unique Keys:** Resolução do erro de console Each child in a list should have a unique key através da correta atribuição de IDs no .map().
- **Layout Fix (Cart):** Implementação de Flexbox dinâmico para garantir que o botão "Finalizar Pedido" permaneça fixo no rodapé.
- **Overflow Horizontal:** Ajuste de box-sizing e minmax no Grid do Menu para eliminar barras de rolagem indesejadas em dispositivos móveis.
- **Defesa de Props:** Implementação de verificações de nulidade (if (!product)) para evitar quebras de renderização (Error 500).

### 🤝 Contribuição
Gostou do projeto? Sinta-se à vontade para abrir uma Issue ou enviar um Pull Request com melhorias!

Desenvolvido com ☕ e dedicação.