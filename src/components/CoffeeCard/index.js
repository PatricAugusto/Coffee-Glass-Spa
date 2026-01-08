'use client'; 

import { useCart } from '@/context/CartContext';
import styled from 'styled-components';
import { AddButton } from '../Menu/Menu.styles';

const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  width: 300px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-weight: bold;
  color: #d4a373; 
`;

export default function CoffeeCard({ product }) {
  const { addToCart } = useCart();

  console.log("Produto recebido no Card:", product);

  if (!product) return <p style={{ color: 'red' }}>Erro no carregamento do card</p>;
  
  const { id, name, price } = product;

  return (
    <Card>
      <Title>{name}</Title>
      <Price>{price}</Price>
      <AddButton onClick={() => addToCart({ id, name, price })}>
        Adicionar
      </AddButton>
    </Card>
  );
}