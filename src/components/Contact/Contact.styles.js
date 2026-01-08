'use client';
import styled from 'styled-components';

export const ContactSection = styled.section`
  padding: 100px 5%;
  background: #0f0f0f;
  display: flex;
  justify-content: center;
`;

export const ContactContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 50px;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactInfo = styled.div`
  h2 {
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 20px;
    span { color: #d4a373; }
  }

  p {
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 30px;
    line-height: 1.6;
  }

  .info-item {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
    color: #fff;
    
    i { color: #d4a373; font-size: 1.2rem; }
  }
`;

export const ContactForm = styled.form`
  background: rgba(255, 255, 255, 0.03);
  padding: 40px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

  display: flex;
  flex-direction: column;
  gap: 20px;

  input, textarea {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 15px;
    border-radius: 8px;
    color: #fff;
    outline: none;
    transition: border-color 0.3s;

    &:focus {
      border-color: #d4a373;
    }
  }

  textarea {
    height: 150px;
    resize: none;
  }

  button {
    background: #d4a373;
    color: #1e1e1e;
    padding: 15px;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s, filter 0.2s;

    &:hover {
      transform: translateY(-3px);
      filter: brightness(1.1);
    }
  }
`;