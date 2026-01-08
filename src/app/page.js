'use client';
import { useState } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Testimonials from '@/components/Testimonials';
import Cart from '@/components/Cart';
import Contact from '@/components/Contact'

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <main>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <div onClick={() => setIsCartOpen(true)}>
         <Hero />
      </div>
      <About />
      <Menu />
      <Testimonials />
      <Contact />
    </main>
  );
}