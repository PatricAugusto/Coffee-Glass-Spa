'use client';
import styled from 'styled-components';

export const AboutSection = styled.section`
  padding: 100px 5%;
  background: #121212;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`;

export const AboutContainer = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const AboutImageWrapper = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(212, 163, 115, 0.2), transparent);
  }
`;

export const AboutContent = styled.div`
  h2 {
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 1.5rem;
    
    span {
      color: #d4a373;
    }
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;

  .stat-item {
    h3 {
      color: #d4a373;
      font-size: 1.8rem;
      margin-bottom: 0.2rem;
    }
    span {
      color: rgba(255, 255, 255, 0.5);
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
`;