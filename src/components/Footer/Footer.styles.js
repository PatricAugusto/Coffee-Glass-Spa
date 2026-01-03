'use client';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 4rem 5% 2rem;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const BrandSection = styled.div`
  flex: 1;
  min-width: 250px;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #fff;
    span { color: #d4a373; }
  }

  p {
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.6;
    font-size: 0.9rem;
  }
`;

export const Copyright = styled.div`
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  width: 100%;
  text-align: center;
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.8rem;
`;