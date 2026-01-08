'use client';
import styled from 'styled-components';

export const TestimonialsSection = styled.section`
  padding: 100px 5%;
  background: #121212;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 0.5rem;
    span { color: #d4a373; }
  }

  .line {
    width: 60px;
    height: 3px;
    background: #d4a373;
    margin: 0 auto;
  }
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

export const TestimonialCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(212, 163, 115, 0.4);
  }

  .quote {
    color: #d4a373;
    font-size: 2rem;
    line-height: 0;
    margin-bottom: -10px;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    font-style: italic;
    line-height: 1.6;
    flex-grow: 1;
  }

  .user-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    padding-top: 1.5rem;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid #d4a373;
    }

    div {
      h4 { color: #fff; margin: 0; }
      span { color: rgba(255, 255, 255, 0.4); font-size: 0.8rem; }
    }
  }
`;