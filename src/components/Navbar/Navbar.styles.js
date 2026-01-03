'use client';
import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  z-index: 1000;
  
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  box-sizing: border-box;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: #fff;
  cursor: pointer;

  span {
    color: #d4a373; 
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  @media (max-width: 768px) {
    display: none; 
  }
`;

export const NavLink = styled.li`
  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #d4a373;
    }
  }
`;

export const NavButton = styled.button`
  padding: 10px 24px;
  border-radius: 20px;
  border: 1px solid #d4a373;
  background: transparent;
  color: #d4a373;
  cursor: pointer;
  font-weight: bold;
  margin-right: 10px;
  white-space: nowrap; 
  transition: all 0.3s ease;
  margin-left: 20px; 
  min-width: fit-content;

  &:hover {
    background: #d4a373;
    color: #1e1e1e;
    box-shadow: 0 0 15px rgba(212, 163, 115, 0.4);
  }

  &:active {
    transform: scale(0.95);
  }
`;