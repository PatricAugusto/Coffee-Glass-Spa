'use client';
import styled from 'styled-components';

export const MenuSection = styled.section`
  padding: 80px 5%;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden; 
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
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
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;

  @media (max-width: 480px) {
    grid-template-columns: 1fr; 
    gap: 1rem;
  }
`;

export const AddButton = styled.button`
  background: #d4a373; 
  color: #1e1e1e;
  border: none;
  padding: 8px 20px;
  border-radius: 50px; 
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 15px;
  width: fit-content;

  &:hover {
    background: #b68a5d; 
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(212, 163, 115, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;