'use client';
import styled from 'styled-components';

export const HeroContainer = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: relative;
  position: relative;
  overflow: hidden;

  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
              url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1920');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  margin: 0;
  padding: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.4); 
  }
`;

export const GlassBox = styled.div`
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 30px;
  padding: 3rem;
  max-width: 700px;
  text-align: center;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #fff, #d4a373);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2.5rem;
  line-height: 1.6;
`;