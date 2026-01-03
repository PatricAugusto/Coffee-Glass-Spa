'use client';
import styled from 'styled-components';

export const MenuSection = styled.section`
  padding: 100px 5%;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #fff;
  text-align: center;
  
  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 4px;
    background: #d4a373;
    margin: 10px auto;
    border-radius: 2px;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  width: 100%;
  max-width: 1200px;
`;