import { CartOverlay, CartSidebar, CartHeader } from './Cart.styles';

export default function Cart({ isOpen, onClose }) {
  return (
    <>
      <CartOverlay $isOpen={isOpen} onClick={onClose} />
      <CartSidebar $isOpen={isOpen}>
        <CartHeader>
          <h2>Seu Pedido</h2>
          <button onClick={onClose}>&times;</button>
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