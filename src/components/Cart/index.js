import { useCart } from '@/context/CartContext';
import { CartFooter, CartOverlay, CartSidebar, CartHeader } from './Cart.styles';

export default function Cart() {
  const { isCartOpen, closeCart, cartItems, cartTotal } = useCart();

  return (
    <>
      <CartOverlay $isOpen={isCartOpen} onClick={closeCart} />
      <CartSidebar $isOpen={isCartOpen}>
        <CartHeader>
          <h2>Seu Pedido</h2>
          <button onClick={closeCart}>&times;</button>
        </CartHeader>
        
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {cartItems.length === 0 ? (
            <p style={{ color: 'rgba(255,255,255,0.5)' }}>Carrinho vazio...</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} style={{ 
                marginBottom: '1rem', 
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                paddingBottom: '0.5rem' 
              }}>
                <h4 style={{ color: '#fff' }}>{item.name}</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#d4a373' }}>
                  <span>{item.quantity}x</span>
                  <span>{item.price}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <CartFooter>
            <div className="total-row">
              <span>Total do Pedido</span>
              <strong>{cartTotal}</strong>
            </div>
            <button style={{
              width: '100%',
              padding: '18px',
              background: '#d4a373',
              color: '#1e1e1e',
              border: 'none',
              borderRadius: '12px',
              fontWeight: '800',
              cursor: 'pointer',
              transition: 'transform 0.2s'
            }}>
              FINALIZAR COMPRA
            </button>
          </CartFooter>
        )}
      </CartSidebar>
    </>
  );
}