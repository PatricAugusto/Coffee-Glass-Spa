import { MenuSection, SectionTitle, ProductGrid } from '../Menu/Menu.styles'
import CoffeeCard from '../CoffeeCard';

export default function Menu() {
  const coffeeProducts = [
    { id: 1, name: 'Espresso Intenso', price: 'R$ 8,50' },
    { id: 2, name: 'Cappuccino Glass', price: 'R$ 14,00' },
    { id: 3, name: 'Latte Macchiato', price: 'R$ 16,00' },
    { id: 4, name: 'Cold Brew Premium', price: 'R$ 12,50' },
    { id: 5, name: 'Mocha Caramel', price: 'R$ 18,00' },
    { id: 6, name: 'Flat White', price: 'R$ 15,00' },
  ];

  return (
    <MenuSection id="menu">
      <SectionTitle>Nosso Menu</SectionTitle>
      <ProductGrid>
        {coffeeProducts.map((item) => (
          <CoffeeCard key={item.id} product={item} />
        ))}
      </ProductGrid>
    </MenuSection>
  );
}