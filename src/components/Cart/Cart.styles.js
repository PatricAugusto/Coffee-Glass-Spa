'use client';
import styled from 'styled-components';

export const CartOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
`;

export const CartSidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? '0' : '-400px')};
  width: 400px;
  height: 100%;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 2001;
  transition: right 0.4s cubic-bezier(0.77, 0, 0.175, 1);
  padding: 2rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    width: 100%;
    right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  }
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  
  h2 { color: #fff; }
  
  button {
    background: none;
    border: none;
    color: #d4a373;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;