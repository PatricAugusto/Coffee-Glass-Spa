import { MenuSection, SectionTitle, ProductGrid } from './Menu.styles';
import CoffeeCard from '@/components/CoffeeCard';

const PRODUCTS = [
  { id: 1, name: 'Espresso Intenso', price: 'R$ 8,50' },
  { id: 2, name: 'Cappuccino Glass', price: 'R$ 14,00' },
  { id: 3, name: 'Latte Macchiato', price: 'R$ 16,00' },
  { id: 4, name: 'Cold Brew Premium', price: 'R$ 12,50' },
  { id: 5, name: 'Mocha Caramel', price: 'R$ 18,00' },
  { id: 6, name: 'Flat White', price: 'R$ 15,00' },
];

export default function Menu() {
  return (
    <MenuSection id="menu">
      <SectionTitle>Nosso Menu</SectionTitle>
      <ProductGrid>
        {PRODUCTS.map((product) => (
          <CoffeeCard 
            key={product.id} 
            name={product.name} 
            price={product.price} 
          />
        ))}
      </ProductGrid>
    </MenuSection>
  );
}