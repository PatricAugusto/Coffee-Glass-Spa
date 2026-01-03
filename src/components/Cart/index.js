import { useCart } from '@/context/CartContext';
import { CartOverlay, CartSidebar, CartHeader } from './Cart.styles';

export default function Cart() {
  const { isCartOpen, closeCart } = useCart();

  return (
    <>
      <CartOverlay $isOpen={isCartOpen} onClick={closeCart} />
      <CartSidebar $isOpen={isCartOpen}>
        <CartHeader>
          <h2>Seu Pedido</h2>
          <button onClick={closeCart}>&times;</button>
        </CartHeader>
        
        <div style={{ flex: 1, color: 'rgba(255,255,255,0.6)' }}>
          <p>O carrinho está vazio.</p>
        </div>

        <button style={{
          padding: '15px',
          background: '#d4a373',
          border: 'none',
          borderRadius: '10px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Finalizar Compra
        </button>
      </CartSidebar>
    </>
  );
}