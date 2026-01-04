'use client';
import styled from 'styled-components';

export const CartOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  z-index: 2000;
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'all' : 'none')};
  transition: all 0.3s ease-in-out;
`;

export const CartSidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: rgba(20, 20, 20, 0.8);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 2001;
  
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'all' : 'none')};
  transition: transform 0.4s cubic-bezier(0.77, 0, 0.175, 1);
  
  padding: 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);

  @media (max-width: 480px) {
    width: 100%;
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

export const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 5px 10px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  button {
    background: none;
    border: none;
    color: #d4a373;
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }

  span {
    color: #fff;
    font-weight: bold;
    min-width: 20px;
    text-align: center;
  }
`;

export const CartItemContainer = styled.div`
  flex: 1; 
  overflow-y: auto; 
  padding: 1rem 0;
  margin-bottom: 20px;

  &::-webkit-scrollbar { width: 5px; }
  &::-webkit-scrollbar-thumb {
    background: rgba(212, 163, 115, 0.2);
    border-radius: 10px;
  }

  .cart-item {
    padding: 1rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .item-main {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    button { background: none; border: none; color: #ff4d4d; cursor: pointer; }
  }

  .item-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const CartFooter = styled.div`
  background: rgba(255, 255, 255, 0.02);
  padding: 2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  .total-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    span { font-size: 1.1rem; opacity: 0.8; }
    strong { font-size: 1.4rem; color: #d4a373; }
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 1.2rem;
  background: #d4a373;
  color: #1e1e1e;
  border: none;
  border-radius: 8px;
  font-weight: 800;
  cursor: pointer;
  
  &:hover {
    filter: brightness(1.1);
  }
`;